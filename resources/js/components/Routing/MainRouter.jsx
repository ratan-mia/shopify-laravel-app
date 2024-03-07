import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../Home';
import Settings from '../Settings';

export default function MainRouter() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/settings" element={<Settings />} />
            </Routes>
        </div>
    );
}
