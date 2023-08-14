import React, { useContext, useEffect } from 'react'
import RemindContext from '../context/postContext/remindContext';
import EditPostItems from './EditPostItems';

function RemindMe() {
    const { getRemindMe, remPosts } = useContext(RemindContext)
    useEffect(() => {
        if (localStorage.getItem('token'))
            getRemindMe();
    }, [])
    return (
        <div className='container flex-colum'>
            <h1 style={{color:"rgb(110, 97, 165)",
                fontSize : '35px',
                padding : "20px 0px",
                fontWeight : 900
                }}>Your Favourite Events</h1>
            {
                remPosts && 
                remPosts.map((remPost)=>{
                    return <EditPostItems key = {remPost._id} post={remPost} flag={3}/>
                })
            }
            {
                remPosts.length === 0 &&
                "There is no Favourite vedios"
            }
        </div>
    )
}

export default RemindMe
