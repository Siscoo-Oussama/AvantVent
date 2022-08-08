import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Sidebar } from "../../components/SideBar/Sidebar";
import "./masterlayout.scss";
const MasterLayout = () => {



    return (
        
        <>
            <section id="Masterlayout">
                <div className="main-container d-flex">
                    <Sidebar />
                    <div className="content">
                        <Navbar />
                        <Outlet />
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default MasterLayout;