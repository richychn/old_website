import React from 'react';

import Main from './Main';

const App = () => {
    if (window.innerWidth < 800) {
        return (
            <div>Coming soon!</div>
        )
    } else {
        return (
            <Main />
        )
    }
}

export default App;