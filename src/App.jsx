import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Programs from "./pages/public/Programs";

// Protected Pages
import Dashboard from "./pages/protected/Dashboard";
// import Profile from "./pages/protected/Profile";

// Role-Based Pages
// import CaregiverPortal from "./pages/protected/CaregiverPortal";
// import MentorDashboard from "./pages/protected/MentorDashboard";
// import AdminPortal from "./pages/admin/AdminPortal";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        
        {/* Role-Based Routes */}
        {/* <Route path="/caregiver" element={<CaregiverPortal />} />
        <Route path="/mentor" element={<MentorDashboard />} />
        <Route path="/admin" element={<AdminPortal />} /> */}
      </Routes>
    </Router>
  );
}

export default App; 