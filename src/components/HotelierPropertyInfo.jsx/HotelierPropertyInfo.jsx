import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import {
  FaPhone,
  FaLandmark,
  FaEnvelope,
  FaVideo,
  FaBuilding,
  FaMailBulk,
  FaAddressBook,
  FaSearch,
  FaCity,
} from "react-icons/fa";
import { FaPerson, FaUserSecret } from "react-icons/fa6";

const HotelierPropertyInfo = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    hotelName: "",
    ownerName: "",
    designation: "",
    internalPhone: "",
    internalLandline: "",
    internalEmail: "",
    guestPhone: "",
    guestLandline: "",
    guestEmail: "",
    landmark: "",
    address: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
    agreed: false,
    propertyType: "",
    relationship: "",
    onLease: false,
    totalRooms: "",
    registerOTA: false,
    commission: "",
    videoFile: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (type === "file") {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    navigate("/signup/building-rooms");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const propertyTypes = [
    { label: "Homestay", value: "homestay" },
    { label: "Hotel", value: "hotel" },
    { label: "Cottage", value: "cottage" },
    { label: "Villa", value: "villa" },
    { label: "Motel", value: "motel" },
    { label: "Resort", value: "resort" },
    { label: "Guest House", value: "guestHouse" },
    { label: "Hostel", value: "hostel" },
    { label: "Chain Hotels", value: "chainHotel" },
    { label: "Lodge", value: "lodge" },
    {
      label: "Treehouse / Tents / Boathouse",
      value: "treehouse/tent/boathouse",
    },
    { label: "Farm Stay", value: "farmstay" },
  ];

  const designationOptions = [
    { label: "Owner", value: "Owner" },
    { label: "Manager", value: "Manager" },
    { label: "Employee", value: "Employee" },
    { label: "Receptionist", value: "Receptionist" },
    { label: "Other", value: "Other" },
  ];

  const relationshipOptions = [
    { label: "Owner", value: "owner" },
    { label: "Tenant", value: "tenant" },
    { label: "Co-owner", value: "co-owner" },
    { label: "Franchise Partner", value: "franchise" },
    { label: "Property Manager", value: "manager" },
    { label: "Investor", value: "investor" },
    { label: "Agent", value: "agent" },
    { label: "Other", value: "other" },
  ];

  const FileUpload = ({ name, accept, onChange }) => (
    <input
      type="file"
      name={name}
      accept={accept}
      onChange={onChange}
      className="block w-full mt-1 rounded-xl bg-white/80 shadow px-4 py-2 file:rounded-full file:bg-purple-100 file:text-purple-800 file:border-none"
    />
  );

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
            Property Information
          </h1>
        </div>

        {/* Form Start */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Hotel Info */}
          <div>
            <Label> Hotel Name </Label>
            <div className="space-y-1">
              <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                <span className="text-purple-500 mr-3">
                  <FaBuilding />
                </span>
                <input
                  id="hotelName"
                  name="hotelName"
                  value={form.hotelName}
                  onChange={handleChange}
                  placeholder="Hotel Name..."
                  className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <Label> Business Owner Name </Label>
            <div className="space-y-1">
              <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                <span className="text-purple-500 mr-3">
                  <FaPerson />
                </span>
                <input
                  id="ownerName"
                  name="ownerName"
                  value={form.ownerName}
                  onChange={handleChange}
                  placeholder="Business Owner Name..."
                  className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <Label> Designation </Label>
            <select
              name="designation"
              value={form.designation}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-white/80 shadow outline-none text-black"
            >
              <option value="">Select</option>
              {designationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {form.designation === "Other" && (
              <div className="space-y-1">
                <Label> Specify Designation </Label>
                <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <span className="text-purple-500 mr-3">
                    <FaPerson />
                  </span>
                  <input
                    id="otherDesignation"
                    name="otherDesignation"
                    placeholder="Please Specify your Designation..."
                    className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                    autoComplete="off"
                    value={form.otherDesignation || ""}
                    onChange={(e) =>
                      setForm({ ...form, otherDesignation: e.target.value })
                    }
                  />
                </div>
              </div>
            )}
          </div>

          {/* Contact Details */}
          <div className="border p-4 rounded-xl">
            <Label> Contact Details (For Internal Use) </Label>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <span className="text-purple-500 mr-3">
                    <FaPhone />
                  </span>
                  <input
                    id="internalTel"
                    name="internalTel"
                    type="tel"
                    value={form.internalPhone}
                    onChange={handleChange}
                    placeholder="Phone..."
                    className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <span className="text-purple-500 mr-3">
                    <FaPhone />
                  </span>
                  <input
                    id="internalLandline"
                    name="internalLandline"
                    type="tel"
                    value={form.internalLandline}
                    onChange={handleChange}
                    placeholder="Landline..."
                    className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <span className="text-purple-500 mr-3">
                    <FaMailBulk />
                  </span>
                  <input
                    id="internalEmail"
                    name="internalEmail"
                    type="email"
                    value={form.internalEmail}
                    onChange={handleChange}
                    placeholder="E-Mail..."
                    className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border p-4 rounded-xl">
            <Label> Contact Details (For Guest Use) </Label>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <span className="text-purple-500 mr-3">
                    <FaPhone />
                  </span>
                  <input
                    id="guestTel"
                    name="guestTel"
                    type="tel"
                    value={form.guestPhone}
                    onChange={handleChange}
                    placeholder="Phone..."
                    className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <span className="text-purple-500 mr-3">
                    <FaPhone />
                  </span>
                  <input
                    id="guestLandline"
                    name="guestLandline"
                    type="tel"
                    value={form.guestLandline}
                    onChange={handleChange}
                    placeholder="Landline..."
                    className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <span className="text-purple-500 mr-3">
                    <FaMailBulk />
                  </span>
                  <input
                    id="guestEmail"
                    name="guestEmail"
                    type="email"
                    value={form.guestEmail}
                    onChange={handleChange}
                    placeholder="E-Mail..."
                    className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="border p-4 rounded-xl">
            <Label>Location Details</Label>
            <div className="space-y-1">
              <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                <span className="text-purple-500 mr-3">
                  <FaAddressBook />
                </span>
                <input
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Your Address..."
                  className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="space-y-1">
                <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <span className="text-purple-500 mr-3">
                    <FaCity />
                  </span>
                  <input
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <span className="text-purple-500 mr-3">
                    <FaCity />
                  </span>
                  <input
                    id="state"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <span className="text-purple-500 mr-3">
                    <FaCity />
                  </span>
                  <input
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Country"
                    className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <span className="text-purple-500 mr-3">
                    <FaSearch />
                  </span>
                  <input
                    id="pincode"
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    placeholder="Pincode (XXXXXX)"
                    className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={form.agreed}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                I agree to the terms and conditions and confirm the address
                provided here is as per the registration or lease document
              </label>
            </div>
          </div>

          {/* Property Details */}
          <div>
            <Label>Property Type</Label>
            <select
              required
              name="propertyType"
              value={form.propertyType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-white/80 shadow outline-none text-black"
            >
              <option value="">Select</option>
              {propertyTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Label>Property Relationship</Label>
            <select
              required
              name="relationship"
              value={form.relationship}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-white/80 shadow outline-none text-black"
            >
              <option value="">Select Relationship</option>
              {relationshipOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-semibold text-lg md:text-base">
              Property on Lease:
            </span>
            <input
              type="checkbox"
              name="onLease"
              checked={form.onLease}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label>Total Number of Inventories/Rooms in Hotel</Label>
            <div className="space-y-1">
              <div className="flex items-center bg-white/80 rounded-xl px-4 py-2 shadow focus-within:ring-2 focus-within:ring-purple-400 transition">
                <span className="text-purple-500 mr-3">
                  <FaSearch />
                </span>
                <input
                  id="totalRooms"
                  name="totalRooms"
                  value={form.totalRooms}
                  onChange={handleChange}
                  placeholder="No of Rooms"
                  className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                  autoComplete="off"
                  type="number"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-medium">Register on OTAs:</span>
            <input
              type="checkbox"
              name="registerOTA"
              checked={form.registerOTA}
              onChange={handleChange}
              required
            />
          </div>

          {form.registerOTA && (
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">
                {" "}
                Commission Paid to OTAs
              </label>
              <select
                name="commission"
                value={form.commission}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl bg-white/80 shadow outline-none text-black"
              >
                <option value="">Select Commission Rate</option>
                {[
                  { value: "5-10%", label: "5% - 10%" },
                  { value: "10-15%", label: "10% - 15%" },
                  { value: "15-20%", label: "15% - 20%" },
                  { value: "20%+", label: "20%+" },
                ].map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Video Upload */}
          <div className="border p-4 rounded-xl bg-white shadow-md">
            <p className="font-semibold mb-2 flex items-center gap-2">
              <FaVideo className="text-lg" /> Upload Hotel Introductory Video
            </p>
            <FileUpload name="videoDemo" onChange={handleChange} />
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

export default HotelierPropertyInfo;
