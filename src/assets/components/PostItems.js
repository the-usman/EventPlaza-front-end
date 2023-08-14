import React, { useContext } from 'react';
import FavouriteContext from '../context/postContext/favouriteContext';
import RemindContext from '../context/postContext/remindContext';
import { useNavigate } from 'react-router-dom';
import PageContext from '../context/postPage/postPageContext'

function PostItems(props) {
    const { addFavouites } = useContext(FavouriteContext)
    const { addRemindMe } = useContext(RemindContext)
    const {setPost} = useContext(PageContext)
    const navigate = useNavigate()
    function formatDate(isoDateString) {
        const date = new Date(isoDateString);
        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1;
        const year = date.getUTCFullYear();
        const formattedDate = `${day} / ${month} / ${year}`;
        return formattedDate;
    }
    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    }
    const moveToPage = () => {
        setPost(post)
        navigate('/postpage')
    }
    const { post } = props
    return (
        <div>
            <div className="card">
                <div className="innerCard">
                    <div className="title">
                        <h1>{post.title}</h1>
                    </div>
                    <div className="tag">{post.tag ? post.tag : "Default"}</div>
                    <div className="imageContainer">
                        <img
                            src={`http://localhost:5000/uploads/post/${post.image}`}
                            alt=""
                            width="450px"
                            height="400px"
                        />
                    </div>
                    <div className="contentContainer">
                        <p>{truncateText(post.content, 100)}</p>
                    </div>

                    <div className="f-display">
                        <div className="price">
                            <h2>Rs : {post.price}</h2>
                        </div>
                        <div className="cardBtn">
                            <button className="bookNow" onClick={()=>{
                                props.showModal(post._id)
                            }}>Book Now</button>
                        </div>
                    </div>
                    <hr />
                    <div className="innerSection">
                        <div className="location f-display">
                            <i className="fa-solid fa-location-crosshairs"></i>
                            <p>{post.location}</p>
                        </div>
                        <div className="date">
                            <i className="fa-solid fa-calendar-days"></i> {formatDate(post.lastDate)}
                        </div>
                    </div>
                    <hr />
                    <div className="actionBtns f-display">
                        <div className="iBtns">
                            <i className="fa-solid fa-heart" onClick={() => { addFavouites(post._id) }}></i>
                            <i className="fa-solid fa-repeat" onClick={() => { addRemindMe(post._id) }}></i>
                        </div>
                        <button onClick={moveToPage}>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItems;
