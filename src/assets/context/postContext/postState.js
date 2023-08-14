import PostContext from './postContext'
import { useContext, useState } from 'react'
import alertContext from '../AlertContext/AlertContext'

const host = 'http://localhost:5000/api/post'
const PostState = (props) => {
    const { showAlert } = useContext(alertContext)
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [editPosts, setEditPosts] = useState([])
    const [hasMore, setHasMore] = useState(true);
    const getPosts = async () => {
        try {
            const response = await fetch(`${host}/getpost/${page}`);
            const jsonData = await response.json();

            if (jsonData.allPost.length === 0) {
                setHasMore(false);
            } else {
                setPosts(posts.concat(jsonData.allPost));
                setPage(page + 1);
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    const addImage = async (image, post) => {
        const postData = new FormData();
        postData.append('image', image)
        try {
            const response = await fetch(`${host}/addimage/${post._id}`, {
                method: 'POST',
                headers: {
                    "token": localStorage.getItem('token')
                },
                body: postData
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                showAlert("Post added succesfully", "success")
                if (posts) {
                    setPosts(posts.concat(post))
                }
                else
                    setPosts(post)
                return
            }
            else
                showAlert(jsonData.error, "danger")
            DeletePost(post._id)
        } catch (error) {
            console.log(error)
        }
    }


    const addPost = async (title, content, location, price, date, tag, image) => {
        const data = {
            title,
            content,
            location,
            price,
            date,
            tag
        }
        console.log(data)
        try {
            const response = await fetch(`${host}/createpost`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('token')
                },
                body: JSON.stringify(data)
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                showAlert("Post added Successfully", "success")
                addImage(image, jsonData.post)
            }
            else
            showAlert(jsonData.error , "danger")
        } catch (error) {
            console.log(error)
        }
    }

    const DeletePost = async (id) => {
        try {
            const response = await fetch(`${host}/deletepost/${id}`, {
                method: 'DELETE',
                headers: {
                    "token": localStorage.getItem('token')
                }
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                showAlert("Post Delteted Successfully", "success")
                
            }
            else
            showAlert(jsonData.error , "danger")
        } catch (error) {
            console.log(error)
        }
    }
    const getEditPost = async () => {
        try {
            const response = await fetch(`${host}/geteditpost`, {
                headers: {
                    "token": localStorage.getItem('token')
                }
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                setEditPosts(jsonData.posts);
                showAlert("Posts Feteched", "success")
            }
        } catch (error) {
            console.log(error);
        }
    };

    const editPost = async (id, title, content, location, price, date, tag, image) => {
        try {
            const data = {
                title,
                content,
                location,
                price,
                date,
                tag
            }
            const response = await fetch(`${host}/updatepost/${id}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('token')
                },
                body: JSON.stringify(data)
            })
            const jsonData = await response.json();
            if (jsonData.success) {
                showAlert("Post Edited Successfully", "success")
                addImage(image, jsonData.updatedPost)
            }
            else
            showAlert(jsonData.error , "danger")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <PostContext.Provider value={{ getPosts, posts, addPost, hasMore, editPosts, getEditPost, editPost, DeletePost }}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostState;