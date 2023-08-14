import React, { useContext, useEffect } from 'react'
import FavouriteContext from '../context/postContext/favouriteContext'
import EditPostItems from './EditPostItems'

function Favourite() {
    const { getFavouites, favPosts } = useContext(FavouriteContext)
    useEffect(() => {
        if (localStorage.getItem('token'))
            getFavouites()
    }, [])
    return (
        <div className='container flex-colum'>
            <h1 style={{color:"rgb(110, 97, 165)",
                fontSize : '35px',
                padding : "20px 0px",
                fontWeight : 900
                }}>Your Favourite Events</h1>
            {
                favPosts &&
                favPosts.map((favPost)=>{
                    return <EditPostItems key = {favPost._id} post={favPost} flag={2}/>
                })
            }
            {
                favPosts.length === 0 &&
                "There is no Favourite vedios"
            }
        </div>
    )
}

export default Favourite
