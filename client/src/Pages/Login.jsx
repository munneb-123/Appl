import React, { useState } from "react"
import "./Style.css"
import axios from "axios"
import { NavLink,useNavigate } from "react-router-dom"

const Login = ({ setLoginUser }) => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:8000/posts/login", user)
            .then(res => {
                if(res.data.result===null){
                    alert("Credentails are not correct.")
                }
                else{
                    localStorage.setItem('user', JSON.stringify(res.data.result));
                    alert(res.data.message)
                    window.location.reload(true);
                }
            }).catch((err)=>{
                alert("Invaild Input")
            })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" >
                <NavLink to='/register' style={{ color: '#fff' }}>
                    Register
                </NavLink>
            </div>
        </div>
    )
}

export default Login