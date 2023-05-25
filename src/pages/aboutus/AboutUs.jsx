import React, { useEffect } from 'react'
import './aboutus.css'

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="aboutUsContainer">
            <div className="aboutusHeader">
                <div className="aboutusTitle">
                    <h1>ABOUT US</h1>
                </div>
            </div>
            <div className="aboutus">
                <div className="aboutusParagraph">
                    <h1>We are here for you</h1>
                    <p>We're always here to help you with any questions or concerns you may have. Whether you need help with a booking or have feedback for us, we want to hear from you.</p>
                </div>
                <div className="aboutusContactParagraph">
                    <p>You can reach us by phone, email, or through our online contact form. Our customer support team is available 24/7 to assist you.</p>
                    <div className="phoneAndEmail">
                        <h2>Phone: (+84) 989 112 223</h2>
                        <h2>Email: staycation.support@gmail.com</h2>
                    </div>
                </div>
                <div className="aboutusParagraph">
                    <p>If you prefer to reach out to us through our contact form, please fill out the required fields and we'll get back to you as soon as possible.</p>
                </div>
            </div>
            <div className="aboutus">
                <div className="aboutusParagraph">
                    <p>We value your feedback and use it to improve our services. Please don't hesitate to let us know how we're doing or how we can make your experience with us even better.</p>
                    <p><u>Thank you for choosing our website for your travel needs.
                        <br /><b>We look forward to hearing from you!</b></u></p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs