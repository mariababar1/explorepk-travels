const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        message: "Please enter a question.",
      });
    }

    const text = message.toLowerCase();

    let reply =
      "I can help you with Pakistan destinations, honeymoon trips, family trips, adventure travel, and budget-friendly options. What type of trip are you planning?";

    if (
      text.includes("honeymoon") ||
      text.includes("romantic") ||
      text.includes("couple")
    ) {
      reply =
        "For a honeymoon in Pakistan, I recommend Hunza or Skardu. 🌸 Hunza is perfect for beautiful mountain views, peaceful stays and romantic sightseeing. Skardu is great for scenic landscapes, lakes and a more adventurous honeymoon experience.";
    } else if (
      text.includes("family") ||
      text.includes("kids") ||
      text.includes("children")
    ) {
      reply =
        "For a family trip, Murree, Swat and Hunza are great choices. 🏔️ Murree is convenient for a short trip, while Swat and Hunza offer beautiful scenery and family-friendly activities.";
    } else if (
      text.includes("friend") ||
      text.includes("friends") ||
      text.includes("adventure")
    ) {
      reply =
        "For a friends or adventure trip, I recommend Hunza, Skardu or Swat. 🏔️ You can enjoy hiking, sightseeing, lakes, mountain views and exciting outdoor activities.";
    } else if (
      text.includes("budget") ||
      text.includes("cheap") ||
      text.includes("affordable")
    ) {
      reply =
        "For a budget-friendly Pakistan trip, consider Murree, Swat or Nathiagali. 💰 These destinations can work well for shorter trips while still offering beautiful scenery and enjoyable activities.";
    } else if (
      text.includes("best places") ||
      text.includes("best place") ||
      text.includes("visit") ||
      text.includes("destination")
    ) {
      reply =
        "Some of the best places to visit in Pakistan are Hunza, Skardu, Swat, Murree, Naran Kaghan and Nathiagali. 🏔️ Your best choice depends on your budget, season and type of trip.";
    } else if (
      text.includes("hunza")
    ) {
      reply =
        "Hunza is an excellent choice for scenic travel. 🏔️ You can explore Attabad Lake, Passu, Karimabad and the surrounding mountain valleys. It is especially popular for couples, families and sightseeing.";
    } else if (
      text.includes("skardu")
    ) {
      reply =
        "Skardu is ideal for mountain lovers and adventure travelers. 🏔️ Popular attractions include Shangrila, Upper Kachura Lake, Deosai and beautiful mountain landscapes.";
    } else if (
      text.includes("murree")
    ) {
      reply =
        "Murree is a convenient choice for a short family or couple trip. 🌲 You can visit Mall Road, Kashmir Point, Pindi Point and Patriata while enjoying the cool mountain weather.";
    } else if (
      text.includes("swat")
    ) {
      reply =
        "Swat Valley is known for beautiful mountains, rivers and peaceful scenery. 🌿 It is a good option for families, friends and nature lovers.";
    }

    res.json({
      reply,
    });
  } catch (error) {
    console.error("AI Assistant Error:", error);

    res.status(500).json({
      message: "Travel assistant is temporarily unavailable.",
    });
  }
});

module.exports = router;