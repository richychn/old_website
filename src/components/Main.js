import React from 'react';

import Bio from './Bio';
import Projects from './Projects';
import Resume from './Resume';
import Reading from './Reading';
import Blog from './Blog';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {display: "bio"}
    }

    changeDisplay = (id) => {
        this.setState({display: id})
    }

    renderSideBar() {
        return (
            <div className="sidebar">
                <div className="top">
                    <div className="name title-font">
                        Richy Chen
                    </div>
                    <div onClick={() => this.changeDisplay("bio")} 
                        className={`bio button ${this.state.display === "bio" ? "clicked" : ""}`}
                    >
                        <i className="hand peace outline icon" />
                    </div>
                    <div onClick={() => this.changeDisplay("projects")} 
                        className={`projects button ${this.state.display === "projects" ? "clicked" : ""}`}
                    >
                        <i className="laptop icon" />
                    </div>
                    <div onClick={() => this.changeDisplay("resume")} 
                        className={`resume button ${this.state.display === "resume" ? "clicked" : ""}`}
                    >
                        <i className="file alternate outline icon" />
                    </div>
                    <div onClick={() => this.changeDisplay("reading")} 
                        className={`reading button ${this.state.display === "reading" ? "clicked" : ""}`}
                    >
                        <i className="book icon" />
                    </div>
                    <div onClick={() => this.changeDisplay("blog")}
                        className={`blog button ${this.state.display === "blog" ? "clicked" : ""}`}
                    >
                        <i className="pencil alternate icon" />
                    </div>
                </div>
                <div className="bottom">
                    <a className="button" href="mailto:richychn@hotmail.com" target="_blank"><i class="envelope icon" /></a>
                    <a className="button" href="https://github.com/richychn" target="_blank"><i class="github icon" /></a>
                    <a className="button" href="http://www.linkedin.com/in/richychen" target="_blank"><i class="linkedin icon" /></a>
                    <a className="button" href="http://www.twitter.com/richychn" target="_blank"><i class="twitter icon" /></a>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                {this.renderSideBar()}
                <div className="content-container">
                    <div className={`content ${this.state.display === "bio" ? "show" : ""}`}>
                        <Bio />
                    </div>
                    <div className={`content ${this.state.display === "projects" ? "show" : ""}`}>
                        <Projects />
                    </div>
                    <div className={`content ${this.state.display === "resume" ? "show" : ""}`}>
                        <Resume />
                    </div>
                    <div className={`content ${this.state.display === "reading" ? "show" : ""}`}>
                        <Reading />
                    </div>
                    <div className={`content ${this.state.display === "blog" ? "show" : ""}`}>
                        <Blog />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;