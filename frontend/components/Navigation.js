import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav style={{ display: 'flex', gap: '20px' }}>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/team-management">Team Management</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    );
}

export default Navigation; 