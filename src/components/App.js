import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Sidebar from './Sidebar';
import Bio from './Bio';
import Projects from './Projects';
import Resume from './Resume';
import Books from './Books';
import Blogs from './Blogs';
import Book from './Book';
import Blog from './Blog';

const App = () => {
    if (window.innerWidth < 800) {
        return (
            <div>Coming soon!</div>
        )
    } else {
        return (
            <HashRouter>
                <Sidebar />
                <Switch>
                    <Route path="/" exact component={Bio} />
                    <Route path="/bio" exact component={Bio} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/resume" exact component={Resume} />
                    <Route path="/books" exact component={Books} />
                    <Route path="/blogs" exact component={Blogs} />
                    <Route path="/books/:id" exact component={Book} />
                    <Route path="/blogs/:id" exact component={Blog} />
                </Switch>
            </HashRouter>
        )
    }
}

export default App;