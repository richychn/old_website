import React from 'react';
import { PDFReader } from 'react-read-pdf';

export default () => {
    return (
        <div className="container">
            <div className="content-container">
                <div className="title">
                    <h1 className="font">Resume</h1>
                    <div className="header line" />
                </div>
                <div className="center-content">
                    <a target="_blank" href="/RichyChen_Resume.pdf"><i className="paperclip icon" />Download Here</a>
                </div>
                <div className="pdf">
                    <PDFReader scale="1" url="RichyChen_Resume.pdf"/>
                </div>
            </div>
        </div>
    )
}