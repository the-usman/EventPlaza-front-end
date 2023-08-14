import React, { useContext } from 'react'
import userContext from '../context/postContext/postContext'
import FavouriteContext from '../context/postContext/favouriteContext'
import RemindContext from '../context/postContext/remindContext'

function EditPostItems(props) {
    const { DeletePost, getEditPost } = useContext(userContext)
    const { deleteFavouites } = useContext(FavouriteContext)
    const { deleteRemindMe } = useContext(RemindContext)

    const { post, update } = props
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

    return (
        <div>
            <div className="subContainer">
                <div className="smallCard">
                    <div className="section1">
                        <img src={`http://localhost:5000/uploads/post/${post.image}`} alt="" width={'300px'} height={'280px'} style={{ border: '1px solid black' }} />
                    </div>
                    <div className="section2">
                        <div className="title"><h3>{post.title}</h3></div>
                        <div className="location">
                            <i className="fa-solid fa-location-crosshairs"></i>
                            {post.location}
                        </div>
                        <div className="lastDate">
                            <i className="fa-solid fa-calendar-days"></i> {formatDate(post.lastDate)}
                        </div>

                        <div className="price">RS : {post.price}</div>
                    </div>
                    <div className="section3">
                        <div className="description">
                            <h3>Description</h3>
                            <p>{truncateText(post.content, 100)} </p>
                        </div>
                        <div className="cardBtn">
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
                <div className="iconBox">
                    {props.flag &&
                        <div className='iconBtn' onClick={() => { update(post) }}><i class="fa-solid fa-pen-to-square"></i></div>
                    }
                    <div className='iconBtn m-i' onClick={() => {
                        if (props.flag === 1){
                            DeletePost(post._id)
                            getEditPost()
                        }
                        else if (props.flag === 2){
                            deleteFavouites(post._id)
                        }
                        else{
                            deleteRemindMe(post._id)
                        }
                    }}><i class="fa-solid fa-trash"></i></div>
                </div>
            </div>

        </div>
    )
}

export default EditPostItems
