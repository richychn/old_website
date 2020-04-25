import React from 'react';

import '../css/Sidebar.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className={`sidebar ${this.props.bio}`}>
                <h3>Richy Chen</h3>
                <div className="links">
                    <a className="button" 
                        href="mailto:chenrichy@outlook.com" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <i className="envelope icon" />
                    </a>
                    <a className="button" 
                        href="https://github.com/richychn" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <i className="github icon" />
                    </a>
                    <a className="button" 
                        href="http://www.linkedin.com/in/richychen" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <i className="linkedin icon" />
                    </a>
                    <a className="button" 
                        href="http://www.twitter.com/richychn" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <i className="twitter icon" />
                    </a>
                </div>
                <div className="page-links font">
                    <a href="/#hello">Hello</a>
                    <a href="/resume.pdf" target="_blank">Resume</a>
                    <a href="/#projects">Projects</a>
                    <a href="/#books">Reading</a>
                    <a href="/#blogs">Writing</a>
                </div>
            </div>
        )
    }
}

export default Sidebar;