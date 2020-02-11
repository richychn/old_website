import React from 'react';
import Bio from '../content/Bio';
import Projects from '../content/Projects';
import Resume from '../content/Resume';
import Reading from '../content/Reading';
import Blog from '../content/Blog';

class Content extends React.Component {
    renderComponent() {
        switch (this.props.display) {
            case "bio":
                return <Bio />
            case "projects":
                return <Projects />
            case "resume":
                return <Resume />
            case "reading":
                return <Reading />
            case "blog":
                return <Blog />
            default:
                return <Bio />
        }
    }

    render() {
        return (
            <div className="content-container">
                <div className="content show">
                    {this.renderComponent()}
                </div>
            </div>
        )
    }
}

export default Content;