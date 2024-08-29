import { Routes, Route } from 'react-router-dom';
import './styles/index.css';
import LandingPage from './pages/LandingPage';
import LoginSignUp from './pages/LogInSignUp';
import Navbar from './components/Navbar';
import { useAuth } from './context/AuthContext'; 

function App() {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className='min-h-screen w-full'>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/account" element={<LoginSignUp />} />
          {/* Add additional routes here */}
        </Routes>
    </div>
  );
}

export default App;
