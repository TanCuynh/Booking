import React, { useState } from 'react'
import "./navbar.css"
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

const Menu = () => (
    <>
        <p><a href="#find_property">Find a Property</a></p>
        <p><a href="#rental_guides">Rental Guides</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="navbar">
            <div className="navLinks">
                <span className='logo'>STAYCATION.</span>
                <div className="navLinksContainer">  
                    <Menu />
                </div>
            </div>
            <div className="becomeHostBtn">
                <span>Become A Host</span>
            </div>
            <div className="navItemMenu">
                {toggleMenu
                    ? <RiCloseLine color='#fff' size='27' onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color='#fff' size='27' onClick={() => setToggleMenu(true)} />
                }

                { toggleMenu && (
                <div className="navItemMenuContainer">
                    <div className="navItemMenuContainerLinks">
                        <p><a href="#sign_in">Sign In</a></p>
                        <p><a href="#sign_up">Sign Up</a></p>
                        <p><a href="#help_center">Help Center</a></p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Navbar