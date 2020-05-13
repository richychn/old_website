import React from 'react';

import '../css/Projects.css';
import projects from '../content/projects';

class Projects extends React.Component {
    renderLaunchWorkstation() {
        return (
            <div className="project">
                <h3>Launch Workstation</h3>
                <div className="center-contents">
                    <a href="https://www.richychen.com/launch-workstation">
                        <img style={{width: '10em', backgroundColor: 'white'}} src="https://raw.githubusercontent.com/richychn/launch-workstation/master/public/icon128.png" />
                    </a>
                </div>
                <div dangerouslySetInnerHTML={{__html: projects.launch_workstation}} />
            </div>
        )
    }

    renderMarketModeling() {
        return (
            <div className="project">
                <h3>Market Modeling</h3>
                <div className="center-contents">
                    <a href="http://market-modeling.herokuapp.com">
                        <img style={{width: '20em'}} src="https://raw.githubusercontent.com/richychn/market-modeling/master/static/images/square_logo.png" />
                    </a>
                </div>
                <div dangerouslySetInnerHTML={{__html: projects.market_modeling}} />
                <div className="center-contents">
                    <img style={{width: '20em'}} src="https://raw.githubusercontent.com/richychn/market-modeling/master/static/images/step_2.gif" />
                </div>
            </div>
        )
    }

    renderPhotoAlly() {
        return(
            <div className="project">
                <h3>Photo Ally</h3>
                <div className="center-contents">
                    <a style={{marginRight: '1em'}} href="https://github.com/richychn/photo-ally">
                        <img style={{width: '10em'}} src="https://raw.githubusercontent.com/richychn/photo-ally/master/good%20photo/Assets.xcassets/AppIcon.appiconset/1024.png" />
                    </a>
                </div>
                <div dangerouslySetInnerHTML={{__html: projects.photoally}} />
            </div>
        )
    }

    renderGuitwise() {
        const imgStyle = {width: '100%', margin: '20px 0', display: 'block'}
        return (
            <div className="project">
                <h3>GuitWise</h3>
                <a href="http://guitwise.herokuapp.com">
                    <img style={imgStyle} src="/guitwise.gif" />
                </a>
                <div dangerouslySetInnerHTML={{__html: projects.guitwise}} />
            </div>
        )
    }

    render() {
        return (
            <div className="projects">
                <div className="container">
                    <h1>Projects</h1>
                    {this.renderLaunchWorkstation()}
                    {this.renderMarketModeling()}
                    {this.renderPhotoAlly()}
                    {this.renderGuitwise()}
                </div>
            </div>
        )
    }
}

export default Projects;