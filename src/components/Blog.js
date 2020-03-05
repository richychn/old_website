import React from 'react';
import blogs from '../content/blogs';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: blogs[this.props.match.params.id].title,
            date: blogs[this.props.match.params.id].date,
            image_url: blogs[this.props.match.params.id].image_url,
            credit: blogs[this.props.match.params.id].credit,
            image_alt: blogs[this.props.match.params.id].image_alt,
            text: blogs[this.props.match.params.id].text
        }
    }

    renderImage() {
        if (this.state.image_url === "") {
            return null
        } else {
            return (
                <div className="blog img">
                    <img src={this.state.image_url} alt={this.state.image_alt} />
                    <div className="credits">Image Credit: {this.state.credit}</div>
                </div>
            )
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>{this.state.title}</h1>
                    {this.renderImage()}
                    <p className="blog date">{this.state.date}</p>
                    <div dangerouslySetInnerHTML={{__html: this.state.text}} />
                </div>
            </>
        )
    }
}

export default Blog;