const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const palettes = {
  calm: [
    { name: "Powder Blue", hex: "#B0E0E6" },
    { name: "Seafoam", hex: "#9FE2BF" },
    { name: "Lavender", hex: "#E6E6FA" },
    { name: "Misty Rose", hex: "#FFE4E1" },
    { name: "Slate Blue", hex: "#6A5ACD" },
  ],
  sunset: [
    { name: "Coral", hex: "#FF7F50" },
    { name: "Tangerine", hex: "#F28500" },
    { name: "Gold", hex: "#FFD700" },
    { name: "Rose", hex: "#FF5E78" },
    { name: "Plum", hex: "#8E4585" },
  ],
  forest: [
    { name: "Moss Green", hex: "#8A9A5B" },
    { name: "Pine", hex: "#01796F" },
    { name: "Olive", hex: "#708238" },
    { name: "Bark Brown", hex: "#5C4033" },
    { name: "Fern", hex: "#4F7942" },
  ],
  pastel: [
    { name: "Pastel Pink", hex: "#FFD1DC" },
    { name: "Pastel Mint", hex: "#C1F0DC" },
    { name: "Pastel Yellow", hex: "#FFFACD" },
    { name: "Pastel Lilac", hex: "#E0BBE4" },
    { name: "Pastel Blue", hex: "#AEC6CF" },
  ],
  default: [
    { name: "Crimson", hex: "#DC143C" },
    { name: "Royal Blue", hex: "#4169E1" },
    { name: "Goldenrod", hex: "#DAA520" },
    { name: "Teal", hex: "#008080" },
    { name: "Orchid", hex: "#DA70D6" },
  ],
};

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Backend is running" });
});

app.get("/api/palette", (req, res) => {
  const moodOrTheme = String(req.query.theme || req.query.mood || "default").toLowerCase();
  const selectedPalette = palettes[moodOrTheme] || palettes.default;
  res.json(selectedPalette);
});

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});