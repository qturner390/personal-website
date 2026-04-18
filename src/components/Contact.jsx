import React from 'react';

import './Contact.css'

const Contact = () => {
    return(
        <>
        <h1>Quinn Turner</h1>
        <div className='contact-information'>
            <ul className='contact-list'>
                <li className='contact-item'><a href="mailto:quinnbturner@gmail.com">quinnbturner@gmail.com</a></li>
                <li className='contact-item'>(719)425-6911</li>
            </ul>
        </div>
        </>
    );
};

export default Contact;