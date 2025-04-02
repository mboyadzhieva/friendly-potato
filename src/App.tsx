
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Login from './pages/Login';
import Register from './pages/Register';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import './App.css';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}>
          <IconButton component={Link} to="/profile" sx={{ color: 'primary.main' }}>
            <AccountCircleIcon />
          </IconButton>
        </Box>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
