import React from "react";
import "./register.scss";
import logo from "../../../Assets/Images/logo.png";
import fb from "../../../Assets/Images/Facebook_logo.png";
import gl from "../../../Assets/Images/google-icon.svg";
import Arrow from "../../../Assets/Images/Arrow_Bottom.png";

const Register = () => {







    return (
        <>
            <section className="register">
                <div className="container">
                    <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
                        <div className="logo">
                            <img src={logo} className="img-fluid" alt="Logo" />
                        </div>
                        <form className="rounded bg-white shadow py-5 px-4">
                            <h3>Let's register.</h3>
                            <h4>Welcome to Hotellom .<br />Thanks for using it!</h4>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label >Frist Name</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label >Last Name</label>
                            </div>
                            <button className="btn btn-collapse" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <img className="img-collaspse" src={Arrow} alt="" />
                            </button>
                            <div className="collapse" id="collapseExample">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label >Date of birth</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label >Email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label >Phone number</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label >Gender</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label >City</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label >Country</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label >Nationality</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label >Function</label>
                                </div>
                            </div>
                            <div className="fw-normal text-muted mb-4 mt-4">Don't have an account?
                                <a href="#" className="lets-singin text-decoration-none">let's Sing in</a>
                            </div>
                            <button type="submit" className="btn btn-primary submit_btn w-100  ">Register</button>
                            <a href="#" className=" google btn btn-light login_with mb-3">
                                <img alt="Logo" src={gl} className="img-fluid me-3" />Continue with Google
                            </a>
                            <a href="#" className=" facebook btn btn-light login_with  mb-3">
                                <img alt="Logo" src={fb} className="img-fluid " />Continue with Facebook
                            </a>
                        </form>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Register;