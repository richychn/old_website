import React from 'react';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spans: 0}
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);
        this.setState({spans});
    }
    
    render() {
        const {object} = this.props

        return (
            <a style={{gridRowEnd: `span ${this.state.spans}`}} href={`/#books/${object[0]}`}>
                <img ref={this.imageRef} 
                    alt={`Cover of ${object[1].title}`} 
                    src={object[1].image_url} />
            </a>
        );
    }
}

export default Book;