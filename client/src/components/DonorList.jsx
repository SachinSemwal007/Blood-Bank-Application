import { useEffect, useState } from "react";

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");

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
        storedDonors[index].pdf = reader.result;
        setDonors(storedDonors);
        localStorage.setItem("donors", JSON.stringify(storedDonors));

        setAlertMessage(
          `📩 PDF uploaded! Notification sent to ${storedDonors[index].mobileNumber}`
        );
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 m-1 bg-gray-100 relative">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-red-600">
        🩸 Donor Profiles
      </h2>

      {donors.length === 0 ? (
        <p>No donors added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg text-sm sm:text-base">
            <thead>
              <tr className="bg-red-600 text-white text-left">
                <th className="p-2">Name</th>
                <th className="p-2">Blood Group</th>
                <th className="p-2">Mobile</th>
                <th className="p-2">Email</th>
                <th className="p-2">Upload PDF</th>
              </tr>
            </thead>
            <tbody>
              {donors.map((donor, index) => (
                <tr key={index} className="border-b text-left">
                  <td className="p-2">{donor.name}</td>
                  <td className="p-2">
                    {donor.bloodGroup} {donor.rhFactor}
                  </td>
                  <td className="p-2">{donor.mobileNumber}</td>
                  <td className="p-2">{donor.email}</td>
                  <td className="p-2">
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={(e) => handlePDFUpload(e, index)}
                      className="border p-1 rounded-md w-full sm:w-auto text-xs sm:text-sm"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ✅ Custom Alert Modal */}
{alertMessage && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 p-4">
    {/* ❌ Close Button - Fixed Top Right */}
    <button
      onClick={() => setAlertMessage("")}
      className="fixed top-4 right-4 text-white text-2xl font-bold z-50 hover:text-red-400"
    >
      ✖
    </button>

    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-sm text-center relative z-40">
      <p className="text-gray-800 mb-4 text-sm sm:text-base">{alertMessage}</p>
      <button
        onClick={() => setAlertMessage("")}
        className="bg-red-600 text-white px-3 py-2 rounded text-sm sm:text-base hover:bg-red-700 w-full sm:w-auto"
      >
        OK
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default DonorList;
