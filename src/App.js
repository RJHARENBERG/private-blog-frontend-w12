import React, {useState} from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <Router>
            <Switch>
                <Route path="/">
                    <HomePagina/>
                </Route>
                <Route path="/login">
                    <LoginPagina/>
                </Route>
                <Route path="/blogposts">
                    <BlogOverzicht/>
                </Route>
                <Route path="/blogposts/:blogId">
                    <BlogpostPagina/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
