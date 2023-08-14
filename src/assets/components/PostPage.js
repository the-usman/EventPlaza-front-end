
import React, { useContext, useState, useRef } from 'react';
import bookContext from '../context/bookContext/bookContext'
import PageContext from '../context/postPage/postPageContext'
function PostPage() {
    const { AddBookReq } = useContext(bookContext)
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });
    const [id, setId] = useState("")
    const {post} = useContext(PageContext)
    const ref = useRef(null);
    const closeRef = useRef(null);
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    const onSubmit = () => {
        AddBookReq(post.id, formData.email, formData.name)
        closeRef.current.click();
    };

    const showModal = () => {
        ref.current.click()
    }
    function formatDate(isoDateString) {
        const date = new Date(isoDateString);
        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1;
        const year = date.getUTCFullYear();
        const formattedDate = `${day} / ${month} / ${year}`;
        return formattedDate;
    }

    return (
        <div className='container flex-colum'>
            <button
                type='button'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#staticBackdrop'
                ref={ref}
                style={{ display: 'none' }}
            >
                Launch static backdrop modal
            </button>
            <div className='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel"><h1>Book Event Ticket</h1></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div id='postForm' className='model1'>
                            <form >
                                <input type="text" name='name' value={formData.name} onChange={onChange} placeholder='Enter your name* ' required /><br />
                                <input type="email" name='email' value={formData.email} onChange={onChange} placeholder='Please enter your active email*' required /><br />

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" ref={closeRef} data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={onSubmit}>Understood</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="heroSection" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)' }}>
                <h1>{post.title}</h1>
            </div>
            <div className="subContainer postPage">
                <h1>About Event :</h1>
                <p>{post.content}</p>
                <h1>
                    Event Details
                </h1>
                <div className="locationDateBox">
                    <div className="location">
                        <i className="fa-solid fa-location-crosshairs"></i>{post.location}
                    </div>
                    <div className="date">
                        <i className="fa-solid fa-calendar-days"></i>{formatDate(post.lastDate)}
                    </div>
                </div>
                <button onClick={showModal}>Book Now</button>
            </div>
        </div>
    )
}

export default PostPage
