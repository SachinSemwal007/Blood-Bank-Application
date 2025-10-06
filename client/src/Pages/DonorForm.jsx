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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Get existing donors from localStorage
    const existingDonors = JSON.parse(localStorage.getItem("donors")) || [];

    // Add new donor
    existingDonors.push(formData);

    // Save back to localStorage
    localStorage.setItem("donors", JSON.stringify(existingDonors));

    // Show success message
    setMessage("✅ Donor added successfully!");

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
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
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
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Name of the Donor"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          {/* Blood Group */}
          <input
            type="text"
            name="bloodGroup"
            placeholder="Blood Group"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          {/* Rh */}
          <select
            name="rhFactor"
            value={formData.rhFactor}
            onChange={handleChange}
            required
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select Rh Factor</option>
            <option value="+Ve">+Ve</option>
            <option value="-Ve">-Ve</option>
          </select>

          {/* Sex */}
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

          {/* HIV */}
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

          {/* Weight */}
          <input
            type="text"
            name="weight"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          {/* Height */}
          <input
            type="text"
            name="height"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          {/* Blood Pressure */}
          <input
            type="text"
            name="bloodPressure"
            placeholder="Blood Pressure"
            value={formData.bloodPressure}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          {/* Donated Earlier */}
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

          {/* Previous Donation Date */}
          <input
            type="date"
            name="previousDonationDate"
            value={formData.previousDonationDate}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          {/* Diseases */}
          <input
            type="text"
            name="diseases"
            placeholder="Diseases (if any)"
            value={formData.diseases}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          {/* Spouse Name */}
          <input
            type="text"
            name="spouseName"
            placeholder="Spouse/Husband Name"
            value={formData.spouseName}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          {/* Address */}
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500 md:col-span-2"
          ></textarea>

          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="City/District"
            value={formData.city}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          {/* Pin Code */}
          <input
            type="text"
            name="pinCode"
            placeholder="Pin Code"
            value={formData.pinCode}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          {/* Phone Number */}
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          {/* Mobile Number */}
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-red-500 md:col-span-2"
          />

          {/* Close Button */}
          <button
            onClick={() => navigate("/dashboard")}
            className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-gray-300"
          >
            Close
          </button>

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
