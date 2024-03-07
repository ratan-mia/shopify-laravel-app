
import { Frame, Navigation } from '@shopify/polaris';
import { HomeIcon, OrderIcon } from '@shopify/polaris-icons';
import React from 'react';
import MainRouter from './MainRouter';

export default function AppFrame() {

    const navigationMarkup = (
        <Navigation location={location.pathname}>
            <Navigation.Section
                items={[
                    {
                        url: '/',
                        label: 'Home',
                        exactMatch:true,
                        icon: HomeIcon,
                    },
                    {
                        url: '/settings',
                        exactMatch:true,
                        label: 'Settings',
                        icon: OrderIcon,
                        badge: '15',
                    },

                ]}
            />
        </Navigation>


    );


    return <Frame navigation={navigationMarkup}>
        <MainRouter/>
    </Frame>
}
