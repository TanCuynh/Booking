import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerLinks">
                <div className="footerLogo">
                    <h1>STAYCATION.</h1>
                    <p>Danang University of Technology and Information, All Rights Reserved</p>
                </div>
                <div className="footerLinksDiv">
                    <h4>COMPANY</h4>
                    <p> <Link to="/about">About Us</Link></p>
                    <p>Legal Information</p>
                    <p>Contact Us</p>
                    <p>Blogs</p>
                </div>
                <div className="footerLinksDiv">
                    <h4>HELP CENTER</h4>
                    <p>Find A Property</p>
                    <p>How To Host?</p>
                    <p>Why Us?</p>
                    <p>FAQs</p>
                    <p>Rental Guides</p>
                </div>
                <div className="footerLinksDiv">
                    <h4>CONTACT INFO</h4>
                    <p>Phone: 929-556-2746</p>
                    <p>Email: marioNluigi@gpeach.com</p>
                    <p>Location: Danang TechUni</p>
                </div>
            </div>
            <div className="footerCopyright">
                <p>© 2023 MordanCroc | All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer