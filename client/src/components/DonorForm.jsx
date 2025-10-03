import { useState } from "react";

export default function DonorForm({ center, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    dob: "",
    fatherName: "",
    motherName: "",
    school: "",
    college: "",
    education: "",
    phone: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: Date.now(), ...formData, pdf: null });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-lg relative">
        <h2 className="text-2xl font-bold mb-4">{center.name} - Add Donor</h2>
        <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" onChange={handleChange} className="border p-2 rounded" required />
          <input name="bloodGroup" placeholder="Blood Group" onChange={handleChange} className="border p-2 rounded" required />
          <input name="dob" type="date" onChange={handleChange} className="border p-2 rounded" required />
          <input name="fatherName" placeholder="Father's Name" onChange={handleChange} className="border p-2 rounded" />
          <input name="motherName" placeholder="Mother's Name" onChange={handleChange} className="border p-2 rounded" />
          <input name="school" placeholder="School" onChange={handleChange} className="border p-2 rounded" />
          <input name="college" placeholder="College" onChange={handleChange} className="border p-2 rounded" />
          <input name="education" placeholder="Education" onChange={handleChange} className="border p-2 rounded" />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} className="border p-2 rounded" />

          <div className="flex justify-end space-x-2 mt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
