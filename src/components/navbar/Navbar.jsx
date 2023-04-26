import React from 'react'
import "./navbar.css"

const Menu = () => (
    <>
        <p><a href="#find_property">Find a Property</a></p>
        <p><a href="#rental_guides">Rental Guides</a></p>
    </>
)

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className='logo'>STAYCATION.</span>
                <div className="navItemLinks">  
                    <Menu />
                </div>
            </div>
            <div className="navItemActions">
                <button type='button' className="becomeHostBtn">Become A Host</button>
            </div>
            <div className="navItemMenu">
                <p>Lmao</p>
            </div>
        </div>
    )
}

export default Navbar