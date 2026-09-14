const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Booking = require("./models/Booking");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

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

// Make sure MongoDB is connected before ANY API request
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    return res.status(503).json({
      success: false,
      message: "Database connection failed.",
    });
  }
});

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("ExplorePK Travel Server is Running!");
});

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

app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
      error: error.message,
    });
  }
});

if (require.main === module) {
  const PORT = 5000;

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;