import React, { useContext, useEffect, useRef, useState } from 'react';
import bookContext from '../context/bookContext/bookContext';
import authContext from '../context/authContext/authContext';
import RequestCard from './RequestCard';
import BookedItems from './BookedItems';

function Book() {
    const { GetBookReq, post, AcceptRequest, RejectRequest, bookedPost, getBooked } = useContext(bookContext);
    const {user, getUser} = useContext(authContext)
    const closeRef = useRef(null)
    const ref = useRef(null)
    const [reason, setReason] = useState("");
    const onChange = (e) => {
        setReason(e.target.value)
    }
    const [id, setId] = useState("")
    const reject = (postId) => {
        setId(postId)
        ref.current.click()
    }
    const onSubmit = () => {
        closeRef.current.click()
        RejectRequest(id, reason)

    }
    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem('token')) {
                await getUser();
            }
        };
        fetchData();
        

    }, []);
    useEffect(()=>{
        if (user && (user.type === "admin" || user.type === "BossAdim"))
            GetBookReq()
        getBooked();
    }, [user])

    console.log(post);
    return (
        <div className='container flex-colum'>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ display: "none" }} ref={ref}>
                Launch demo modal
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Reject Request</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="modalInput">
                                <textarea name="reason" id="" cols="30" rows="10" placeholder='Write atleast one reason to reject this request' onChange={onChange} value={reason}></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref={closeRef}>Close</button>
                            <button type="button" class="btn btn-primary" onClick={onSubmit}>Reject Request</button>
                        </div>
                    </div>
                </div>
            </div>
            {user && (user.type === "admin" || user.type === "BossAdim") &&
                <h1 style={{color:"rgb(110, 97, 165)",
                fontSize : '35px',
                padding : "20px 0px",
                fontWeight : 900
                }}>Requests for Book Your Events</h1>
            }
            {user && (user.type === "admin" || user.type === "BossAdim") &&
            (post.length !== 0 ?
                post.map((p) => {
                    return <RequestCard post={p} AcceptRequest={AcceptRequest} RejectRequest={reject} />
                }) : ("There is No requests to show"))
            }
            <h1 style={{color:"rgb(110, 97, 165)",
            fontSize : '35px',
            padding : "20px 0px",
            fontWeight : 900
            }}>Your Bookings</h1>
            {(bookedPost.length !== 0 ?
                bookedPost.map((p) => {
                    return <BookedItems post={p}/>
                }) : ("There is No requests to show"))}
        </div>
    );
}

export default Book;

