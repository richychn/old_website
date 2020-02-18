import React from 'react';

import '../css/Projects.css';
import projects from '../content/projects';

class Projects extends React.Component {
    renderHeader() {
        return (
            <div className="container">
                <div className="content-container">
                    <div className="title">
                        <h1 className="font">Projects</h1>
                        <div className="header line" />
                    </div>
                </div>
            </div>
        )
    }

    renderMarketModeling() {
        return (
            <div className="project">
                <div className="container">
                    <div className="vertical-halves">
                        <div className="left">
                            <div className="title">
                                <h3 className="font">Market Modeling</h3>
                                <div className="header line" />
                            </div>
                            <div dangerouslySetInnerHTML={{__html: projects.market_modeling}} />
                        </div>
                        <div className="right">
                            <a href="http://market-modeling.herokuapp.com">
                                <img style={{width: '20em'}} src="http://market-modeling.herokuapp.com/static/images/square_logo.png" />
                            </a>
                            <img style={{width: '20em'}} src="http://market-modeling.herokuapp.com/static/images/step_2.gif" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderPhotoAlly() {
        return(
            <div className="project">
                <div className="container">
                    <div className="vertical-halves">
                        <div className="left">
                            <a href="https://github.com/richychn/photo-ally">
                                <img style={{width: '10em'}} src="https://raw.githubusercontent.com/richychn/photo-ally/master/good%20photo/Assets.xcassets/AppIcon.appiconset/1024.png" />
                            </a>
                        </div>
                        <div className="right">
                            <div className="title">
                                <h3 className="font">Photo Ally</h3>
                                <div className="header line" />
                            </div>
                            <div dangerouslySetInnerHTML={{__html: projects.photoally}} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderGuitwise() {
        return (
            <div className="project">
                <div className="container">
                    <div className="content-container">
                        <div className="title">
                            <h3 className="font">GuitWise</h3>
                            <div className="header line" />
                        </div>
                        <div dangerouslySetInnerHTML={{__html: projects.guitwise}} />
                        <a href="http://guitwise.herokuapp.com">
                            <img style={{width: '100%', margin: '20px 0'}} src="/guitwise.gif" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                {this.renderHeader()}
                {this.renderMarketModeling()}
                {this.renderPhotoAlly()}
                {this.renderGuitwise()}
            </>
        )
    }
}

export default Projects;