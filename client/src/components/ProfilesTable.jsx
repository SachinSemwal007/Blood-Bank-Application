import { useState } from "react";
import UploadPDF from "./UploadPDF";

export default function ProfilesTable({ center, onClose, onUpdateDonors }) {
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  const handlePDFUpload = (donorId, pdfFile) => {
    const updatedDonors = center.donors.map((d) => (d.id === donorId ? { ...d, pdf: pdfFile } : d));
    onUpdateDonors(updatedDonors);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-3xl p-6 relative overflow-y-auto max-h-full">
        <h2 className="text-2xl font-bold mb-4">{center.name} - Donors</h2>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Blood Group</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">PDF</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {center.donors.map((donor) => (
              <tr key={donor.id}>
                <td className="border px-4 py-2">{donor.name}</td>
                <td className="border px-4 py-2">{donor.bloodGroup}</td>
                <td className="border px-4 py-2">{donor.phone}</td>
                <td className="border px-4 py-2">
                  {donor.pdf ? <a href={donor.pdf} target="_blank" className="text-blue-600">View PDF</a> : "N/A"}
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                    onClick={() => {
                      setSelectedDonor(donor);
                      setShowUpload(true);
                    }}
                  >
                    Upload PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={onClose}>
            Close
          </button>
        </div>

        {showUpload && selectedDonor && (
          <UploadPDF
            donor={selectedDonor}
            onClose={() => setShowUpload(false)}
            onUpload={(file) => handlePDFUpload(selectedDonor.id, file)}
          />
        )}
      </div>
    </div>
  );
}
