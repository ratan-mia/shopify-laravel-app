import { AppProvider } from '@shopify/polaris';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';
import AppFrame from './components/Routing/AppFrame';
import translations from '@shopify/polaris/locales/en.json';
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// import './components/Example';


if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById('root'));

    Index.render(

        <React.StrictMode>
            <BrowserRouter>
            <AppProvider i18n={translations}>
                <AppFrame/>
            </AppProvider>
            </BrowserRouter>

        </React.StrictMode>

    )
}
