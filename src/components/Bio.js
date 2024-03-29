import React from 'react';

import '../css/Bio.css'

class Bio extends React.Component {
    componentDidMount() {
        document.getElementsByClassName('sidebar')[0].classList.add("bio");
    }

    componentWillUnmount() {
        document.getElementsByClassName('sidebar')[0].classList.remove("bio")
    }

    render() {
        const style = {backgroundImage: `url("profile.jpg")`};
        return (
            <div className="bio">
                <div style={style} className="gradient img">
                    <div className="gradient overlay" />
                </div>
                <div className="container">
                    <h1 className="font">Hello!</h1>
                    <div className="text" dangerouslySetInnerHTML={{__html: content.text}}></div>
                </div>
            </div>
        )
    }
}

const content = {
    text: '<p>I\'m Richy. I\'m a senior at Claremont McKenna College studying Computer Science and Economics. I think it would be incredibly cool to design something that affects a lot of people\'s lives. I jot down a lot of these ideas and will happily dream out an idea with anyone.</p>\
    <p>Currently, I am hooked by the idea of designing systems that cross digital and physical environments and use software to empower regular, physical activities, such as shopping, eating at restaurants, or going to work. To that end, I am working with my friends to develop an app for restaurant customers. More on that <a href="/#/blogs/0">here</a>.</p>\
    <p>After having my job offer rescinded due to COVID-19, I am currently looking for roles in fintech.</p>'
}

export default Bio;