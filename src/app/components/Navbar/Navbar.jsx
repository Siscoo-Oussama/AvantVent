import React from "react";
import "./navbar.scss";
import { faStream } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../../Assets/Images/profile-img.jpg";
import logo from "../../../Assets/Images/logo.png";
const Navbar = () => {
    return (
        <>
            <section id="Navbar">
                <nav className="navbar navbar-expand">
                    <div className="container-fluid">

                        <img className="img-profile float-end" src={profile} alt="" />
                        <div className="d-flex justify-content-between d-md-none d-block">
                            <button className="btn open-btn px-1 py-0 me-2"><FontAwesomeIcon icon={faStream}></FontAwesomeIcon></button>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar;