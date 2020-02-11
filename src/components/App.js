import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Sidebar from './Sidebar';
import Main from './Main';
import Book from './Book';
import Blog from './Blog';

const App = () => {
    if (window.innerWidth < 800) {
        return (
            <div>Coming soon!</div>
        )
    } else {
        return (
            <BrowserRouter>
                <Sidebar />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/books/:id" exact component={Book} />
                    <Route path="/blogs/:id" exact component={Blog} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;