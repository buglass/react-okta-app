import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Security } from '@okta/okta-react';
import './index.css';
import App from './App';

const oktaConfig = {
    issuer: 'https://emishealthadambuglass.okta.com/',
    redirect_uri: `${window.location.origin}/implicit/callback`,
    client_id: '0oa1a6yp6xQn5kGkb357', // On the Okta application page
};

ReactDOM.render(
    <BrowserRouter>
        <Security {...oktaConfig}>
            <App />
        </Security>
    </BrowserRouter>,
    document.getElementById('root'),
);

if (module.hot) module.hot.accept();