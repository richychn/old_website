import React from 'react';

import Profile from './Profile';
import Content from './Content';

const App = () => {
    if (window.innerWidth < 800) {
        return (
            <div>Coming soon!</div>
        )
    } else {
        return (
            <div className="container">
                <Profile />
                <Content />
            </div>
        )
    }
}

export default App;