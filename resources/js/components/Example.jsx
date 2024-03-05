import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import { AppProvider } from '@shopify/polaris';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById('root'));

    Index.render(

        <React.StrictMode>
            <AppProvider>
                <Navbar />
            </AppProvider>
        </React.StrictMode>

    )
}
