import React, { useEffect, useContext } from 'react';
import logo from '../image/EventFlow-logo/cover.png';
import authContext from '../context/authContext/authContext';
import { NavLink, Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const { getUser, user, setUser } = useContext(authContext);
    const navigate = useNavigate();

    const toggleBar = () => {
        const toggle = document.getElementsByClassName('toggle')[0];
        toggle.classList.toggle('display');
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUser();
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        window.location.reload()
    };

    const toProfile = () => {
        navigate('/profileinfo');
    };

    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/help">Help</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
                {localStorage.getItem('token') ? (
                    <>
                        <div className="profile" onClick={toggleBar}>
                            {user && user.image && (
                                <img src={`http://localhost:5000/uploads/profile/${user.image}`} alt="" width="70px" />
                            )}
                            <div className={`toggle ${user ? 'display' : ''}`}>
                                <li onClick={toProfile}><Link>Profile</Link></li>
                                <li onClick={logout}><Link>Logout</Link></li>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>
                        <NavLink to="/loginuser"><button className='navBtn'>Login</button></NavLink>
                        <NavLink to="/createuser"><button className='navBtn'>Create Account</button></NavLink>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
