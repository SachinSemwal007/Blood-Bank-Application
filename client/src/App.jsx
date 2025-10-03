import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
 const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // 
   const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    if (username === "Admin" && password === "Admin@123") {
      navigate("/dashboard");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Blood Bank Login</h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {message && <p className="text-red-500 text-sm text-center">{message}</p>}

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Forgot password? <span className="text-red-600 hover:underline cursor-pointer">Reset</span>
          </p>
          <p className="text-gray-600 text-sm mt-2">
            New user? <span className="text-red-600 hover:underline cursor-pointer">Register now</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
