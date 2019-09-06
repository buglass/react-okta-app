import React from 'react';
import { Route, Link } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';

const App = () => {
    return (
        <>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/admin">Dashboard</Link>
            <Route exact path="/" component={LoginPage} />
            <SecureRoute exact path="/admin" component={AdminDashboard} />
            <Route path="/implicit/callback" component={ImplicitCallback} />
        </>
    )
}

export default App;