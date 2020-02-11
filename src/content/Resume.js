import React from 'react';
import { PDFReader } from 'react-read-pdf';

export default () => {
    return (
        <div className="resume">
            <PDFReader scale="1" url="RichyChen_Resume.pdf"/>
        </div>
    )
}