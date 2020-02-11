import React from 'react';
import blogs from '../content/blogs';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: blogs[this.props.match.params.id].title,
            date: blogs[this.props.match.params.id].date,
            image_url: blogs[this.props.match.params.id].image_url,
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
                </div>
            )
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="content-container">
                        <div className="title">
                        <h1 className="font">{this.state.title}</h1>
                            <div className="header line" />
                        </div>
                    </div>
                </div>  
                {this.renderImage()}
                <div className="container">
                    <div className="content-container">
                        <p className="blog date">Richy Chen {this.state.date}</p>
                        <div dangerouslySetInnerHTML={{__html: this.state.text}} />
                    </div>
                </div>
            </>
        )
    }
}

export default Blog;