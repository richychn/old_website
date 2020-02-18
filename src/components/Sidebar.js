import React from 'react';

import '../css/Sidebar.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked: "bio"}
    }

    changeDisplay = (id) => {
        this.setState({clicked: id})
    }

    render() {
        return (
            <div className="sidebar">
                <div className="top">
                    <div className="name font">Richy Chen</div>
                    <div className="label" onClick={() => {this.changeDisplay("bio")}}>
                        <a className={`button ${this.state.clicked === "bio" ? "clicked" : ""}`} href="/#bio">
                            <i className="hand peace icon" />
                        </a>
                        <a href="/#bio" className="font">Hello!</a>
                    </div>
                    <div className="label" onClick={() => {this.changeDisplay("resume")}}>
                        <a className={`button ${this.state.clicked === "resume" ? "clicked" : ""}`} href="/#resume">
                            <i className="file alternate icon" />
                        </a>
                        <a href="/#resume" className="font">Resume</a>
                    </div>
                    <div className="label" onClick={() => {this.changeDisplay("projects")}}>
                        <a className={`button ${this.state.clicked === "projects" ? "clicked" : ""}`} href="/#projects">
                            <i className="cogs icon" />
                        </a>
                        <a href="/#projects" className="font">Projects</a>
                    </div>
                    <div className="label" onClick={() => {this.changeDisplay("books")}}>
                        <a className={`button ${this.state.clicked === "books" ? "clicked" : ""}`} href="/#books">
                            <i className="book icon" />
                        </a>
                        <a href="/#books" className="font">Reading</a>
                    </div>
                    <div className="label" onClick={() => {this.changeDisplay("blogs")}}>
                        <a className={`button ${this.state.clicked === "blogs" ? "clicked" : ""}`} href="/#blogs">
                            <i className="pencil alternate icon" />
                        </a>
                        <a href="/#blogs" className="font">Blog</a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="label">
                        <a className="button" href="mailto:richychn@hotmail.com" rel="noopener noreferrer" target="_blank">
                            <i className="envelope icon" />
                        </a>
                        <a className="font" href="mailto:richychn@hotmail.com" rel="noopener noreferrer" target="_blank">
                            Email
                        </a>
                    </div>
                    <div className="label">
                        <a className="button" href="https://github.com/richychn" rel="noopener noreferrer" target="_blank">
                            <i className="github icon" />
                        </a>
                        <a className="font" href="https://github.com/richychn" rel="noopener noreferrer" target="_blank">
                            Github
                        </a>
                    </div>
                    <div className="label">
                        <a className="button" href="http://www.linkedin.com/in/richychen" rel="noopener noreferrer" target="_blank">
                            <i className="linkedin icon" />
                        </a>
                        <a className="font" href="http://www.linkedin.com/in/richychen" rel="noopener noreferrer" target="_blank">
                            LinkedIn
                        </a>
                    </div>
                    <div className="label">
                        <a className="button" href="http://www.twitter.com/richychn" rel="noopener noreferrer" target="_blank">
                            <i className="twitter icon" />
                        </a>
                        <a className="font" href="http://www.twitter.com/richychn" rel="noopener noreferrer" target="_blank">
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;