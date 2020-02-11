import React from 'react';

export default () => {
    return (
        <>
            <div className="title">
                <h1 className="font">Hello!</h1>
                <div className="header line" />
            </div>
            <div dangerouslySetInnerHTML={{__html: content.text}}></div>
        </>
    )
}

const content = {
    text: '<p>My name is Richy. I am a senior at Claremont McKenna College studying Computer Science and Economics. I think it would be incredibly cool to design something that affects a lot of people\'s lives. I jot down a lot of these ideas and will happily dream out an idea with anyone.</p>\
    <p>Currently, I am hooked by the idea of designing systems that crosses digital and physical environments and use software to empower regular, physical activities, such as shopping, eating at restaurants, or going to work. To that end, I am working with my friends to develop an app for restaurant customers. More on that soon.</p>\
    <p>After graduation, I look forward to helping clients use machine learning at <a href="https://www.thehive.ai" target="_blank">Hive</a> in San Francisco. I am excited to see first hand how corporates are using machine learning to enhance or replace various business tasks.</p>'
}