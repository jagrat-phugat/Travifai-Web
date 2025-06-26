import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/BgImageLightMode.png';

const HotelierSignUp = ({nextStep}) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    hotelName: '',
    profession: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up data:', form);
    navigate('/signup/interface');
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Glassmorphism Card */}
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-6 w-full max-w-sm text-center shadow-lg mt-8">
        <h2 className="text-3xl font-extrabold text-black mb-1">Sign Up</h2>
        <p className="text-sm text-gray-800 font-medium mb-4">Welcome to Travifai</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name and Phone */}
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="px-3 py-2 rounded-xl bg-white bg-opacity-70 text-black placeholder-gray-600 outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="px-3 py-2 rounded-xl bg-white bg-opacity-70 text-black placeholder-gray-600 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Id"
            required
            className="w-full px-3 py-2 rounded-xl bg-white bg-opacity-70 text-black placeholder-gray-600 outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Hotel Name */}
          <input
            type="text"
            name="hotelName"
            value={form.hotelName}
            onChange={handleChange}
            placeholder="Hotel Name"
            required
            className="w-full px-3 py-2 rounded-xl bg-white bg-opacity-70 text-black placeholder-gray-600 outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Profession Dropdown */}
          <select
            name="profession"
            value={form.profession}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-xl bg-white bg-opacity-70 text-black placeholder-gray-600 outline-none focus:ring-2 focus:ring-purple-400 appearance-none"
          >
            <option value="" disabled>Profession</option>
            <option value="owner">Hotel Owner</option>
            <option value="manager">Manager</option>
            <option value="marketer">Marketer</option>
            <option value="receptionist">Receptionist</option>
          </select>

          {/* Create Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-white bg-opacity-90 text-black font-semibold hover:bg-purple-200 transition shadow-md"
          >
            Create
          </button>
        </form>

        {/* Footer Text */}
        <div className="mt-4 text-sm text-black font-medium">
          <p>
            Have an account?{' '}
            <span className="font-bold underline cursor-pointer" onClick={() => navigate('/login')}>
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelierSignUp;
