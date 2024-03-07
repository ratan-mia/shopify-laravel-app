// MainRouter.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import Home from '../Home';
import Settings from '../Settings';

export default function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<ErrorPage />} /> {/* Add a catch-all route for undefined routes */}
        </Routes>
    );
}
