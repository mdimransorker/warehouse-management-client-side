import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='contacts-container'>
                <div className='call-section'>
                    <h3>TALK TO US</h3>
                    <h6>Toll Free: 78 4365 948</h6>
                    <h6>Fax: 888 6429 542</h6>
                </div>
                <div className='mail-section'>
                    <h3>MAIL US</h3>
                    <h6>support@goromosala.com</h6>
                    <h6>info@goromosala.com</h6>
                </div>
                <div className='address-section'>
                    <h3>OUR LOCATION</h3>
                    <h6 className=''>
                        #44,Block-5A, Mohammapur,<br />
                        Dhaka-1207.
                    </h6>
                </div>
            </div>
            <div className='text-white pb-2 text-center'>
                &copy;
                {(new Date().getFullYear())}
                <span className='ms-1'>gorommosala. All rights reserved. Design by Imran Sorker</span>
            </div>
        </div>
    );
};

export default Footer;