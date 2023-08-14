import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    // const [formData, setFormData] = useState({
    //   image: null,
    //   title: '',
    //   content: '',
    //   date: null,
    //   location: '',
    //   price: 500
    // });
    // const [id , setId] = useState('');

    // const handleFileChange = (e) => {
    //   setFormData({
    //     ...formData,
    //     image: e.target.files[0],
    //   });
    // };

    // const handleChange = (e) => {
    //   setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.name === 'date' ? new Date(e.target.value) : e.target.value,
    //   });
    // };

    // const handleSubmit = async (e) => {
    //   e.preventDefault();

    //   const postData = {
    //     title: formData.title,
    //     location: formData.location, // Use the value from the form data
    //     date: Date.now(),
    //     content: formData.content,
    //     price: 500,
    //   };
    //   console.log(postData.date, postData.location, postData.price)

    //   try {
    //     const response = await axios.post('http://localhost:5000/api/createpost', postData, {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYTQ5NjYyYmUzYzVhMWEwOGJjY2QyIn0sImlhdCI6MTY5MDk4NDM3NX0.RZM2KFCg1LmKZRrjpDN5TahnINlrof9ECXn8tZ2tbtQ', // Replace with your actual token
    //       },
    //     });
    //     setId(response.data.id); // Update id state with the received ID
    //     addImage(response.data.id)
    //     if (response.data.success) {
    //       alert('Post created successfully');
    //       addImage(response.data.id); // Pass the ID to the addImage function
    //     } else {
    //       alert('Error creating post');
    //       console.log(response.data.error);
    //     }
    //   } catch (error) {
    //     console.error('Error creating post:', error);
    //     alert('Error creating post: ' + error.message);
    //   }

    //   setFormData({
    //     title: '',
    //     content: '',
    //     image: null,
    //     location: '', 
    //   });
    // };

    // const addImage = async (postId) => { 
    //   console.log(postId);
    //   const postData = new FormData();
    //   postData.append('image', formData.image);
    //   try {
    //     const response = await axios.post(`http://localhost:5000/api/addimage/${postId}`, postData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //         token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYTQ5NjYyYmUzYzVhMWEwOGJjY2QyIn0sImlhdCI6MTY5MDk4NDM3NX0.RZM2KFCg1LmKZRrjpDN5TahnINlrof9ECXn8tZ2tbtQ'
    //       },
    //     });
    //   } catch (error) {
    //     const deletePost = await axios.delete(`http://localhost:5000/api/deletepost/${postId}`, {
    //       headers: {
    //         token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYTQ5NjYyYmUzYzVhMWEwOGJjY2QyIn0sImlhdCI6MTY5MDk4NDM3NX0.RZM2KFCg1LmKZRrjpDN5TahnINlrof9ECXn8tZ2tbtQ'
    //       },
    //     });
    //     alert(error)
    //   }
    // }

    // return (
    //   <div>
    //     <h2>Create Post</h2>
    //     <form onSubmit={handleSubmit}>
    //       <label>Title</label>
    //       <input type="text" name="title" value={formData.title} onChange={handleChange} required />
    //       <label>Location</label>
    //       <input type="text" name="location" value={formData.location} onChange={handleChange} required />
    //       <label>Content</label>
    //       <textarea name="content" value={formData.content} onChange={handleChange} required />
    //       <label htmlFor="">Date</label>
    //       <input type="date" name="date" id="" onChange={handleChange} required />
    //     <input type="file" name="image" onChange={handleFileChange} required />
    //       <button type="submit">Create Post</button>
    //     </form>
    //     <label>Image</label>
    //     <updatedPost/>
    //   </div>
    // );

    // const [formData, setFormData] = useState({
    //   image: null,
    //   title: '',
    //   content: '',
    //   date: null,
    //   location: '',
    //   price: 500
    // });
    // const [id, setId] = useState('64cf86f3e2dbb00beb748d48');

    // const handleFileChange = (e) => {
    //   setFormData({
    //     ...formData,
    //     image: e.target.files[0],
    //   });
    // };

    // const handleChange = (e) => {
    //   setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.name === 'date' ? new Date(e.target.value) : e.target.value,
    //   });
    // };

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   const postData = {
    //     title: formData.title,
    //     location: formData.location,
    //     date: formData.data,
    //     content: formData.content,
    //     price: 500,
    //   };
    //   console.log(postData.date, postData.location, postData.price)
    //   try {
    //     const response = await axios.post(`http://localhost:5000/api/updatepost/${id}`, postData, {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYTQ5NjYyYmUzYzVhMWEwOGJjY2QyIn0sImlhdCI6MTY5MDk4NDM3NX0.RZM2KFCg1LmKZRrjpDN5TahnINlrof9ECXn8tZ2tbtQ', // Replace with your actual token
    //       },
    //     });
    //     addImage(response.data.id)
    //     if (response.data.success) {
    //       alert('Post created successfully');
    //       addImage(response.data.id);
    //     } else {
    //       alert('Error creating post');
    //       console.log(response.data.error);
    //     }
    //   } catch (error) {
    //     console.error('Error creating post:', error);
    //     alert('Error creating post: ' + error.message);
    //   }
    //   setFormData({
    //     title: '',
    //     content: '',
    //     image: null,
    //     location: '',
    //   });
    // };

    // const addImage = async (postId) => {
    //   console.log(postId);
    //   const postData = new FormData();
    //   postData.append('image', formData.image);
    //   try {
    //     const response = await axios.post(`http://localhost:5000/api/addimage/${id}`, postData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //         token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYTQ5NjYyYmUzYzVhMWEwOGJjY2QyIn0sImlhdCI6MTY5MDk4NDM3NX0.RZM2KFCg1LmKZRrjpDN5TahnINlrof9ECXn8tZ2tbtQ'
    //       },
    //     });
    //   } catch (error) {
    //     const deletePost = await axios.delete(`http://localhost:5000/api/deletepost/${id}`, {
    //       headers: {
    //         token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYTQ5NjYyYmUzYzVhMWEwOGJjY2QyIn0sImlhdCI6MTY5MDk4NDM3NX0.RZM2KFCg1LmKZRrjpDN5TahnINlrof9ECXn8tZ2tbtQ'
    //       },
    //     });
    //     alert(error)
    //   }
    // }

    // return (
    //   <div>
    //     <h2>Update Post</h2>
    //     <form onSubmit={handleSubmit}>
    //       <label>Title</label>
    //       <input type="text" name="title" value={formData.title} onChange={handleChange} required />
    //       <label>Location</label>
    //       <input type="text" name="location" value={formData.location} onChange={handleChange} required />
    //       <label>Content</label>
    //       <textarea name="content" value={formData.content} onChange={handleChange} required />
    //       <label htmlFor="">Date</label>
    //       <input type="date" name="date" id="" onChange={handleChange} required />
    //       <input type="file" name="image" onChange={handleFileChange} required />
    //       <button type="submit">Create Post</button>
    //     </form>
    //     <label>Image</label>
    //   </div>
    // );
    // const [notes, setNotes] = useState([]);

    // const getPost = async () => {
    //   const sendData = {
    //     page: 1,
    //     numOfPost: 3
    //   };
    //   try {
    //     const response = await axios.get('http://localhost:5000/api/getpost', {
    //       params: sendData,
    //       headers: {
    //         token:
    //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYTQ5NjYyYmUzYzVhMWEwOGJjY2QyIn0sImlhdCI6MTY5MDk4NDM3NX0.RZM2KFCg1LmKZRrjpDN5TahnINlrof9ECXn8tZ2tbtQ'
    //       }
    //     });
    //     setNotes(response.data.allPost);
    //   } catch (error) {
    //     console.error('Error fetching post:', error);
    //   }
    // };

    // useEffect(() => {
    //   getPost();
    // }, []);

    // return (
    //   <>
    //     {notes.length > 0 ? (
    //       <>
    //         <p>{notes[1].title}</p>
    //         <p>{notes[1].content}</p>
    //         <p>{notes[1].location}</p>
    //       </>
    //     ) : (
    //       <p>No post available.</p>
    //     )}
    //   </>
    // );

    //   const createUser = async () => {
    //     const postData = {
    //       name :"Irtaza",
    //       email : "Irtaza2@gmail.com",
    //       password : "Irtaza"
    //     }
    //     const response = await axios.post('http://localhost:5000/api/auth/createuser', postData,{
    //       headers : {
    //         "Content-Type" : "application/json"
    //       }
    //     })
    //     console.log(response.data.token)
    //     if(response.data.success){
    //       alert("User created")
    //       // localStorage.setItem(response.data.token)
    //     }
    //   }
    // useEffect(()=>{
    //   createUser();
    // },[])
    const [favor, setFavor] = useState([]);

    const addFavour = async () => {
        try {
            const response = await axios.post(
                'http://localhost:5000/api/book/addbook/64cf86f3e2dbb00beb748d48',
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZmU2ZjE4MmVmNWUxOTA2MTk3YmFlIn0sImlhdCI6MTY5MTM0NjY3M30.NeZ_RDOURmf9W1biKFsnn_5a2UJdqNWgk7d3d60b8W4'
                    }
                }
            );
            console.log("Favourite added successfully");
        } catch (error) {
            console.log("Error adding favourite:", error);
        }
    }

    const getFavour = async () => {
        try {
            const response = await axios.get(
                'http://localhost:5000/api/book/getbook',
                {
                    headers: {
                        "Content-Type": "application/json",
                        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZmU2ZjE4MmVmNWUxOTA2MTk3YmFlIn0sImlhdCI6MTY5MTM0NjY3M30.NeZ_RDOURmf9W1biKFsnn_5a2UJdqNWgk7d3d60b8W4'
                    }
                }
            );
            setFavor(response.data.posts);
        } catch (error) {
            console.log("Error fetching favourites:", error);
        }
    }

    useEffect(() => {
        addFavour();
        getFavour();
    }, []);

    return (
        <>
            {favor.length > 0 ? (
                <>
                    <p>{favor[0].title}</p>
                    <p>{favor[0].content}</p>
                    <p>{favor[0].location}</p>
                </>
            ) : (
                <p>No post available.</p>
            )}
        </>
    );
    // return (
    //   <div>
    //     <h1>hello</h1>

    //   </div>
    // )
}

export default App;
