import React from "react";
import "./login.scss"
import loginbackground from "../../../Assets/Images/b12.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {


    const [Email, SetEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Error, SetError] = useState('');
    const [Role, SetRole] = useState('');
    const history = useNavigate();


    const handleEmailInputChange = (e) => {
        SetEmail(e.target.value);
    }

    const handlePassowrdInputChange = (e) => {
        setPassword(e.target.value);
    }

    const Submit = () => {

    }





    return (
        <>
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
                                        <input type="username" name="username" className="form-control1" value={Email} onChange={handleEmailInputChange} placeholder="Email or Username" />
                                        <span>{Error.email}</span>
                                    </div>
                                    <div className="form-group">

                                        <input type="password" name="password" className="form-control1" value={Password} onChange={handlePassowrdInputChange} placeholder="Password" />
                                        <span>{Error.password}</span>
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