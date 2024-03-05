
import {Frame, Navigation} from '@shopify/polaris';
import {HomeIcon, OrderIcon} from '@shopify/polaris-icons';
import React from 'react';
import Routes from './Routes';

export default function AppFrame() {

    const navigationMarkup = (
        <Navigation location="/">
            <Navigation.Section
                items={[
                    {
                        url: '/',
                        label: 'Home',
                        icon: HomeIcon,
                    },
                    {
                        url: '/settings',
                        excludePaths: ['#'],
                        label: 'Settings',
                        icon: OrderIcon,
                        badge: '15',
                    },

                ]}
            />
        </Navigation>


    );


    return <Frame navigation={navigationMarkup}>
        <Routes/>
    </Frame>
}
