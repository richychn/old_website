import React from 'react';

import books from '../content/books';

class Books extends React.Component {
    renderGallery() {
        return Object.entries(books).reverse().map((object) => {
            return (
                <a key={`${object[0]}`} href={`/#books/${object[0]}`}>
                    <img alt={`Cover of ${object[1].title}`} src={object[1].image_url} />
                </a>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div className="content-container">
                    <div className="title">
                        <h1 className="font">Reading</h1>
                        <div className="header line" />
                    </div>
                    <div className="description">
                        I love to read. Since primary school, I sped through fantasies and young adult fiction. Nowadays, I look for interesting stories that get me thinking or teach me something I feel I am lacking. I post my favorites here, some with my thoughts attached.
                    </div>
                    <div className="books gallery">
                        {this.renderGallery()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Books;