import React, { useState } from 'react'
import "./navbar.css"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from "react-router-dom";
import Login from "../login/Login";
import LoginStep2 from "../loginStep2/LoginStep2";
import SignupStep2 from "../signupStep2/SignupStep2";


const Menu = () => (
    <>
        <p><Link to="/find_property">Find a Property</Link></p>
        <p><Link to="/rental_guides">Rental Guides</Link></p>
    </>
)



const Navbar = ({ type }) => {

    const [openLogin, setOpenLogin] = useState(false);

    const [toggleMenu, setToggleMenu] = useState(false);

    const openPopup = () => {
        setOpenLogin(true);
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setOpenLogin(false);
        document.body.style.overflow = 'auto';
    };


    return (
        <div className={type === "home" ? "navbar homeMode" : "navbar"}>
            <div className="navLinks">
                <span className='logo'> <Link to="/">STAYCATION.</Link></span>
                <div className="navLinksContainer">
                    <Menu />
                </div>
            </div>
            <div className="becomeHostBtn">
                <span>Become A Host</span>
            </div>
            <div className="navItemMenu">
                {toggleMenu
                    ? <RiCloseLine color='#fff' size='27' onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size='27' onClick={() => setToggleMenu(true)} />
                }

                {toggleMenu && (
                    <div className="navItemMenuContainer">
                        <div className="navItemMenuContainerLinks">
                            <p onClick={openPopup}><span>Log In</span></p>
                            <p onClick={openPopup}><span>Sign Up</span></p>
                            <p><Link to="/help_center">Help Center</Link></p>
                        </div>
                    </div>
                )}
            </div>
            {openLogin &&
                <div className="loginModalContainer" onClick={closePopup}>
                    <div className="loginModal" onClick={(e) => e.stopPropagation()}>
                        <Login />
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar