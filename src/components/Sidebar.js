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
                            <i className="hand peace outline icon" />
                        </a>
                        <div className="font">Hello!</div>
                    </div>
                    <div className="label" onClick={() => {this.changeDisplay("projects")}}>
                        <a className={`button ${this.state.clicked === "projects" ? "clicked" : ""}`} href="/#projects">
                            <i className="laptop icon" />
                        </a>
                        <div className="font">Projects</div>
                    </div>
                    <div className="label" onClick={() => {this.changeDisplay("resume")}}>
                        <a className={`button ${this.state.clicked === "resume" ? "clicked" : ""}`} href="/#resume">
                            <i className="file alternate outline icon" />
                        </a>
                        <div className="font">Resume</div>
                    </div>
                    <div className="label" onClick={() => {this.changeDisplay("books")}}>
                        <a className={`button ${this.state.clicked === "books" ? "clicked" : ""}`} href="/#books">
                            <i className="book icon" />
                        </a>
                        <div className="font">Reading</div>
                    </div>
                    <div className="label" onClick={() => {this.changeDisplay("blogs")}}>
                        <a className={`button ${this.state.clicked === "blogs" ? "clicked" : ""}`} href="/#blogs">
                            <i className="pencil alternate icon" />
                        </a>
                        <div className="font">Blog</div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="label">
                        <a className="button" href="mailto:richychn@hotmail.com" rel="noopener noreferrer" target="_blank">
                            <i className="envelope icon" />
                        </a>
                        <div className="font">Email</div>
                    </div>
                    <div className="label">
                        <a className="button" href="https://github.com/richychn" rel="noopener noreferrer" target="_blank">
                            <i className="github icon" />
                        </a>
                        <div className="font">Github</div>
                    </div>
                    <div className="label">
                        <a className="button" href="http://www.linkedin.com/in/richychen" rel="noopener noreferrer" target="_blank">
                            <i className="linkedin icon" />
                        </a>
                        <div className="font">LinkedIn</div>
                    </div>
                    <div className="label">
                        <a className="button" href="http://www.twitter.com/richychn" rel="noopener noreferrer" target="_blank">
                            <i className="twitter icon" />
                        </a>
                        <div className="font">Twitter</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;