import React from 'react'
import Post from './Post'

function RequestCard(props) {
    return (
        <div className='subContainer'>
            <div className="requestCard">
            <b>{props.post.name}</b> requested to book your post with title <b>{props.post.title}</b>
            <br/>
            His Active <b>Email</b> is <b>{props.post.email}</b>
            <br/>
            <button className='cardBtn1' onClick={()=>{
                props.AcceptRequest(props.post._id)
            }}>Accept</button>
            <button className='cardBtn1' onClick={()=>{
                props.RejectRequest(props.post._id)
            }} >Reject</button>
            </div>
        </div>
    )
}

export default RequestCard
