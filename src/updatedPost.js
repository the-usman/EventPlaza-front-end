import React, {useState} from 'react'
import axios from 'axios'
export default function updatedPost() {

    const [formData, setFormData] = useState({
        image: null,
        title: '',
        content: '',
        date: null,
        location: '',
        price: 500
    });
    const [id, setId] = useState('64cf86f3e2dbb00beb748d48');

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.name === 'date' ? new Date(e.target.value) : e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = {
            title: formData.title,
            location: formData.location, 
            date: formData.data,
            content: formData.content,
            price: 500,
        };
        console.log(postData.date, postData.location, postData.price)
        try {
            const response = await axios.post(`http://localhost:5000/api/updatepost/${id}`, postData, {
                headers: {
                    'Content-Type': 'application/json',
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYTQ5NjYyYmUzYzVhMWEwOGJjY2QyIn0sImlhdCI6MTY5MDk4NDM3NX0.RZM2KFCg1LmKZRrjpDN5TahnINlrof9ECXn8tZ2tbtQ', // Replace with your actual token
                },
            });
            addImage(response.data.id)
            if (response.data.success) {
                alert('Post created successfully');
                addImage(response.data.id); 
            } else {
                alert('Error creating post');
                console.log(response.data.error);
            }
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Error creating post: ' + error.message);
        }
        setFormData({
            title: '',
            content: '',
            image: null,
            location: '',
        });
    };

    const addImage = async (postId) => {
        console.log(postId);
        const postData = new FormData();
        postData.append('image', formData.image);
        try {
            const response = await axios.post(`http://localhost:5000/api/addimage/${id}`, postData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYTQ5NjYyYmUzYzVhMWEwOGJjY2QyIn0sImlhdCI6MTY5MDk4NDM3NX0.RZM2KFCg1LmKZRrjpDN5TahnINlrof9ECXn8tZ2tbtQ'
                },
            });
        } catch (error) {
            const deletePost = await axios.delete(`http://localhost:5000/api/deletepost/${id}`, {
                headers: {
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYTQ5NjYyYmUzYzVhMWEwOGJjY2QyIn0sImlhdCI6MTY5MDk4NDM3NX0.RZM2KFCg1LmKZRrjpDN5TahnINlrof9ECXn8tZ2tbtQ'
                },
            });
            alert(error)
        }
    }

    return (
        <div>
            <h2>Update Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                <label>Location</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                <label>Content</label>
                <textarea name="content" value={formData.content} onChange={handleChange} required />
                <label htmlFor="">Date</label>
                <input type="date" name="date" id="" onChange={handleChange} required />
                <input type="file" name="image" onChange={handleFileChange} required />
                <button type="submit">Create Post</button>
            </form>
            <label>Image</label>
        </div>
    );
}
