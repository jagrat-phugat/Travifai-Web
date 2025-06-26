import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBed,
  FaPlus,
  FaTrash,
  FaCalendarAlt,
  FaImage,
  FaLayerGroup,
  FaEye,
  FaSmoking,
  FaCheckCircle,
  FaRestroom,
  FaBuilding,
  FaHotel,
  FaLowVision,
  FaMoneyBill,
} from "react-icons/fa";
import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { FaPerson } from "react-icons/fa6";

const BuildingRoomsDetails = () => {
  const navigate = useNavigate();

  const [rooms, setRooms] = useState([
    {
      roomName: "",
      floor: "",
      totalRooms: "",
      roomType: "",
      bedType: "",
      roomView: "",
      smokingAllowed: "no",
      balcony: "",
      amenities: "",
      extraBed: "no",
      baseRate: "",
      extraAdult: "",
      extraChild: "",
      occupancy: "",
      adults: "",
      children: "",
      startDate: "",
      endDate: "",
      totalPropertyRooms: "",
      roomImages: null,
    },
  ]);

  const handleChange = (i, e) => {
    const { name, value, type, files } = e.target;
    const updatedRooms = [...rooms];
    updatedRooms[i][name] = type === "file" ? files[0] : value;
    setRooms(updatedRooms);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const addRoom = () => {
    setRooms([
      ...rooms,
      {
        roomName: "",
        totalRooms: "",
        roomType: "",
        bedType: "",
        roomView: "",
        smokingAllowed: "no",
        amenities: "",
        extraBed: "",
        baseRate: "",
        extraAdult: "",
        extraChild: "",
        occupancy: "",
        roomImages: null,
      },
    ]);
  };

  const removeRoom = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms.splice(index, 1);
    setRooms(updatedRooms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Room Details:", rooms);
    navigate("/signup/connectivity-partners");
  };

  const Label = ({ children }) => (
    <h3 className="text-lg text-center font-bold text-black mb-2">
      {children}
    </h3>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-white px-4 py-6 font-sans">
      <div className="w-full max-w-3xl p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-purple-400 via-purple-300 to-white bg-opacity-60 backdrop-blur-lg border border-white border-opacity-30 space-y-6 transition-all duration-500">
        <div className="flex items-center space-x-2 mb-4">
          <button
            onClick={handleBack}
            className="text-black text-2xl hover:scale-110 transition"
          >
            <IoChevronBack />
          </button>
          <h1 className="text-2xl font-bold text-black">
            Property Room Details
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {rooms.map((room, i) => (
            <div
              key={i}
              className="border rounded-2xl p-6 bg-gradient-to-br from-purple-100 to-white space-y-4 relative"
            >
              <Label>Room Type {i + 1}</Label>
              <div className="space-y-1">
                <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <span className="text-purple-500 mr-3">
                    <FaBuilding />
                  </span>
                  <input
                    id="roomName"
                    name="roomName"
                    type="text"
                    value={room.roomName}
                    onChange={(e) => handleChange(i, e)}
                    placeholder="Room Type (e.g.,  Deluxe Room, Suite...)"
                    className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                    <span className="text-purple-500 mr-3">
                      <FaHotel />
                    </span>
                    <input
                      id="totalRooms"
                      name="totalRooms"
                      type="number"
                      value={room.totalRooms}
                      onChange={(e) => handleChange(i, e)}
                      placeholder="Total Rooms"
                      className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                    <span className="text-purple-500 mr-3">
                      <FaBed />
                    </span>
                    <input
                      id="bedType"
                      name="bedType"
                      type="text"
                      value={room.bedType}
                      onChange={(e) => handleChange(i, e)}
                      placeholder="Bed Type (e.g., Single, Double...)"
                      className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                    <span className="text-purple-500 mr-3">
                      <FaImage />
                    </span>
                    <input
                      id="roomView"
                      name="roomView"
                      type="text"
                      value={room.roomView}
                      onChange={(e) => handleChange(i, e)}
                      placeholder="Room View..."
                      className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <select
                  name="smokingAllowed"
                  value={room.smokingAllowed}
                  onChange={(e) => handleChange(i, e)}
                  className="w-full px-4 py-2 rounded-xl bg-white/80 shadow outline-none text-black"
                >
                  <option value="no">Smoking Not Allowed</option>
                  <option value="yes">Smoking Allowed</option>
                </select>
                <select
                  name="balcony"
                  value={room.balcony}
                  onChange={(e) => handleChange(i, e)}
                  className="w-full px-4 py-2 rounded-xl bg-white/80 shadow outline-none text-black"
                >
                  <option value="">Balcony</option>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div className="space-y-1">
                <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <span className="text-purple-500 mr-3">
                    <FaHotel />
                  </span>
                  <input
                    id="amenities"
                    name="amenities"
                    type="text"
                    value={room.amenities}
                    onChange={(e) => handleChange(i, e)}
                    placeholder="Ammenities (comma seperated)"
                    className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>

              <Label>Do you provide Extra Bed?</Label>
              <div className="flex p-4 space-x-4 text-center">
                <Label>
                  <input
                    type="radio"
                    name="extraBed"
                    value="yes"
                    checked={room.extraBed === "yes"}
                    onChange={(e) => handleChange(i, e)}
                    className="hover:scale-125 transition duration-200 ease-in-out transform p-3"
                  />{" "}
                  Yes
                </Label>
                <Label>
                  <input
                    type="radio"
                    name="extraBed"
                    value="no"
                    checked={room.extraBed === "no"}
                    onChange={(e) => handleChange(i, e)}
                    className="hover:scale-125 transition duration-200 ease-in-out transform p-3"
                  />{" "}
                  No
                </Label>
              </div>

              <Label>Room Prices</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                    <span className="text-purple-500 mr-3">
                      <FaMoneyBill />
                    </span>
                    <input
                      id="baseRate"
                      name="baseRate"
                      type="text"
                      value={room.baseRate}
                      onChange={(e) => handleChange(i, e)}
                      placeholder="Base Rate (in INR)"
                      className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                    <span className="text-purple-500 mr-3">
                      <FaMoneyBill />
                    </span>
                    <input
                      id="extraAdult"
                      name="extraAdult"
                      type="text"
                      value={room.extraAdult}
                      onChange={(e) => handleChange(i, e)}
                      placeholder="Extra Adult Charge"
                      className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                    <span className="text-purple-500 mr-3">
                      <FaMoneyBill />
                    </span>
                    <input
                      id="extraChild"
                      name="extraChild"
                      type="text"
                      value={room.extraChild}
                      onChange={(e) => handleChange(i, e)}
                      placeholder="Extra Child Charge"
                      className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <Label>Room Occupancy</Label>
                <div className="space-y-1">
                  <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                    <span className="text-purple-500 mr-3">
                      <FaPerson />
                    </span>
                    <input
                      id="occupancy"
                      name="occupancy"
                      type="number"
                      value={room.occupancy}
                      onChange={(e) => handleChange(i, e)}
                      placeholder="Maxm. Occupancy"
                      className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
              </div>
              <Label>Upload Room Images</Label>
              <input
                type="file"
                name="roomImages"
                accept="image/*"
                onChange={(e) => handleChange(i, e)}
                className="input block w-full mt-1 rounded-xl bg-white/80 shadow px-4 py-2 file:rounded-full file:bg-purple-100 file:text-purple-800 file:border-none"
                required
              />

              {rooms.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeRoom(i)}
                  className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              )}
            </div>
          ))}

          <div className="text-center">
            <button
              type="button"
              onClick={addRoom}
              className="inline-flex items-center px-4 py-2 bg-purple-700 text-white rounded-xl hover:bg-purple-600 hover:scale-110 transition duration-300 ease-in-out transform"
            >
              <FaPlus className="mr-2" /> Add Another Room Type
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

export default BuildingRoomsDetails;
