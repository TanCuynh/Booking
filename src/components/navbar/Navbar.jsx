import React, { useContext, useEffect, useState } from 'react'
import "./navbar.css"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from "react-router-dom";
import Login from '../../pages/login/Login';
import { Avatar } from '@mui/material';
import { APP_CONTEXT } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ type }) => {
    const context = useContext(APP_CONTEXT);

    const [openLogin, setOpenLogin] = useState(false);

    const [toggleMenu, setToggleMenu] = useState(false);

    const [scrollToTopBtn, setScrollToTopBtn] = useState(false);

    const openPopup = () => {
        setOpenLogin(true);
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setOpenLogin(false);
        document.body.style.overflow = 'auto';
    };

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setScrollToTopBtn(scrollTop > 0);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={type === "home" ? "navbar homeMode" : "navbar"}>
            <div className="navLinks">
                <span className='logo'> <Link to="/">STAYCATION.</Link></span>
            </div>
            {
                context?.user ? (
                    <div className="loginBtn">
                        <Avatar alt="Avatar" src={context.user.avatar} />
                        <span>{context.user.email}</span>
                    </div>
                ) : (
                    <div className="loginBtn">
                        <span>Login / Signup</span>
                    </div>
                )
            }

            <div className="navItemMenu">
                {toggleMenu
                    ? <RiCloseLine color='#fff' size='27' onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size='27' onClick={() => setToggleMenu(true)} />
                }

                {toggleMenu && (
                    <div className="navItemMenuContainer">
                        <div className="navItemMenuContainerLinks">
                            <p onClick={openPopup}><span>Log In - Sign Up</span></p>
                        </div>
                    </div>
                )}
            </div>
            {scrollToTopBtn && (
                <div className="scrollToTopBtn" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faAnglesUp} />
                </div>
            )}
            {openLogin &&
                <div className="loginModalContainer" onClick={closePopup}>
                    <div className="loginModal" onClick={(e) => e.stopPropagation()}>
                        <Login onClose={closePopup} />
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar