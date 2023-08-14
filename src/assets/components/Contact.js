import React, { useContext, useState } from 'react';
import alertContext from '../context/AlertContext/AlertContext';
import { json } from 'react-router-dom';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const {showAlert} = useContext(alertContext)
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response  = await fetch('http://localhost:5000/api/contact' , {
                method : 'POST',
                headers :{
                    "Content-Type" : "application/json",
                    "token" : localStorage.getItem('token')
                },
                body : JSON.stringify(formData)
            })
            const jsonData = await response.json();
            if(jsonData.success){
                showAlert(jsonData.message, "success")
            }
            else 
            showAlert(jsonData.error, "danger")
        } catch (error) {
            console.log(error)
        }
        console.log('Form data submitted:', formData);
    };

    return (
        <div className='container'>
            <div id='postForm'>
                <h1>Contact Us</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" name='name' value={formData.name} onChange={onChange} placeholder='Enter your name*' /><br />
                    <input type="text" name='email' value={formData.email} onChange={onChange} placeholder='Enter your active email*' /><br />
                    <textarea name="message" id="" cols="30" rows="10" value={formData.message} onChange={onChange} placeholder='Enter your message*'></textarea><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Contact;
