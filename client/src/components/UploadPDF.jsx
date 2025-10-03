import { useState } from "react";

export default function UploadPDF({ donor, onClose, onUpload }) {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const fileURL = URL.createObjectURL(file); // placeholder for now
      onUpload(fileURL);
      // Here later we will send file to backend and trigger SMS/WhatsApp
      onClose();
      alert(`PDF uploaded for ${donor.name}. Notification sent!`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Upload PDF for {donor.name}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} required />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
