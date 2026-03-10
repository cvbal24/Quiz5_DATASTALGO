import { useState } from "react";

const FormComponent = ({ generatePalette }) => {
  const [mood, setMood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePalette(mood);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">

        <input
          type="text"
          className="form-control"
          placeholder="Enter mood or theme"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />

        <button className="btn btn-primary" type="submit">
          Generate
        </button>

      </div>
    </form>
  );
};

export default FormComponent;