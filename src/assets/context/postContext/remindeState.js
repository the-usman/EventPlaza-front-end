import { useContext, useState } from "react";
import Context from "./remindContext";
import alertContext from "../AlertContext/AlertContext";

const RemindState = (props) => {
    const host = 'http://localhost:5000/api/reminme'
    const [remPosts, setRemPost] = useState([])
    const { showAlert } = useContext(alertContext)
    const getRemindMe = async () => {
        try {
            const response = await fetch(`${host}/getremindme`, {
                headers: {
                    "token": localStorage.getItem('token')
                }
            })
            const jsonData = await response.json();
            if (jsonData.success) {
                showAlert("Remind Post Fetched", "success")
                setRemPost(jsonData.posts)
            }
            else
            showAlert(jsonData.error , "danger")
        } catch (error) {
            console.log(error)
        }
    }

    const addRemindMe = async (id) => {
        try {
            const response = await fetch(`${host}/addremindme/${id}`, {
                method : 'POST',
                headers: {
                    "token": localStorage.getItem('token')
                }
            })
            const jsonData = await response.json();
            if (jsonData.success) {
                showAlert("Remond Post added", "success")
                setRemPost(remPosts.concat(jsonData.favour))
            }
            else
            showAlert(jsonData.error , "danger")
        } catch (error) {
            console.log(error)
        }
    }

    const deleteRemindMe = async (id) => {
        try {
            const response = await fetch(`${host}/removeremindme/${id}`, {
                method: 'POST',
                headers: {
                    "token": localStorage.getItem('token')
                }
            })
            const jsonData = await response.json();
            if (jsonData.success) {
                showAlert("Remind Post Deleted", "success")
                setRemPost(remPosts.filter((remPosts) => remPosts.post !== id));
                getRemindMe();
            }
            else
            showAlert(jsonData.error , "danger")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Context.Provider value={{ addRemindMe, getRemindMe, deleteRemindMe, remPosts }}>
            {props.children}
        </Context.Provider>
    );
}

export default RemindState;