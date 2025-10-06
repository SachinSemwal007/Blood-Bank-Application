import { useEffect, useState } from "react";

const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const storedDonors = JSON.parse(localStorage.getItem("donors")) || [];
    setDonors(storedDonors);
  }, []);

  
  const handlePDFUpload = (e, index) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const storedDonors = [...donors];
      storedDonors[index].pdf = reader.result; // save PDF as base64
      setDonors(storedDonors);
      localStorage.setItem("donors", JSON.stringify(storedDonors));

      // Simulate SMS/WhatsApp notification
      alert(`📩 PDF uploaded! Notification sent to ${storedDonors[index].mobileNumber}`);
    };
    reader.readAsDataURL(file);
  }
};


  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-red-600">🩸 Donor Profiles</h2>
      {donors.length === 0 ? (
        <p>No donors added yet.</p>
      ) : (
        <table className="w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-2">Name</th>
              <th>Blood Group</th>
              <th>Mobile</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{donor.name}</td>
                <td>{donor.bloodGroup} {donor.rhFactor}</td>
                <td>{donor.mobileNumber}</td>
                <td>{donor.email}</td>
                 <td>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => handlePDFUpload(e, index)}
          className="border p-1 rounded-md"
        />
      </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DonorList;
