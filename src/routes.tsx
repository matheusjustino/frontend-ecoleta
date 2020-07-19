import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact></Route>
            <Route component={CreatePoint} path="/create-point"></Route>
        </BrowserRouter>
    );
}

export default Routes;