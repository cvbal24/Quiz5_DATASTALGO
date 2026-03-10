import { useState } from "react";
import FormComponent from "../components/FormComponent";
import Message from "../components/Message";
import EmptyState from "../components/EmptyState";
import Loader from "../components/Loader";

const palettes = {
  calm: [
    { name: "Sky Blue", hex: "#87CEEB" },
    { name: "Powder Blue", hex: "#B0E0E6" },
    { name: "Mint Green", hex: "#98FF98" },
    { name: "Lavender", hex: "#E6E6FA" },
    { name: "Soft White", hex: "#F8F8FF" },
  ],
  sunset: [
    { name: "Coral", hex: "#FF7F50" },
    { name: "Orange Red", hex: "#FF4500" },
    { name: "Golden Yellow", hex: "#FFD700" },
    { name: "Peach", hex: "#FFE5B4" },
    { name: "Deep Purple", hex: "#5D3FD3" },
  ],
  ocean: [
    { name: "Deep Sea Blue", hex: "#003366" },
    { name: "Ocean Blue", hex: "#0077BE" },
    { name: "Turquoise", hex: "#40E0D0" },
    { name: "Seafoam", hex: "#9FE2BF" },
    { name: "Foam White", hex: "#F0FFFF" },
  ],
  forest: [
    { name: "Pine Green", hex: "#01796F" },
    { name: "Forest Green", hex: "#228B22" },
    { name: "Olive Green", hex: "#708238" },
    { name: "Earth Brown", hex: "#8B4513" },
    { name: "Moss Green", hex: "#8A9A5B" },
  ],

   dark: [
    { name: "Charcoal", hex: "#36454F" },
    { name: "Gunmetal", hex: "#2A3439" },
    { name: "Midnight Blue", hex: "#191970" },
    { name: "Dark Slate Gray", hex: "#2F4F4F" },
    { name: "Jet Black", hex: "#343434" },
  ],
};

const HomeScreen = () => {
  const [palette, setPalette] = useState(null);
  const [loading, setLoading] = useState(false);

  const generatePalette = (mood) => {
    setLoading(true);

    setTimeout(() => {
      const key = mood.toLowerCase();
      setPalette(palettes[key] || null);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h1 className="text-center mb-3">Color Palette Generator</h1>

        <p className="text-center text-muted">
          Available palettes: <b>calm, sunset, ocean, forest, dark</b>
        </p>

        <FormComponent generatePalette={generatePalette} />

        {loading && <Loader />}

        {!palette && !loading && <EmptyState />}

        {palette && <Message palette={palette} />}

      </div>

    </div>
  );
};

export default HomeScreen;