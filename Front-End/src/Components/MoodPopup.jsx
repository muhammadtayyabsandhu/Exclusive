import React from "react";
import { useMood } from "../Context/MoodContext";

const MoodPopup = ({ onClose }) => {
  const { setMood } = useMood();

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood); // 👈 mood ko global state me save
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 text-center">
        <h2 className="text-xl font-bold mb-4">Select Your Mood</h2>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleMoodSelect("happy")}
            className="bg-green-400 text-white py-2 rounded-lg hover:bg-green-500"
          >
            Happy
          </button>
          <button
            onClick={() => handleMoodSelect("sad")}
            className="bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500"
          >
            Sad
          </button>
          <button
            onClick={() => handleMoodSelect("love")}
            className="bg-pink-400 text-white py-2 rounded-lg hover:bg-pink-500"
          >
            Love
          </button>
          <button
            onClick={() => handleMoodSelect("romantic")}
            className="bg-red-400 text-white py-2 rounded-lg hover:bg-red-500"
          >
            Romantic
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoodPopup;
