import React from "react";
import "./login.scss"
import loginbackground from "../../../Assets/Images/b12.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery";
const Login = () => {

   


    const [Email, SetEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Role, SetRole] = useState('');
    const history = useNavigate();


    const handleEmailInputChange = (e) => {
        SetEmail(e.target.value);
    }

    const handlePassowrdInputChange = (e) => {
        setPassword(e.target.value);
    }

    const Submit = (e) => {
        e.preventDefault();

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, {
                email: Email,
                password: Password,
            }).then(response => {
                if (response.data.status === 200) {
                    localStorage.setItem('auth_token', response.data.token);
                    localStorage.setItem('auth_name', response.data.username);
                    toast.success(response.data.message);
                    return history("/app/Dashbaord");

                }
                else if (response.data.status === 401) {
                    toast.warning(response.data.message);
                }
                else {
                    toast.error("Le champ email et mot de passe est obligatoire.")
                }
            });
        });

    }





    return (
        <>
            <ToastContainer/>
            <section id="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 background-login">
                            <img src={loginbackground} alt="" />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 login-form">
                            <div className="content">
                                <p className="logo-title">Welcome to Vigon System! 👋</p>
                                <form action="" onSubmit={Submit} name="login">
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control1" value={Email} onChange={handleEmailInputChange} placeholder="Email or Username" />
                                    </div>
                                    <div className="form-group">

                                        <input type="password" name="password" className="form-control1" value={Password} onChange={handlePassowrdInputChange} placeholder="Password" />
                                    </div>

                                    <div className="col-md-12 text-center ">
                                        <button type="submit" name="login" className="btn btn-login">Login</button>
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

export default Login;