import React from 'react';
import books from '../content/books';

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
        if (this.state.image_url === "") {
            return null
        } else {
            return (
                <div className="book img">
                    <img src={this.state.image_url} alt="Cover of this book" />
                </div>
            )
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="book content-container">
                        <div className="title">
                        <h1 className="font">{this.state.title}</h1>
                            <div className="header line" />
                        </div>
                        <div dangerouslySetInnerHTML={{__html: this.state.text}}></div>
                    </div>
                </div>
                {this.renderImage()}
            </>
        )
    }
}

export default Book;