
import { useState } from "react";
import DonorForm from "./components/DonorForm";
import ProfilesTable from "./components/DonorList";

function Dashboard() {
  const [centers, setCenters] = useState([{ id: 1, name: "Central Blood Bank", donors: [] }]);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [showDonorForm, setShowDonorForm] = useState(false);
  const [showProfiles, setShowProfiles] = useState(false);
  const [newCenterName, setNewCenterName] = useState("");

  const addCenter = () => {
    if (newCenterName.trim() !== "") {
      setCenters([...centers, { id: Date.now(), name: newCenterName, donors: [] }]);
      setNewCenterName("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 p-8">
      <h1 className="text-4xl font-bold mb-10 text-center text-red-700 tracking-wide drop-shadow-sm">
        🩸 Blood Bank Dashboard
      </h1>

      {/* Add Center Section */}
      <div className="max-w-lg mx-auto mb-10 bg-white rounded-2xl shadow-lg border border-red-100 p-5 flex items-center">
        <input
          type="text"
          value={newCenterName}
          onChange={(e) => setNewCenterName(e.target.value)}
          placeholder="Enter new center name..."
          className="border border-gray-300 p-3 rounded-l-xl flex-1 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          onClick={addCenter}
          className="bg-red-600 text-white px-6 py-3 rounded-r-xl font-medium hover:bg-red-700 transition-all duration-200"
        >
          + Add
        </button>
      </div>

      {/* Centers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {centers.map((center) => (
          <div
            key={center.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              {center.name}
            </h2>

            <div className="flex flex-col space-y-4">
              <button
                className="bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 font-medium shadow-sm transition-transform duration-200 hover:scale-[1.02]"
                onClick={() => {
                  setSelectedCenter(center);
                  setShowDonorForm(true);
                }}
              >
                Fill Donor Form
              </button>

              <button
                className="bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 font-medium shadow-sm transition-transform duration-200 hover:scale-[1.02]"
                onClick={() => {
                  setSelectedCenter(center);
                  setShowProfiles(true);
                }}
              >
                View Profiles
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Donor Form Modal */}
      {showDonorForm && selectedCenter && (
        <DonorForm
          center={selectedCenter}
          onClose={() => setShowDonorForm(false)}
          onSave={(donor) => {
            setCenters(
              centers.map((c) =>
                c.id === selectedCenter.id ? { ...c, donors: [...c.donors, donor] } : c
              )
            );
            setShowDonorForm(false);
          }}
        />
      )}

      {/* Profiles Modal */}
      {showProfiles && selectedCenter && (
        <ProfilesTable
          center={selectedCenter}
          onClose={() => setShowProfiles(false)}
          onUpdateDonors={(updatedDonors) => {
            setCenters(
              centers.map((c) =>
                c.id === selectedCenter.id ? { ...c, donors: updatedDonors } : c
              )
            );
          }}
        />
      )}
    </div>
  );
}

export default Dashboard;
