import React from 'react';
import { Route, Routes } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
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


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/settings',
        element: <Settings />,
    }
]);
