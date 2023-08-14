import { useContext, useState } from "react"
import AuthContext from './authContext'
import axios from "axios"
import alertContext from "../AlertContext/AlertContext"
const host = 'http://localhost:5000/api'
const Auth = (props) => {
    const [user, setUser] = useState(null)
    const { showAlert } = useContext(alertContext)
    const getUser = async () => {
        const response = await axios.get('http://localhost:5000/api/auth/getuser', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        setUser(response.data.user)
    }


    const loginUser = async (email, pass) => {
        const data = {
            email: email,
            password: pass
        }
        try {
            const response = await fetch(`${host}/auth/login`, {
                method: "POST",  // Add the method property
                headers: {
                    "Content-Type": "application/json"  // Correct the header name
                },
                body: JSON.stringify(data)
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                localStorage.setItem('token', jsonData.token)
                showAlert("User Login Successfully", "success")
                getUser();
            }
            else {
                showAlert(jsonData.error, "danger")
            }
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    const loginAdmin = async (email, pass) => {
        const data = {
            email: email,
            password: pass
        }
        try {
            const response = await fetch(`${host}/auth/adimlogin`, {
                method: "POST",  // Add the method property
                headers: {
                    "Content-Type": "application/json"  // Correct the header name
                },
                body: JSON.stringify(data)
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                localStorage.setItem('token', jsonData.token)
                showAlert("Admin Login Successfully", "success")
                getUser()
            }
            else {
                showAlert(jsonData.error, "danger")
            }
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }




    const createUser = async (email, pass, name) => {
        const data = {
            email: email,
            password: pass,
            name: name
        }
        try {
            const response = await fetch(`${host}/auth/createuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                localStorage.setItem('token', jsonData.token)
                showAlert("User created Successfully", "success")
                getUser();
            }
            else {
                showAlert(jsonData.error, "danger")
            }
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }


    const createAdmin = async (email, pass, name) => {
        const data = {
            email: email,
            password: pass,
            name: name
        }
        try {
            const response = await fetch(`${host}/auth/createadim`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('token')
                },
                body: JSON.stringify(data)
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                showAlert("Admin created Successfully", "success")
                console.log(jsonData.user);
                return jsonData.user._id
            }
            else {
                showAlert(jsonData.error, "danger")
            }
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    const updateUser = async (id, email, name, password, image) => {
        try {
            const data = {};
            if (email) {
                data.email = email
            }
            if (name) {
                data.name = name
            }
            if (password) {
                data.password = password
            }
            // Send a request to update user data
            const response = await fetch(`${host}/auth/updateuser`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('token')
                },
                body: JSON.stringify(data)
            });

            const jsonData = await response.json();

            // Check if user update was successful
            if (jsonData.success)
            showAlert("Admin created Successfully", "success")

            // Handle user images
            if (image) {
                if (user.type === 'admin') {
                    // Call the addAdminImage function with image and id
                    addAdminImage(image, id);
                } else {
                    // Call the addUserImage function with image and id
                    addUserImage(image, id);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const addAdminImage = async (image, id) => {
        const postData = new FormData();
        postData.append('image', image);
        const response = await axios.post(`http://localhost:5000/api/auth/adminimage/${id}`, postData, {
            headers: {
                "Content-Type": "multipart/form-data",
                token: localStorage.getItem('token')
            }
        });
        if (response.data.success)
            showAlert("Image added Successfully", "success")
        else {
            showAlert(response.data.error, "danger")
        }
    }

    const addUserImage = async (image, id) => {
        const postData = new FormData();
        postData.append('image', image);// eslint-disable-next-line
        const response = await axios.post('http://localhost:5000/api/auth/addimage', postData, {
            headers: {
                "Content-Type": "multipart/form-data",
                token: localStorage.getItem('token')
            }
        });
        if (response.data.success)
            showAlert("Image added Successfully", "success")
        else {
            showAlert(response.data.error, "danger")
        }
    }
    return (
        <AuthContext.Provider value={{ loginUser, user, createUser, createAdmin, loginAdmin, getUser, setUser, updateUser }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default Auth