import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import DashBoard from './Pages/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<LoginPage />} />
       <Route path="/dashboard" element={<DashBoard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
