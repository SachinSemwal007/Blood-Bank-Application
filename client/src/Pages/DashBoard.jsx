import { useState } from "react";
import {
  Droplet,
  Building2,
  UserPlus,
  Users,
  LogOut,
  Menu,
  X,
  User,
  Settings,
  Bell,
} from "lucide-react";
import DonorForm from "./DonorForm";
import ProfilesTable from "../components/DonorList";

function Dashboard() {
  const [centers, setCenters] = useState([
    { id: 1, name: "Central Blood Bank", donors: [] },
  ]);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [showProfiles, setShowProfiles] = useState(false);
  const [showDonorForm, setShowDonorForm] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newCenterName, setNewCenterName] = useState("");

  const addCenter = () => {
    if (newCenterName.trim() !== "") {
      setCenters([
        ...centers,
        { id: Date.now(), name: newCenterName, donors: [] },
      ]);
      setNewCenterName("");
    }
  };

  const totalDonors = centers.reduce((sum, c) => sum + c.donors.length, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-red-700 to-red-900 text-white transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-red-600">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2">
                <Droplet className="w-6 h-6 text-red-600" fill="currentColor" />
              </div>
              <div>
                <h2 className="font-bold text-lg">Blood Bank</h2>
                <p className="text-xs text-red-200">Management System</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-800 hover:bg-red-600 transition"
            >
              <Building2 className="w-5 h-5" />
              <span className="font-medium">Centers</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-800 transition"
            >
              <Users className="w-5 h-5" />
              <span className="font-medium">All Donors</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-800 transition"
            >
              <UserPlus className="w-5 h-5" />
              <span className="font-medium">Add Donor</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-800 transition"
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </a>
          </nav>

          {/* User Profile in Sidebar */}
          <div className="p-4 border-t border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-800 rounded-full p-2">
                <User className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">Admin User</p>
                <p className="text-xs text-red-200">Administrator</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-800 hover:bg-red-600 rounded-lg transition text-sm">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Navigation Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                {sidebarOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Dashboard
                </h1>
                <p className="text-sm text-gray-500">Welcome back, Admin</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
              </button>
              <div className="hidden sm:flex items-center gap-3 px-3 py-2 bg-gray-100 rounded-lg">
                <div className="bg-red-600 rounded-full p-1.5">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Admin User
                  </p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Total Centers */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">
                    Total Centers
                  </p>
                  <p className="text-3xl font-bold text-gray-800 mt-1">
                    {centers.length}
                  </p>
                </div>
                <div className="bg-red-100 rounded-full p-3">
                  <Building2 className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </div>

            {/* Total Donors */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">
                    Total Donors
                  </p>
                  <p className="text-3xl font-bold text-gray-800 mt-1">
                    {totalDonors}
                  </p>
                </div>
                <div className="bg-blue-100 rounded-full p-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Active Today */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">
                    Active Today
                  </p>
                  <p className="text-3xl font-bold text-gray-800 mt-1">0</p>
                </div>
                <div className="bg-green-100 rounded-full p-3">
                  <Droplet
                    className="w-6 h-6 text-green-600"
                    fill="currentColor"
                  />
                </div>
              </div>
            </div>

            {/* Pending */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Pending</p>
                  <p className="text-3xl font-bold text-gray-800 mt-1">0</p>
                </div>
                <div className="bg-purple-100 rounded-full p-3">
                  <UserPlus className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Add Center */}
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-red-600" />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                Add New Center
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={newCenterName}
                onChange={(e) => setNewCenterName(e.target.value)}
                placeholder="Enter blood bank center name"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                onClick={addCenter}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition font-semibold shadow-md flex items-center justify-center gap-2"
              >
                <Building2 className="w-5 h-5" />
                Add Center
              </button>
            </div>
          </div>

          {/* Centers Grid */}
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Building2 className="w-6 h-6 text-red-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                Blood Bank Centers
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {centers.map((center) => (
                <div
                  key={center.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-red-600 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 sm:p-6 border-b border-red-100">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                          {center.name}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {center.donors.length}{" "}
                            {center.donors.length === 1 ? "Donor" : "Donors"}
                          </span>
                        </div>
                      </div>
                      <div className="bg-red-600 rounded-full p-2">
                        <Droplet
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 space-y-3">
                    {/* Open Donor Form Modal */}
                    <button
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow-md flex items-center justify-center gap-2"
                      onClick={() => {
                        setSelectedCenter(center);
                        setShowDonorForm(true);
                      }}
                    >
                      <UserPlus className="w-5 h-5" />
                      Fill Donor Form
                    </button>

                    {/* Open Profiles */}
                    <button
                      className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold shadow-md flex items-center justify-center gap-2"
                      onClick={() => {
                        setSelectedCenter(center);
                        setShowProfiles(true);
                      }}
                    >
                      <Users className="w-5 h-5" />
                      View Profiles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Donor Form Modal */}
      {showDonorForm && selectedCenter && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-[90%] max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setShowDonorForm(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <DonorForm
              center={selectedCenter}
              onClose={() => setShowDonorForm(false)}
              onSave={(donor) => {
                setCenters(
                  centers.map((c) =>
                    c.id === selectedCenter.id
                      ? { ...c, donors: [...c.donors, donor] }
                      : c
                  )
                );
                setShowDonorForm(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Profiles Modal */}
      {showProfiles && selectedCenter && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-[90%] max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setShowProfiles(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <ProfilesTable
              center={selectedCenter}
              onClose={() => setShowProfiles(false)}
              onUpdateDonors={(updatedDonors) => {
                setCenters(
                  centers.map((c) =>
                    c.id === selectedCenter.id
                      ? { ...c, donors: updatedDonors }
                      : c
                  )
                );
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
