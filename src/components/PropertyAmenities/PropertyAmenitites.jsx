import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const initialAmenities = [
  "Wi-Fi",
  "Parking",
  "Swimming Pool",
  "Gym",
  "Spa",
  "Room Service",
  "Restaurant",
  "Laundry",
  "Airport Shuttle",
  "Air Conditioning",
  "TV",
  "Pet Care",
  "Wheelchair Accessible",
  "Power Backup",
  "Bar/Lounge",
  "BathTub",
  "House-Keeping",
  "In room dining",
];

const PropertyAmenities = () => {
  const [amenitiesList, setAmenitiesList] = useState(initialAmenities);
  const [selectedAmenities, setSelectedAmenities] = useState({});
  const [newAmenity, setNewAmenity] = useState("");
  const navigate = useNavigate();

  const handleAmenityToggle = (amenity) => {
    setSelectedAmenities((prev) =>
      prev[amenity]
        ? { ...prev, [amenity]: undefined }
        : { ...prev, [amenity]: "Free" }
    );
  };

  const handleTypeChange = (amenity, type) => {
    setSelectedAmenities((prev) => ({
      ...prev,
      [amenity]: type,
    }));
  };

  const handleAddAmenity = () => {
    const trimmed = newAmenity.trim();
    if (trimmed && !amenitiesList.includes(trimmed)) {
      setAmenitiesList([...amenitiesList, trimmed]);
      setSelectedAmenities({ ...selectedAmenities, [trimmed]: "Free" });
      setNewAmenity("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = Object.entries(selectedAmenities).filter(
      ([, value]) => value
    );
    console.log("Submitted Amenities:", Object.fromEntries(filtered));
    navigate("/signup/documents"); 
  };

  const handleBack = () => {
    navigate(-1);
  };

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
          <h1 className="text-2xl font-bold text-black"> Amenities </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Add More */}
          <div className="flex gap-2 items-center mb-4">
            <input
              type="text"
              placeholder="Add new amenity..."
              value={newAmenity}
              onChange={(e) => setNewAmenity(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-white/80 text-black shadow border outline-none"
            />
            <button
              type="button"
              onClick={handleAddAmenity}
              className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition"
            >
              Add
            </button>
          </div>

          {/* Amenities List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {amenitiesList.map((amenity) => (
              <div
                key={amenity}
                className="flex justify-between items-center bg-purple-50 px-4 py-3 rounded-xl shadow"
              >
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    checked={!!selectedAmenities[amenity]}
                    onChange={() => handleAmenityToggle(amenity)}
                    className="accent-purple-600 w-4 h-4"
                  />
                  {amenity}
                </label>
                {selectedAmenities[amenity] && (
                  <select
                    value={selectedAmenities[amenity]}
                    onChange={(e) => handleTypeChange(amenity, e.target.value)}
                    className="bg-white border border-gray-300 text-sm px-3 py-1 rounded-md text-black shadow"
                  >
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                  </select>
                )}
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-purple-700 text-white font-semibold hover:bg-purple-500 hover:scale-105 transition duration-300"
          >
            Submit Amenities
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyAmenities;
