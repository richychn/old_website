import React from 'react';

import '../css/Bio.css'

export default () => {
    const style = {backgroundImage: `url("profile.jpg")`};
    return (
        <div className="bio">
            <div className="container">
                <div className="content-container">
                    <div className="title">
                        <h1 className="font">Hello!</h1>
                        <div className="header line" />
                    </div>
                    <div dangerouslySetInnerHTML={{__html: content.text}}></div>
                </div>
            </div>
            <div style={style} className="bio img">
                <div className="bio overlay" />
            </div>
        </div>
    )
}

const content = {
    text: '<p>I\'m Richy. I\'m a senior at Claremont McKenna College studying Computer Science and Economics.</p><p> I think it would be incredibly cool to design something that affects a lot of people\'s lives. </p><p> I jot down a lot of these ideas and will happily dream out an idea with anyone.</p><br>\
    <p>Currently, I am hooked by the idea of designing systems that crosses digital and physical environments and use software to empower regular, physical activities, such as shopping, eating at restaurants, or going to work. </p><p> To that end, I am working with my friends to develop an app for restaurant customers. </p><p> More on that soon.</p><br>\
    <p>After graduation, I look forward to helping clients use machine learning at <a href="https://www.thehive.ai" target="_blank">Hive</a> in San Francisco. </p><p> I am excited to see first hand how corporates are using machine learning to enhance or replace various business tasks.</p>'
}