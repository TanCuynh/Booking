import React from 'react'
import './aboutus.css'
import { Footer, Navbar } from '../../components'

const AboutUs = () => {
    return (
        <div className="aboutUsContainer">
            <div className="aboutusHeader">
                <Navbar type="home" />
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
                        <h2>Email: mario&luigi@gmail.com</h2>
                    </div>
                </div>
            </div>
            <div className="aboutusContentContainer">
                <div className="aboutusContent">
                    <h2>About Us</h2>
                    <p>We are a leading online platform dedicated to helping you find the perfect accommodations for your travel needs. With a wide selection of hotels and properties worldwide, we strive to make the process of booking a hotel seamless and enjoyable.</p>
                    <p>Whether you're planning a business trip, a family vacation, or a romantic getaway, let <b>Staycation.</b> be your trusted companion in finding the perfect accommodations for your next adventure.</p>
                    <p>Start your journey with us today and discover the world of endless possibilities!</p>
                    <div className="exploreBtn">
                        Explore
                    </div>
                </div>
                <div className="aboutusBigImg">
                    <img src="https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80" alt="aboutus" />
                </div>
            </div>
            <div className="aboutus">
                <div className="aboutusParagraph">
                    <p>We value your feedback and use it to improve our services. Please don't hesitate to let us know how we're doing or how we can make your experience with us even better.</p>
                    <p><u>Thank you for choosing our website for your travel needs.
                        <br/><b>We look forward to hearing from you!</b></u></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs