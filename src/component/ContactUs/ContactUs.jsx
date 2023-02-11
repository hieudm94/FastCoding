import React from 'react'
import '../ContactUs/ContactUs.css'
import dividerOrange from '../../assets/divider_orange_u7.png'

export default function ContactUs() {
    return (
        <div className='contactUs' id='contactUs'>
            {/* contactUs top */}
            <div className="contactUs-t">
                <p>CONTACT US</p>
                <img src={dividerOrange} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, autem.</p>
            </div>
            {/* contactUs center */}
            <div className="contactUs-c row">
                <div className="contactUsC-l col-6">
                    <input type="text" placeholder='Name' name="name" id="" />
                    <span></span>
                    <input type="email" placeholder='Email' name="email" id="" />
                    <span></span>
                    <input type="text" placeholder='Subject' name="subject" id="" />
                    <span></span>
                </div>
                <div className="contactUsC-r col-5">
                    <textarea type="text" placeholder='Message' name="message" id="" />
                </div>
            </div>
            {/* contactUs bottom */}
            <div className='contactUs-b'>
                <button className='contactUs-btn'>Send Messsage</button>
            </div>
        </div>
    )
}
