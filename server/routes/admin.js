const express = require("express");

const User = require("../models/User");
const Booking = require("../models/Booking");
const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

// ================= ADMIN DASHBOARD =================

router.get("/dashboard", adminAuth, async (req, res) => {
  try {
    // Total users
    const totalUsers = await User.countDocuments();

    // Total bookings
    const totalBookings = await Booking.countDocuments();

    // Recent bookings
    const recentBookings = await Booking.find()
      .sort({ createdAt: -1 })
      .limit(6);

    // Popular destinations
    const popularDestinations = await Booking.aggregate([
      {
        $group: {
          _id: "$destination",
          bookings: { $sum: 1 },
        },
      },
      {
        $sort: {
          bookings: -1,
        },
      },
      {
        $limit: 5,
      },
    ]);

    // Send dashboard data
    res.json({
      success: true,

      stats: {
        totalUsers,
        totalBookings,
      },

      recentBookings,

      popularDestinations,
    });
  } catch (error) {
    console.log("Admin Dashboard Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to load admin dashboard.",
    });
  }
});

module.exports = router;