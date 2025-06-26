import React, { useState } from "react";
import { FaBuilding, FaMap, FaNewspaper, FaPlus } from "react-icons/fa";
import { FaPerson, FaPersonRifle } from "react-icons/fa6";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const HotelierPropertyUSP = () => {
  const navigate = useNavigate();

  const [USP, setUSP] = useState({
    age: "",
    event: "",
    ownerDescription: "",
    nearbyLocation: [""],
  });

  const handleNearbyChange = (index, e) => {
    const updatedLocations = [...USP.nearbyLocation];
    updatedLocations[index] = e.target.value;
    setUSP({ ...USP, nearbyLocation: updatedLocations });
  };

  const addNearbyLocation = () => {
    setUSP({ ...USP, nearbyLocation: [...USP.nearbyLocation, ""] });
  };

  const removeNearbyLocation = (index) => {
    const updated = USP.nearbyLocation.filter((_, i) => i !== index);
    setUSP({ ...USP, nearbyLocation: updated });
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setUSP({ ...USP, [name]: checked });
    } else if (type === "file") {
      setUSP({ ...USP, [name]: files[0] });
    } else {
      setUSP({ ...USP, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", USP);
    navigate("/signup/amenties");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const Label = ({ children }) => (
    <h3 className="text-lg text-center font-bold text-black mb-2">
      {children}
    </h3>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-white px-4 py-6 font-sans">
      <div className="w-full max-w-3xl p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-purple-400 via-purple-300 to-white bg-opacity-60 backdrop-blur-lg border border-white border-opacity-30 space-y-6 transition-all duration-500">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-4">
          <button
            onClick={handleBack}
            className="text-black text-2xl hover:scale-110 transition"
          >
            <IoChevronBack />
          </button>
          <h1 className="text-2xl font-bold text-black">Property USP</h1>
        </div>

        {/* Form Start */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label> Age of Property </Label>
            <div className="space-y-1">
              <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                <span className="text-purple-500 mr-3">
                  <FaBuilding />
                </span>
                <input
                  id="age"
                  name="age"
                  value={USP.age}
                  onChange={handleChange}
                  placeholder="Write Here..."
                  className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <Label>
              {" "}
              Any News or Historical Events about Property (Write N/A if None.){" "}
            </Label>
            <div className="space-y-1">
              <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                <span className="text-purple-500 mr-3">
                  <FaNewspaper />
                </span>
                <input
                  id="event"
                  name="event"
                  value={USP.event}
                  onChange={handleChange}
                  placeholder="Write Here..."
                  className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <Label> Property Owner Description </Label>
            <div className="space-y-1">
              <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                <span className="text-purple-500 mr-3">
                  <FaPersonRifle />
                </span>
                <input
                  id="ownerDescription"
                  name="ownerDescription"
                  value={USP.ownerDescription}
                  onChange={handleChange}
                  placeholder="Write Description Here..."
                  className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <Label>Nearby Places</Label>
            {USP.nearbyLocation.map((location, i) => (
              <div
                key={i}
                className="flex items-center bg-white/80 rounded-xl px-4 py-2 mb-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition"
              >
                <span className="text-purple-500 mr-3">
                  <FaMap />
                </span>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => handleNearbyChange(i, e)}
                  placeholder="Write Here..."
                  className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                  autoComplete="off"
                  required
                />
                {i > 0 && (
                  <button
                    type="button"
                    onClick={() => removeNearbyLocation(i)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addNearbyLocation}
              className="text-sm text-purple-700 mt-2 hover:underline"
            >
              + Add More
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-purple-700 text-white font-semibold hover:bg-purple-500 hover:scale-105 transition duration-300 ease-in-out transform"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotelierPropertyUSP;
