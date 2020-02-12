import React from 'react';

import Bio from './Bio';
import Projects from './Projects';
import Resume from './Resume';
import Books from './Books';
import Blogs from './Blogs';

class Main extends React.Component {
    componentDidMount() {
        console.log(document.location.hash)
        if (document.location.hash === "" || document.location.hash === "#") {
            document.location.hash = "#bio"
        }
    }

    render() {
        return (
            <div className="container">
                <div className="content-container">
                    <div id="bio" className="content">
                        <Bio />
                    </div>
                    <div id="projects" className="content">
                        <Projects />
                    </div>
                    <div id="resume" className="content">
                        <Resume />
                    </div>
                    <div id="books" className="content">
                        <Books />
                    </div>
                    <div id="blogs" className="content">
                        <Blogs />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;