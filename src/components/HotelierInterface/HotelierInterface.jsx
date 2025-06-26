import React from 'react';
import { FaUser, FaPhotoVideo } from 'react-icons/fa';
import { MdDashboard, MdPadding, MdPages, MdTravelExplore, MdUploadFile } from 'react-icons/md';
import { AiOutlineProfile } from 'react-icons/ai';
import { FiLogOut, FiHeart } from 'react-icons/fi';
import { IoIosSwitch } from 'react-icons/io';
import logoImg from '../../assets/ic_launcher_round.png';
import { useNavigate } from 'react-router-dom';

const HotelierInterface = () => {

    const navigate = useNavigate();

    const routeMap = {
    'Property Information': '/property-info',
    'Building Rooms': '/building-rooms',
    'Connectivity Partners': '/connectivity-partners',
    'Property USP': '/property-usp',
    'Amenities / Add Ons': '/amenities',
    'Documents': '/documents',
    'Property Rules and Information': '/property-rules'
  };

  return (
    <div className="min-h-screen flex font-sans bg-gradient-to-b from-pink-100 to-white">

      {/* Sidebar */}
      <aside className="w-20 md:w-40 bg-white shadow-lg rounded-r-3xl p-4 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="text-center">
            <div className="h-12 w-12 md:h-16 md:w-16 bg-gray-300 rounded-full mx-auto mb-1 flex items-center justify-center font-bold text-xs md:text-sm">
                <button onClick={()=> {navigate('/')}}> <img src={logoImg} alt="Travifai" /> </button>
            </div>
          </div>
          <nav className="space-y-4 text-xs md:text-sm text-gray-700 font-semibold">
            <div className="flex flex-col items-center space-y-1">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex flex-col items-center justify-center h-16 w-16 text-purple-800 hover:scale-110 transition duration-200 shadow-md"
                >
                    <MdDashboard size={24} />
                    <span className="text-xs mt-1">Dashboard</span>
                </button>
            </div>
            <div className="flex flex-col items-center space-y-1">
                <button
                    onClick={() => navigate('/profile')}
                    className="flex flex-col items-center justify-center h-16 w-16 text-purple-800 hover:scale-110 transition duration-200 shadow-md"
                >
                    <MdPages size={24} />
                    <span className="text-xs mt-1">Profile</span>
                </button>
            </div>
            <div className="flex flex-col items-center space-y-1">
                <button
                    onClick={() => navigate('')}
                    className="flex flex-col items-center justify-center h-16 w-16 text-purple-800 hover:scale-110 transition duration-200 shadow-md"
                >
                    <MdPadding size={24} />
                    <span className="text-xs mt-1">Reels</span>
                </button>
            </div>
            <div className="flex flex-col items-center space-y-1">
                <button
                    onClick={() => navigate('')}
                    className="flex flex-col items-center justify-center h-16 w-16 text-purple-800 hover:scale-110 transition duration-200 shadow-md"
                >
                    <MdUploadFile size={24} />
                    <span className="text-xs mt-1">Upload Media</span>
                </button>
            </div>
            <div className="flex flex-col items-center space-y-1">
                <button
                    onClick={() => navigate('')}
                    className="flex flex-col items-center justify-center h-16 w-16 text-purple-800 hover:scale-110 transition duration-200 shadow-md"
                >
                    <MdTravelExplore size={24} />
                    <span className="text-xs mt-1">Travel Agency</span>
                </button>
            </div>
          </nav>
        </div>
        <button
      onClick={() => navigate('/login')}
      className="text-center text-sm font-medium text-purple-800 hover:scale-110 transition duration-200"
    >
      <FiLogOut className="mx-auto mb-1" size={20} />
      Logout
    </button>
      </aside>

      {/* Main Content */}
       <main className="flex-1 p-6 bg-pink-50">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        <button 
        className="text-xs border px-2 py-1 rounded-md flex items-center space-x-1"
        onClick={()=> {navigate('/login')}}
        >
          <IoIosSwitch />
          <span>Switch Profile</span>
        </button>
        
      </div>

      {/* Action Buttons */}
      <section className="grid grid-cols-1 gap-4">
      {Object.keys(routeMap).map((label, idx) => (
        <button
          key={idx}
          onClick={() => navigate(`/signup${routeMap[label]}`)}
          className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-xl shadow-md px-4 py-3 text-left font-semibold text-gray-800 hover:scale-105 transition"
        >
          <span>{label}</span>
        </button>
      ))}
    </section>
    </main>
    </div>
  );
};

export default HotelierInterface;
