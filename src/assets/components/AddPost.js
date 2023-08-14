import React, { useContext, useState } from 'react'
import postContext from '../context/postContext/postContext'

function AddPost(props) {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        tag: "",
        location: "",
        date: "", 
        image: null,
        price: ""
    })
    const { addPost } = useContext(postContext)
    
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
                price :  value
            })
        }

    };

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

    const handleChangeFile = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        addPost(formData.title, formData.content, formData.location, formData.price, formData.date, formData.tag, formData.image)
        setFormData({
            title: "",
        content: "",
        tag: "",
        location: "",
        date: "", 
        image: null,
        price: ""
        })
    }
    return (
        <div className='container'>{
            <div id='postForm'>
                <h1>Add Post</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" name='title' value={formData.title} onChange={onChane} placeholder='Enter Title of Post*' required/><br />
                    <input type="text" name='location' value={formData.location} onChange={onChane} placeholder='Enter Location of Event'/><br />
                    <textarea name="content" id="" cols="30" rows="10" value={formData.content} onChange={onChane} placeholder='Enter Description of Event' required></textarea><br />
                    <input type="text" name="price" value={formData.price} onChange={handlePriceChange} placeholder='Enter Ticket Price of Event'  required/><br />

                    <input type="date" name="date" id="" value={formData.date} onChange={onChane}  required/><br />
                    <p>Enter image for the Post</p>
                    <input type="file" name="image" id="" onChange={handleChangeFile}  required/><br />

                    {/* <input type="text" name="tag" id="" value={formData.tag} onChange={onChane} placeholder='Enter Tag of the Post'/><br /> */}
                    <div className="Tags">
                        <div className="tag" onClick={setTag}>Entertainment</div>
                        <div className="tag" onClick={setTag}>Coding</div>
                        <div className="tag" onClick={setTag}>Development</div>
                        <div className="tag" onClick={setTag}>Education</div>
                        <div className="tag" onClick={setTag}>Night Show</div>
                        <div className="tag" onClick={setTag}>Health</div>
                        <div className="tag" onClick={setTag}>Comedy</div>
                        <div className="tag activeTag" onClick={setTag}>Default</div>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>}
        </div>
    )
}

export default AddPost
