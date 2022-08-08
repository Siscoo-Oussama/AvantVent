import React from "react";
import "./register.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginbackground from "../../../Assets/Images/b12.svg";
const Register = () => {

    const history = useNavigate();
    const [Name, SetName] = useState('');
    const [Password, setPassword] = useState('');
    const [Email, SetEmail] = useState('');
    const [Error, SetError] = useState('');


    const handleNameInputChange = e => {
        SetName(e.target.value);
    }
    const handlePasswordInputChange = e => {
        setPassword(e.target.value);
    }
    const handleEmailInputChange = e => {
        SetEmail(e.target.value);
    }

    const RegisterSubmit = (e) => {
        e.preventDefault();
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/register', {
                username: Name,
                password: Password,
                email: Email
            }).then(response => {
                if (response.data.status === 200) {
                    localStorage.setItem('auth_token', response.data.token);
                    localStorage.setItem('auth_name', response.data.username);
                    toast.success(response.data.message);
                    history("/app/Dashbaord");
                }
                else {

                    SetError(response.data.validation_errors);
                    toast.error("Registration Field ,Try again !!");
                }
            })
        })
    }



    return (
        <>
            <ToastContainer />
            <section id="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 background-login">
                            <img src={loginbackground} alt="" />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 login-form">
                            <div className="content">
                                <p className="logo-title">Welcome to Vigon System! 👋</p>
                                <form action="" onSubmit={RegisterSubmit} name="login">
                                    
                                    <div className="form-group">
                                        <input type="username" name="username" className="form-control1" value={Name} onChange={handleNameInputChange} placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control1" value={Email} onChange={handleEmailInputChange} placeholder="Email" />
                                    </div>
                                    <div className="form-group">

                                        <input type="password" name="password" className="form-control1" value={Password} onChange={handlePasswordInputChange} placeholder="Password" />
                                    </div>

                                    <div className="col-md-12 text-center ">
                                        <button type="submit" name="login" className="btn btn-login">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}

export default Register;