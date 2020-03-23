import React from 'react';

import blogs from '../content/blogs';

import '../css/Blogs.css';

class Blogs extends React.Component {
    renderCard(blog) {
        return (
            <div className="blog-card">
                <div className="blog-divider" />
                <h3 className="font">{blog.title}</h3>
                <p>{blog.description}</p>
                <p>{blog.date}</p>
            </div>
        )
    }

    renderGallery() {
        return Object.entries(blogs).reverse().map((object) => {
            return (
                <a href={`/#blogs/${object[0]}`} key={object[0]}>
                    {this.renderCard(object[1])}
                </a>
            )
        })
    }
    
    render() {
        return (
            <div className="container">
                <h1>Blog</h1>
                <div className="description">
                    Although I love to think and discuss philosophy, a product idea, or what the future might look like, I rarely have the patience to write it all down. This is something I want to work on, so I built a simple, minimalist blog site where I will hopefully write more.
                </div>
                <div className="blogs gallery">
                    {this.renderGallery()}
                </div>
            </div>
        )
    }
}

export default Blogs;