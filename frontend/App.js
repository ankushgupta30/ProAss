import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import DashboardPage from './pages/DashboardPage'; // Example page - create these later
import TeamManagementPage from './pages/TeamManagementPage'; // Example page
import ProfilePage from './pages/ProfilePage'; // Example page

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/team-management" element={<TeamManagementPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    {/* You can add a default route or a 404 page here */}
                </Routes>
            </div>
        </Router>
    );
}

export default App; 