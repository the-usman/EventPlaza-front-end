import { useContext, useState } from "react";
import Context from "./favouriteContext";
import alertContext from "../AlertContext/AlertContext";

const FavouriteState = (props) => {
    const { showAlert } = useContext(alertContext)
    const host = 'http://localhost:5000/api/favourite'
    const [favPosts, setFavPost] = useState([])
    const getFavouites = async () => {
        try {
            const response = await fetch(`${host}/getfavourite`, {
                headers: {
                    "token": localStorage.getItem('token')
                }
            })
            const jsonData = await response.json();
            if (jsonData.success) {
                showAlert("Favorite Post Fetched", "success")
                setFavPost(jsonData.posts)
            }
            else
                showAlert(jsonData.error, "danger")
        } catch (error) {
            console.log(error)
        }
    }

    const addFavouites = async (id) => {
        try {
            const response = await fetch(`${host}/addfavourite/${id}`, {
                method: 'POST',
                headers: {
                    "token": localStorage.getItem('token')
                }
            })
            const jsonData = await response.json();
            if (jsonData.success) {
                showAlert("Favorite Post Added successfully", "success")
                setFavPost(favPosts.concat(jsonData.favour))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteFavouites = async (id) => {
        try {
            const response = await fetch(`${host}/removefavourite/${id}`, {
                method: 'POST',
                headers: {
                    "token": localStorage.getItem('token')
                }
            })
            const jsonData = await response.json();
            if (jsonData.success) {
                showAlert("Favorite Post Deleted Successfully", "success")
                setFavPost(favPosts.filter((favPosts) => favPosts.post !== id));
                getFavouites();
            }
            else
                showAlert(jsonData.error, "danger")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Context.Provider value={{ addFavouites, getFavouites, deleteFavouites, favPosts }}>
            {props.children}
        </Context.Provider>
    );
}

export default FavouriteState;