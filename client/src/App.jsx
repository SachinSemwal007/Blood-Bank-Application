import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import DashBoard from './Pages/DashBoard';
import DonorForm from './Pages/DonorForm';       // ✅ Import DonorForm    // ✅ Import DonorList
import UploadPDF from './components/UploadPDF';   

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashBoard />} />

        {/* Donor Management */}
        <Route path="/add-donor" element={<DonorForm />} />
      
        <Route path="/upload-pdf/:id" element={<UploadPDF />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
