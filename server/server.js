const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Booking = require("./models/Booking");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const aiRoutes = require("./routes/ai");

const app = express();

// ================= MIDDLEWARE =================

app.use(cors());
app.use(express.json());

// ================= MONGODB CONNECTION =================

let mongoConnection = null;

async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!mongoConnection) {
    mongoConnection = mongoose
      .connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 10000,
      })
      .then(() => {
        console.log("MongoDB Connected Successfully!");
      })
      .catch((error) => {
        mongoConnection = null;
        console.log("MongoDB Connection Error:", error.message);
        throw error;
      });
  }

  await mongoConnection;
}

// ================= DATABASE MIDDLEWARE =================

// AI and home routes do not need MongoDB
app.use(async (req, res, next) => {
  if (req.path === "/" || req.path.startsWith("/api/ai")) {
    return next();
  }

  try {
    if (mongoose.connection.readyState !== 1) {
      await connectDB();
    }

    next();
  } catch (error) {
    console.log("Database middleware error:", error.message);

    return res.status(503).json({
      success: false,
      message: "Database connection failed.",
    });
  }
});

// ================= AUTH ROUTES =================

app.use("/api/auth", authRoutes);

// ================= ADMIN ROUTES =================

app.use("/api/admin", adminRoutes);

// ================= AI ROUTES =================

app.use("/api/ai", aiRoutes);

// ================= HOME =================

app.get("/", (req, res) => {
  res.send("ExplorePK Travel Server is Running!");
});

// ================= CREATE BOOKING =================

app.post("/api/bookings", async (req, res) => {
  try {
    const booking = new Booking(req.body);

    const savedBooking = await booking.save();

    res.status(201).json({
      success: true,
      message: "Booking submitted successfully!",
      booking: savedBooking,
    });
  } catch (error) {
    console.log("Booking Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to submit booking",
      error: error.message,
    });
  }
});

// ================= GET BOOKINGS =================

app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.log("Fetch Bookings Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
      error: error.message,
    });
  }
});

// ================= START SERVER =================

if (require.main === module) {
  const PORT = 5000;

  app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);

    try {
      await connectDB();
    } catch (error) {
      console.log("MongoDB is NOT connected.");
    }
  });
}

// ================= EXPORT APP =================

module.exports = app;