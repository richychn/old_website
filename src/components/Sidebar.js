import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <div className="name font">
                    Richy Chen
                </div>
                <a className="button" href="/#bio"><i className="hand peace outline icon" /></a>
                <a className="button" href="/#projects"><i className="laptop icon" /></a>
                <a className="button" href="/#resume"><i className="file alternate outline icon" /></a>
                <a className="button" href="/#books"><i className="book icon" /></a>
                <a className="button" href="/#blogs"><i className="pencil alternate icon" /></a>
            </div>
            <div className="bottom">
                <a className="button" href="mailto:richychn@hotmail.com" rel="noopener noreferrer" target="_blank">
                    <i className="envelope icon" />
                </a>
                <a className="button" href="https://github.com/richychn" rel="noopener noreferrer" target="_blank">
                    <i className="github icon" />
                </a>
                <a className="button" href="http://www.linkedin.com/in/richychen" rel="noopener noreferrer" target="_blank">
                    <i className="linkedin icon" />
                </a>
                <a className="button" href="http://www.twitter.com/richychn" rel="noopener noreferrer" target="_blank">
                    <i className="twitter icon" />
                </a>
            </div>
        </div>
    )
}

export default Sidebar;