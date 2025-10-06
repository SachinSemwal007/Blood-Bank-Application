import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Droplet, Heart } from "lucide-react";
import { assest } from '../assets/asset';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "Admin" && password === "Admin@123") {
      alert("Login Successful! Redirecting to dashboard...");
      navigate('/dashboard');
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex flex-col">
      {/* Header/Navbar */}
      <div className="bg-gradient-to-r from-red-700 via-red-800 to-red-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-center gap-2 sm:gap-3">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-white rounded-full flex justify-center">
              <img
                className="w-8 h-8 sm:w-8 sm:h-8"
                src={assest.HandLogo} alt="" />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-wide">
              Blood Donor Management System
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm">Jharkhand</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 md:py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-stretch">
          
          {/* Left Section - Quote and Image */}
          <div className="flex flex-col h-full justify-between space-y-4 sm:space-y-6 md:space-y-8">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex-grow min-h-[200px] sm:min-h-[250px]">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 h-full flex items-center justify-center">
                <div className="text-center text-white p-4 sm:p-6 md:p-8">
                  <Droplet className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-2 sm:mb-4 opacity-90" fill="currentColor" />
                  <Heart className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto animate-pulse" fill="currentColor" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-b-4 border-red-600 flex-grow">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-red-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
                    "रक्तदान महादान"
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-4">
                    "एक यूनिट रक्त, कई जीवन बचा सकता है।"
                  </p>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">
                    Join us in saving lives. Every drop counts, every donor matters.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Login Form */}
          <div className="bg-white shadow-2xl rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border-t-4 border-red-700 flex flex-col justify-between h-full">
            <div className="text-center mb-6 sm:mb-8">
              <div className="bg-red-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Droplet className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" fill="currentColor" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                Admin Login
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm">
                Access the blood donation management portal
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium text-sm">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium text-sm">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
              </div>

              {message && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-600 text-sm text-center font-medium">{message}</p>
                </div>
              )}

              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2.5 sm:py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Login
              </button>
            </div>

            <div className="mt-4 sm:mt-6 space-y-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Need help?</span>
                </div>
              </div>

              <div className="text-center space-y-2">
                <p className="text-gray-600 text-xs sm:text-sm">
                  Forgot your password?{" "}
                  <span className="text-red-600 hover:text-red-700 cursor-pointer font-medium">
                    Reset here
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 bg-gradient-to-r from-red-50 to-pink-50 p-3 sm:p-4 rounded-lg text-center border border-red-100">
              <p className="text-red-700 font-semibold text-xs sm:text-sm">
                "आपका एक कदम, किसी के जीवन की आशा।"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-400 text-xs sm:text-sm">
          <p>© 2025 ACM | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;