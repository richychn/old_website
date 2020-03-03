import React from 'react';
import books from '../content/books';

import '../css/Books.css';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: books[this.props.match.params.id].title,
            image_url: books[this.props.match.params.id].image_url,
            text: books[this.props.match.params.id].text
        }
    }

    renderImage() {
        const style = {backgroundImage: `url(${this.state.image_url})`}
        if (this.state.image_url === "") {
            return null
        } else {
            return (
                <div style={style} className="gradient img">
                    <div className="gradient overlay" />
                </div>
            )
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>{this.state.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: this.state.text}}></div>
                </div>
                {this.renderImage()}
            </>
        )
    }
}

export default Book;