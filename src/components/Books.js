import React from 'react';

import Book from './Book';
import books from '../content/books';
import '../css/Books.css';

class Books extends React.Component {
    renderGallery() {
        return Object.entries(books).reverse().map((object) => {
            return (
                <Book object={object} key={object[0]} />
            )
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Reading</h1>
                <div className="books gallery">
                    {this.renderGallery()}
                </div>
            </div>
        )
    }
}

export default Books;