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
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Blood Bank Dashboard</h1>

      {/* Add Center */}
      <div className="flex mb-6 max-w-md">
        <input
          type="text"
          value={newCenterName}
          onChange={(e) => setNewCenterName(e.target.value)}
          placeholder="New center name"
          className="border p-2 rounded-l-lg flex-1 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          onClick={addCenter}
          className="bg-red-600 text-white px-4 rounded-r-lg hover:bg-red-700 transition"
        >
          + Add Center
        </button>
      </div>

      {/* Centers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {centers.map((center) => (
          <div key={center.id} className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <h2 className="text-2xl font-semibold mb-4">{center.name}</h2>

            <div className="flex flex-col space-y-2">
              <button
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => {
                  setSelectedCenter(center);
                  setShowDonorForm(true);
                }}
              >
                Fill Donor Form
              </button>

              <button
                className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
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
              centers.map((c) => (c.id === selectedCenter.id ? { ...c, donors: updatedDonors } : c))
            );
          }}
        />
      )}
    </div>
  );
}

export default Dashboard;
