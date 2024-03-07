// AppFrame.js
import { Frame, Navigation } from '@shopify/polaris';
import { HomeMajorMonotone, OrdersMajorMonotone } from '@shopify/polaris-icons';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';

export default function AppFrame() {
    const navigationMarkup = (
        <Navigation location={location.pathname}>
            <Navigation.Section
                items={[
                    {
                        url: '/',
                        label: 'Home',
                        icon: HomeMajorMonotone,
                    },
                    {
                        url: '/settings',
                        label: 'Settings',
                        icon: OrdersMajorMonotone,
                    },
                ]}
            />
        </Navigation>
    );

    return (
        <Router>
            <Frame navigation={navigationMarkup}>
                <MainRouter />
            </Frame>
        </Router>
    );
}
