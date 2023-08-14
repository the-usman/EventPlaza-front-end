import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/authContext/authContext';

function ProfileInfo() {
    const { getUser, user, updateUser } = useContext(AuthContext);
    const [data, setData] = useState({
        email: '',
        name: '',
        password: '',
        image: null
    });

    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem('token')) {
                await getUser();
            }
        };

        fetchData();
    }, []); // Only getUser as dependency

    useEffect(() => {
        if (user) {
            setData({
                email: user.email,
                name: user.name,
                password: '',
                image: null
            });
        }
    }, [user]); // Update data when user changes

    const updateName = () => {
        if (data.name !== '' && user && data.name !== user.name) {
            updateUser(user._id, null, data.name, null, null);
            setTimeout(()=>{
                window.location.reload()
            },2000)
        }
    };

    const updateEmail = () => {
        if (data.email !== '' && user && data.email !== user.email) {
            updateUser(user._id, data.email, null, null, null);
            setTimeout(()=>{
                window.location.reload()
            },2000)
        }
    };
    const updateImage = async () => {
        await updateUser(user._id, null, null, null, data.image);
        setTimeout(()=>{
            window.location.reload()
        },2000)
    };
    const updatePass = async () => {
        await updateUser(user._id, null, null, data.password, null);
        setTimeout(()=>{
            window.location.reload()
        },2000)
    };

    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleChangefile(e) {
        setData({
            ...data,
            image: e.target.files[0]
        });
    }

    return (
        <div className='container'>
            <div className="profileInfo">
                {user && (
                    <>
                    
                        <label htmlFor='image' className='image'><img src={`http://localhost:5000/uploads/profile/${user.image}`} alt="" 
                        width="170px"
                        /></label>
                        <input
                            type='file'
                            name='image'
                            id='image'
                            style={{display : 'none'}}
                            onChange={handleChangefile}
                        /><br />
                        <button onClick={updateImage}>Update Image</button><br/>
                        <label>Email:</label>
                        <input
                            type='text'
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                        /><br />
                        <button onClick={updateEmail}>Update Email</button><br />
                        <label>Name:</label>
                        <input
                            type='text'
                            name='name'
                            value={data.name}
                            onChange={handleChange}
                        />
                        <br/>
                        <button onClick={updateName}>Update Name</button>
                        <br />
                        <label>Password:</label>
                        <input
                            type='text'
                            name='password'
                            value={data.password}
                            onChange={handleChange}
                        />
                        <br/>
                        <button onClick={updatePass}>Update Password</button>
                        
                        
                    </>
                )}
            </div>
        </div>
    );
}

export default ProfileInfo;
