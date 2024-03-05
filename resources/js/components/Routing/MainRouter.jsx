import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../Home';
import Settings from '../Settings';

export default function MainRouter() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    );
}
