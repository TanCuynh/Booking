import React, { useContext, useEffect, useState } from 'react'
import "./navbar.css"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link, useNavigate } from "react-router-dom";
import Login from '../../pages/login/Login';
import { Avatar } from '@mui/material';
import { APP_CONTEXT } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import Line from '../Line/Line';
import { toast } from 'react-hot-toast';
import Signup from '../../pages/signup/Signup';


const Navbar = ({ type }) => {
    const navigate = useNavigate();
    const context = useContext(APP_CONTEXT);

    const [openLogin, setOpenLogin] = useState(false);

    const [openSignup, setOpenSignup] = useState(false);

    const [toggleMenu, setToggleMenu] = useState(false);

    const [scrollToTopBtn, setScrollToTopBtn] = useState(false);

    const openPopupLogin = () => {
        setOpenLogin(true);
        setOpenSignup(false);
        document.body.style.overflow = 'hidden';
    };

    const openPopupSignup = () => {
        setOpenSignup(true);
        setOpenLogin(false);
        document.body.style.overflow = 'hidden';
    }


    const closePopup = () => {
        setOpenLogin(false);
        setOpenSignup(false);
        document.body.style.overflow = 'auto';
    };

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setScrollToTopBtn(scrollTop > 0);
    };

    const handleLogout = () => {
        context.setUser({});
        toast.success('Logged out');
    };
    const handleClickAdmin = () => {
        navigate('/admin');
    }

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
                context?.user?.id && (
                    <>
                        <div className="loginBtn">
                            <Avatar className='userAvatar' alt="Avatar" src={context.user.avatar} />
                            <span>{context.user.email}</span>
                        </div>
                    </>
                )
            }

            <div className="navItemMenu">
                {toggleMenu
                    ? <RiCloseLine color='#fff' size='27' onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size='27' onClick={() => setToggleMenu(true)} />
                }

                {toggleMenu && (
                    <div className="navItemMenuContainer">
                        {
                            context?.user?.role === 'admin' ?
                                <>
                                    <div className="navItemMenuContainerLinks" onClick={handleClickAdmin}>
                                        <p><span>Admin Page</span></p>
                                    </div>
                                    <Line />
                                    <div className="navItemMenuContainerLinks" onClick={handleLogout}>
                                        <p><span>Log Out</span></p>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="navItemMenuContainerLinks">
                                        <p onClick={openPopupLogin}><span>Log In</span></p>
                                    </div>
                                    <Line />
                                    <div className="navItemMenuContainerLinks">
                                        <p onClick={openPopupSignup}><span>Sign Up</span></p>
                                    </div>
                                </>
                        }
                    </div>
                )}
            </div>
            {scrollToTopBtn && (
                <div className="scrollToTopBtn" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faAnglesUp} />
                </div>
            )}
            {openLogin &&
                <div className="modalContainer" onClick={closePopup}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <Login onClose={closePopup} />
                    </div>
                </div>
            }

            {openSignup &&
                <div className="modalContainer" onClick={closePopup}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <Signup onClose={closePopup} />
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar