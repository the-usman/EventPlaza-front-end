import { useContext, useState } from "react";
import Context from "./bookContext";
import AlertContext from '../AlertContext/AlertContext'
import { json } from "react-router-dom";

const BookState = (props) => {
    const host = 'http://localhost:5000/api/book';
    const { showAlert } = useContext(AlertContext);
    const [post, setPost] = useState([]);
    const [bookedPost, setBookedPost] = useState([]);


    const GetBookReq = async () => {
        try {
            const response = await fetch(`${host}/getbookreq`, {
                headers: {
                    "token": localStorage.getItem('token')
                }
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                showAlert("Successfully fetched requests", "success");
                setPost(jsonData.posts);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const AddBookReq = async (id, email, name) => {
        try {
            const data = {
                email : email,
                name : name
            }
            console.log(data)
            const response = await fetch(`${host}/addbookrequest/${id}`, {
                method: 'POST',
                headers: {
                    "token": localStorage.getItem('token'),
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(data)
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                console.log("Book request added successfully");
                showAlert("Successfully book add requests", "success");
            } else {
                console.log("Book request failed:", jsonData.error);
                showAlert(jsonData.error, "danger");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const AcceptRequest = async (id) => {
        try {
            const response = await fetch(`${host}/acceptreq/${id}`, {
                method: 'POST',
                headers: {
                    "token": localStorage.getItem('token')
                }
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                showAlert("Successfully accepted request", "success");
                GetBookReq();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const RejectRequest = async (id, reason) => {
        try {
            const data = {
                reason
            }
            const response = await fetch(`${host}/rejectreq/${id}`, {
                method: 'POST',
                headers: {
                    "token": localStorage.getItem('token'),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                showAlert("Successfully rejected request", "success");
                GetBookReq();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getBooked = async () => {
        try {
            const response = await fetch(`${host}/getbook`, {
                headers: {
                    "token": localStorage.getItem('token')
                }
            })
            const jsonData = await response.json()
            if (jsonData.success) {
                showAlert("Successfully fetch the posts", "success")
                setBookedPost(jsonData.posts)
            }
            else
                showAlert(jsonData.error, "danger")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Context.Provider value={{ GetBookReq, post, AddBookReq, AcceptRequest, RejectRequest, getBooked, bookedPost }}>
            {props.children}
        </Context.Provider>
    );
};

export default BookState;
