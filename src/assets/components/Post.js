import React, { useContext, useEffect, useState, useRef } from 'react';
import PostItems from './PostItems';
import postContext from '../context/postContext/postContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import bookContext from '../context/bookContext/bookContext'

function Post() {
    const { getPosts, posts, hasMore } = useContext(postContext);
    const {AddBookReq} = useContext(bookContext)
    const [formData, setFormData] = useState({
        name : "",
        email : ""
    });
    const [id, setId] = useState("")
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
        AddBookReq(id, formData.email, formData.name)
        closeRef.current.click();
    };

    const showModal = (postId)=>{
        ref.current.click()
        setId(postId)
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getPosts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='container'>
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
                                <input type="text" name='name' value={formData.name} onChange={onChange} placeholder='Enter your name* ' required/><br />
                                <input type="email" name='email' value={formData.email} onChange={onChange} placeholder='Please enter your active email*' required/><br />
                                
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" ref={closeRef} data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={onSubmit}>Understood</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='postContainer'>
                <InfiniteScroll
                    dataLength={posts.length}
                    next={getPosts}
                    hasMore={hasMore}
                    loader={<div className='spinner'></div>}
                    style={{
                        position: 'relative'
                    }}
                >
                    {posts &&
                        posts.map((post) => {
                            return <PostItems post={post} key={post._id} showModal = {showModal} />;
                        })}
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default Post;
