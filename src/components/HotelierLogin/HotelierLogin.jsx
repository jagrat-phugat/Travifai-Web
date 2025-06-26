import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import carImage from '../../assets/namaste.png';
import bgImage from '../../assets/BgImageLightMode.png';

const HotelierLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in:', { email, password });
    navigate('/hotelier-dashboard');
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
      {/* Glass Card */}
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-6 w-full max-w-sm text-center shadow-lg mt-8">
        <h2 className="text-3xl font-extrabold text-black mb-4">Welcome Back</h2>
        <h2 className="text-3xl font-extrabold text-black mb-4">Sign In!</h2>


        {/* Social Logins */}
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-white p-2 rounded-full shadow-md hover:scale-105 transition">
            <img src="https://img.icons8.com/ios-filled/24/000000/facebook-new.png" alt="Facebook" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:scale-105 transition">
            <img src="https://img.icons8.com/ios-filled/24/000000/google-logo.png" alt="Google" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:scale-105 transition">
            <img src="https://img.icons8.com/ios-filled/24/000000/mac-os.png" alt="Apple" />
          </button>
        </div>

        {/* Login Fields */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Your email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-70 text-black placeholder-gray-600 outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Your password.."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-70 text-black placeholder-gray-600 outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-950 text-sm cursor-pointer underline">
              Forgot?
            </span>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-white bg-opacity-90 text-black font-semibold hover:bg-purple-200 transition shadow-md"
          >
            Sign in
          </button>
        </form>

        {/* Footer Text */}
        <div className="mt-4 text-sm text-black font-medium">
          
          <p>
            Don’t have any account?{' '}
            <span className="font-bold underline cursor-pointer" onClick={() => navigate('/signup')}>
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelierLogin;
