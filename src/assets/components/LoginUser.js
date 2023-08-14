import React from 'react'

function LoginUser(props) {
    return (
        <div id='authForm'>
            <h1>Login {props.heading}</h1>
            <form onSubmit={props.handleSubmit}>
                <input type="email" name="email" id="" onChange={props.handleChange} value={props.data.email} required placeholder='Email'/> <br />
                <input type="password" name="password" id="" onChange={props.handleChange} value={props.data.password} required placeholder='Password'/><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginUser
