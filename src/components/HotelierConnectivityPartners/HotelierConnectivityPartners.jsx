import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBed, FaPlus, FaTrash, FaCalendarAlt, FaImage, FaLayerGroup, FaEye, FaSmoking, FaCheckCircle, FaRestroom, FaBuilding, FaHotel, FaLowVision, FaMoneyBill, FaAddressBook, FaCity, FaMailBulk, FaPhone, FaSearch, FaVideo, FaHistory } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { FaPerson, FaTicket } from "react-icons/fa6";
import React from "react";

const HotelierConnectivityPartners = () => {
const navigate = useNavigate();

const [connectivity, setConnectivity] = useState({
    channelManager:"",
    travelAgency:"",
})

const handleBack = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setConnectivity({ ...connectivity, [name]: checked });
    } else if (type === "file") {
      setConnectivity({ ...connectivity, [name]: files[0] });
    } else {
      setConnectivity({ ...connectivity, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", connectivity);
    navigate("/signup/property-usp");
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
          <h1 className="text-2xl font-bold text-black">
            Connectivity Partners
          </h1>
        </div>

        {/* Form Start */}
        <form onSubmit={handleSubmit} className="space-y-6">

            <div>
                        <Label> Do/Did you work with any Channel Manager? </Label>
                        <div className="space-y-1">
                          <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                            <span className="text-purple-500 mr-3">
                              <FaTicket />
                            </span>
                            <input
                              id="channelManager"
                              name="channelManager"
                              value={connectivity.channelManager}
                              onChange={handleChange}
                              placeholder="Mention if any..."
                              className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label> Connected with Travel Agency </Label>
                        <select
                        required
                        name="travelAgency"
                        value={connectivity.travelAgency}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-xl bg-white/80 shadow outline-none text-black"
                        >
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {connectivity.travelAgency === "yes" && (
                                      <div className="space-y-1">
                                        <Label> Mention the Agencies </Label>
                                        <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                                          <span className="text-purple-500 mr-3">
                                            <FaTicket />
                                          </span>
                                          <input
                                            id="agencies"
                                            name="agencies"
                                            placeholder="Mention the Agenicies..."
                                            className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                                            autoComplete="off"
                                            value={connectivity.agencies || ""}
                                            onChange={(e) =>
                                              setConnectivity({ ...connectivity, agencies: e.target.value })
                                            }
                                          />
                                        </div>
                                      </div>
                                    )}
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

export default HotelierConnectivityPartners
