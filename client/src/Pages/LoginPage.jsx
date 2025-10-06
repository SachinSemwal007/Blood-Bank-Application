
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Droplet, Heart, Activity } from "lucide-react";
// just for checking the commits

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50">
      {/* Header/Navbar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white rounded-full p-2">
              <Droplet className="w-8 h-8 text-red-600" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">Jharkhand Government</h1>
              <p className="text-blue-100 text-xs">Health Department</p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-white font-bold text-2xl tracking-wide">
              Blood Donation Camp Portal
            </h2>
            <p className="text-blue-100 text-sm">Jharkhand</p>
          </div>

          <div className="flex items-center space-x-2">
            <Activity className="w-6 h-6 text-white" />
            <span className="text-white text-sm font-medium">Emergency: 104</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Quote and Image */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 h-80 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Droplet className="w-32 h-32 mx-auto mb-4 opacity-90" fill="currentColor" />
                  <Heart className="w-16 h-16 mx-auto animate-pulse" fill="currentColor" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-b-4 border-red-600">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 rounded-full p-3">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    "रक्तदान महादान"
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    "एक यूनिट रक्त, कई जीवन बचा सकता है।"
                  </p>
                  <p className="text-gray-700 font-medium">
                    Join us in saving lives. Every drop counts, every donor matters.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-red-50 rounded-lg p-3">
                      <p className="text-2xl font-bold text-red-600">10K+</p>
                      <p className="text-xs text-gray-600">Donors</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <p className="text-2xl font-bold text-red-600">50K+</p>
                      <p className="text-xs text-gray-600">Lives Saved</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <p className="text-2xl font-bold text-red-600">200+</p>
                      <p className="text-xs text-gray-600">Camps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Login Form */}
          <div className="bg-white shadow-2xl rounded-2xl p-10 border-t-4 border-red-700">
            <div className="text-center mb-8">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Droplet className="w-8 h-8 text-red-600" fill="currentColor" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Admin Login
              </h2>
              <p className="text-gray-600 text-sm">
                Access the blood donation management portal
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium text-sm">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
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
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
              </div>

              {message && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-600 text-sm text-center font-medium">{message}</p>
                </div>
              )}

              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Login
              </button>
            </div>

            <div className="mt-6 space-y-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Need help?</span>
                </div>
              </div>

              <div className="text-center space-y-2">
                <p className="text-gray-600 text-sm">
                  Forgot your password?{" "}
                  <span className="text-red-600 hover:text-red-700 cursor-pointer font-medium">
                    Reset here
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg text-center border border-red-100">
              <p className="text-red-700 font-semibold text-sm">
                "आपका एक कदम, किसी के जीवन की आशा।"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-gray-400 text-sm">
          <p>© 2025 Government of Jharkhand - Health Department | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
