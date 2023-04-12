import React, { useState } from "react"
import "./Style.css"
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom"

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:8000/posts/register", user)
                .then(res => {
                    alert(res.data.message)
                    navigate('/')
                }).catch((err)=>{
                    alert("Something is wrong.Please check credentials")
                })
        } else {
            alert("invlid input")
        }

    }

    return (
        <div className="register">
            <h1>Register</h1>
            {
                console.log(user)
            }
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button">
                <NavLink to='/' style={{ color: '#fff' }}>
                    Login
                </NavLink>
            </div>
        </div>
    )
}

export default Register