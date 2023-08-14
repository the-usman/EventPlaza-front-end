import React from 'react'

function CreateAdmin(props) {
    const handleChangefile = (e) => {
        props.setData({
            ...props.data,
            image: e.target.files[0]
        });
    };
    
    return (
        <div id='authForm'>
            <h1>Create {props.heading}</h1>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="name" id="" onChange={props.handleChange} value={props.data.name} required placeholder='Name'/><br />
                <input type="email" name="email" id="" onChange={props.handleChange} value={props.data.email} required placeholder='Email'/><br />
                <input type="password" name="password" id="" onChange={props.handleChange} value={props.data.password} required placeholder='Password' /><br />
                <p>Add a profile image</p>
                <input type="file" name="image" id="" onChange={handleChangefile} />
                <input type="submit" className='submit' value="Create Admin" />
            </form>
        </div>
    )
}

export default CreateAdmin
