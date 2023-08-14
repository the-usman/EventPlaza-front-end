import React, {useContext, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import authContext from '../context/authContext/authContext';

function Profile() {
    const {user, getUser} = useContext(authContext)
    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem('token')) {
                await getUser();
            }
        };
        fetchData();
        

    }, []);
    return (
        <div className='container'>
            <div className="subContainer">
                <div className="profileNavbar">
                    <ul>
                        <li>
                            <NavLink to = "/profileinfo">Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/favouritepost">Favourites</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/reminder">Reminders</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/book">Booked</NavLink>
                        </li>
                        {user && (user.type === "admin" || user.type === "BossAdim") && 
                            <>
                        <li>
                            <NavLink to = "/addpost">Add&nbsp;Post</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/editpost">Edit&nbsp;Posts</NavLink>
                        </li> </>}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile
