import React from 'react';

import './Contact.css'

const Contact = () => {
    return(
        <>
        <div className="contact-container">
            <div className="title-container">
                <h1 className="contact-name">Quinn</h1>
                <h1 className="contact-name">Turner</h1>
                <h3 className="contact-title">SOFTWARE DEVELOPER</h3>
            </div>
            <div className="contact-info-container">
                <div className="contact-type">EMAIL</div>
                <div className="contact-item"><a href="mailto:quinnbturner@gmail.com">QuinnBTurner@gmail.com</a></div>
                <div className="contact-type">PHONE</div>
                <div className="contact-item">(719) 425-6911</div>
            </div>      
        </div>
        </>
    );
};

export default Contact;