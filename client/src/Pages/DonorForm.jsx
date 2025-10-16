import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonorForm = () => {
  const navigate = useNavigate(); // React Router navigation
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    rhFactor: "",
    sex: "",
    hiv: "",
    weight: "",
    height: "",
    bloodPressure: "",
    donatedEarlier: "",
    previousDonationDate: "",
    diseases: "",
    spouseName: "",
    address: "",
    city: "",
    pinCode: "",
    phoneNumber: "",
    mobileNumber: "",
    email: "",
  });

  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false); // For mid-screen alert

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save to localStorage
    const existingDonors = JSON.parse(localStorage.getItem("donors")) || [];
    existingDonors.push(formData);
    localStorage.setItem("donors", JSON.stringify(existingDonors));

    // Success message
    setMessage("✅ Donor added successfully!");
    setShowAlert(true); // show alert

    // Hide alert after 2 seconds
    setTimeout(() => setShowAlert(false), 2000);

    // Reset form fields
    setFormData({
      name: "",
      bloodGroup: "",
      rhFactor: "",
      sex: "",
      hiv: "",
      weight: "",
      height: "",
      bloodPressure: "",
      donatedEarlier: "",
      previousDonationDate: "",
      diseases: "",
      spouseName: "",
      address: "",
      city: "",
      pinCode: "",
      phoneNumber: "",
      mobileNumber: "",
      email: "",
    });

    // Redirect to Dashboard after short delay
    setTimeout(() => navigate("/dashboard"), 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10 relative">
      {/* ✅ Mid-screen Success Alert */}
      {showAlert && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white px-10 py-6 rounded-xl shadow-2xl border border-green-500 animate-fadeIn">
            <h3 className="text-green-600 text-2xl font-semibold text-center">
              Donor Added Successfully!
            </h3>
          </div>
        </div>
      )}

      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg relative">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          🩸 Blood Donation Form
        </h2>

        {message && (
          <div className="text-center mb-4 text-green-600 font-semibold">
            {message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* existing fields unchanged */}
          <input
            type="text"
            name="name"
            placeholder="Name of the Donor"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500 flex-1"
          >
            <option value="">Select Blood Group</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
          </select>

          <select
            name="rhFactor"
            value={formData.rhFactor}
            onChange={handleChange}
            required
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500 flex-1"
          >
            <option value="">Select Rh Factor</option>
            <option value="+Ve">+Ve</option>
            <option value="-Ve">-Ve</option>
          </select>

          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            required
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select
            name="hiv"
            value={formData.hiv}
            onChange={handleChange}
            required
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          >
            <option value="">HIV Test Result</option>
            <option value="+Ve">+Ve</option>
            <option value="-Ve">-Ve</option>
          </select>

          <input
            type="text"
            name="weight"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          <input
            type="text"
            name="height"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          <input
            type="text"
            name="bloodPressure"
            placeholder="Blood Pressure"
            value={formData.bloodPressure}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          <select
            name="donatedEarlier"
            value={formData.donatedEarlier}
            onChange={handleChange}
            required
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          >
            <option value="">Donated Earlier?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <input
            type="date"
            name="previousDonationDate"
            value={formData.previousDonationDate}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          <input
            type="text"
            name="diseases"
            placeholder="Diseases (if any)"
            value={formData.diseases}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          <input
            type="text"
            name="spouseName"
            placeholder="Spouse/Husband Name"
            value={formData.spouseName}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500 md:col-span-2"
          ></textarea>

          <input
            type="text"
            name="city"
            placeholder="City/District"
            value={formData.city}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          <input
            type="text"
            name="pinCode"
            placeholder="Pin Code"
            value={formData.pinCode}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500 md:col-span-2"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-all font-semibold"
          >
            Submit Donor Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonorForm;
