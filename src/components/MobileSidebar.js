import React from 'react';
import {Link} from 'react-router-dom';
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
                <i onClick={this.handleClick} className="close icon" />
                <Link to="/" className="font no-underline">Richy Chen</Link>
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
            <div onClick={this.handleClick} className="menu">
                {this.profile()}
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

    render() {
        if (this.state.showMenu) {
            return this.menu()
        } else {
            return (
                <div className={`mobile sidebar ${this.props.hidden ? "hidden" : ""}`}>
                    <Link to="/" className="font no-underline">Richy Chen</Link>
                    <i onClick={this.handleClick} className="bars icon" />
                </div>
            )
        }
    }
}

export default MobileSidebar;