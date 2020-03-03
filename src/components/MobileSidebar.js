import React from 'react';

import '../css/MobileSidebar.css';

class MobileSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
    }

    handleClick = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    profile() {
        return (
            <div className="mobile profile">
                <i onClick={this.handleClick} className="bars icon" />
                <h3>Richy Chen</h3>
                <div className="links">
                    <a className="button" 
                        href="mailto:richychn@hotmail.com" 
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
            </div>
        )
    }

    menu = () => {
        return (
            <div className="menu">
                {this.profile()}
                <div className="page-links font">
                    <a onClick={this.handleClick} href="/#hello">Hello</a>
                    <a onClick={this.handleClick} href="/resume.pdf" target="_blank">Resume</a>
                    <a onClick={this.handleClick} href="/#projects">Projects</a>
                    <a onClick={this.handleClick} href="/#books">Reading</a>
                    <a onClick={this.handleClick} href="/#blogs">Writing</a>
                </div>
            </div>
        )
    }

    render() {
        if (this.state.showMenu) {
            return this.menu()
        } else {
            return (
                <div className={`mobile sidebar ${this.props.hidden ? "hidden" : ""}`}>
                    <h3>Richy Chen</h3>
                    <i onClick={this.handleClick} className="bars icon" />
                </div>
            )
        }
    }
}

export default MobileSidebar;