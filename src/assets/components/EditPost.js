import React, { useContext, useEffect, useRef, useState } from 'react'
import userContext from '../context/postContext/postContext'

import EditPostItems from './EditPostItems'

function EditPost() {
    const { getEditPost, editPosts,editPost } = useContext(userContext)
    const ref = useRef(null)
    const closeRef = useRef(null)
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        tag: "",
        location: "",
        date: "",
        image: null,
        price: "",
        id: ""
    })
    const onChane = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handlePriceChange = (event) => {
        const value = event.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setFormData({
                ...formData,
                price: value
            })
        }

    };
    useEffect(() => {
        getEditPost();
    }, [])
    const updatePostF = (post) => {
        ref.current.click();
        setFormData({
            title: post.title,
            content: post.content,
            tag: post.tag,
            location: post.location,
            date: post.lastDate,
            image: post.image,
            price: post.price,
            id: post._id
        })
    }
    const handleChangeFile = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        })
    }
    const setTag = (e) => {
        const selectedTag = e.target.innerText;
        const tags = document.querySelectorAll('.tag');
        tags.forEach(tag => tag.classList.remove('activeTag'));
        e.target.classList.add('activeTag');

        setFormData({
            ...formData,
            tag: selectedTag
        });
    }
    const onSubmit = () => {
        editPost(formData.id, formData.title, formData.content, formData.location, formData.price, formData.date, formData.tag, formData.image)
        closeRef.current.click();
    }
    console.log(editPosts)
    return (
        <div className='container flex-colum'>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ref={ref} style={{display:'none'}}>
                Launch static backdrop modal
            </button>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel"><h1>Edit Post</h1></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div id='postForm' className='model1'>
                            <form >
                                <input type="text" name='title' value={formData.title} onChange={onChane} placeholder='Enter Title of Post*' /><br />
                                <input type="text" name='location' value={formData.location} onChange={onChane} placeholder='Enter Location of Event' /><br />
                                <textarea name="content" id="" cols="30" rows="10" value={formData.content} onChange={onChane} placeholder='Enter Description of Event'></textarea><br />
                                <input type="text" name="price" value={formData.price} onChange={handlePriceChange} placeholder='Enter Ticket Price of Event' /><br />

                                <input type="date" name="date" id="" value={formData.date} onChange={onChane} /><br />
                                <p>Enter image for the Post</p>
                                <input type="file" name="image" id="" onChange={handleChangeFile} /><br />

                                {/* <input type="text" name="tag" id="" value={formData.tag} onChange={onChane} placeholder='Enter Tag of the Post'/><br /> */}
                                <div className="Tags">
                                    <div className="tag" onClick={setTag}>Entertainment</div>
                                    <div className="tag" onClick={setTag}>Coding</div>
                                    <div className="tag" onClick={setTag}>Development</div>
                                    <div className="tag" onClick={setTag}>Education</div>
                                    <div className="tag" onClick={setTag}>Night Show</div>
                                    <div className="tag activeTag" onClick={setTag}>Default</div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" ref={closeRef} data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={onSubmit}>Understood</button>
                        </div>
                    </div>
                </div>
            </div>
            { 
                editPosts.map((post)=>{
                    return <EditPostItems update = {updatePostF} post={post} flag={1}/>
                })
            }
        </div>
    )
}

export default EditPost
