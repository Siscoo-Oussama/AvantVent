import React, { Component } from "react";
import { faStream, faSignOut,faCircleDot,faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vigon from "../../../Assets/Images/vigon.ico"
import $ from "jquery";
import "./sidebar.scss";
import logo2 from "../../../Assets/Images/logo2.png";


export class Sidebar extends Component {
    jQuerycode = () => {
        $("#Sidebar ul li").on('click', function () {
            $("#Sidebar ul li.active").removeClass('active');
            $(this).addClass('active');
        });

        $('.open-btn').on("click", function () {
            $('#Sidebar').addClass('active');
        });
        $('.close-btn').on("click", function () {
            $('#Sidebar').removeClass('active');
        });
    }

    componentDidMount() {
        this.jQuerycode()
    }

    render() {
        return (
            <>
                <section id="Sidebar">
                    <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
                        <h1 className="fs-4"><span className="bg-white text-dark rounded shadow px-2 me-2"><img src={vigon} alt="" /> Vigon System</span></h1>
                        <button className="btn d-md-none d-block close-btn px-1 py-0 text-white">
                            <FontAwesomeIcon icon={faClose} className="close-icon" ></FontAwesomeIcon>
                        </button>
                    </div>
                    <ul className="list-unstyled px-2 ">
                        <li>
                            <a className="text-decoration-none px-3 py-2 d-block" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <FontAwesomeIcon className="me-3" icon={faStream}></FontAwesomeIcon>PARTENAIRE
                            </a>

                            <div class="collapse" id="collapseExample">
                                <a href="#" className="item1 text-decoration-none px-3 py-2 d-block">
                                <FontAwesomeIcon className="me-3" icon={faCircleDot}></FontAwesomeIcon>
                                    Clients
                                    </a>
                                <a href="#" className="item2 text-decoration-none px-3 py-2 d-block">
                                <FontAwesomeIcon className="me-3" icon={faCircleDot}></FontAwesomeIcon>
                                    Fournisseurs
                                    </a>
                            </div>
                        </li>
                        <li>
                            <a className="text-decoration-none px-3 py-2 d-block" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                                <FontAwesomeIcon className="me-3" icon={faStream}></FontAwesomeIcon>OFFRE
                            </a>

                            <div class="collapse" id="collapseExample1">
                                <a href="#" className="text-decoration-none px-3 py-2 d-block">
                                <FontAwesomeIcon className="me-3" icon={faCircleDot}></FontAwesomeIcon>
                                Devis
                                </a>
                                <a href="#" className="text-decoration-none px-3 py-2 d-block">
                                <FontAwesomeIcon className="me-3" icon={faCircleDot}></FontAwesomeIcon>
                                Demande de prix
                                </a>
                            </div>
                        </li>

                        <li>
                            <a className="text-decoration-none px-3 py-2 d-block" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                                <FontAwesomeIcon className="me-3" icon={faStream}></FontAwesomeIcon>COMMANDE
                            </a>

                            <div class="collapse" id="collapseExample2">
                                <a href="#" className="text-decoration-none px-3 py-2 d-block">
                                <FontAwesomeIcon className="me-3" icon={faCircleDot}></FontAwesomeIcon>
                                BC client
                                </a>
                                <a href="#" className="text-decoration-none px-3 py-2 d-block">
                                <FontAwesomeIcon className="me-3" icon={faCircleDot}></FontAwesomeIcon>
                                BC Fournisseur
                                </a>
                            </div>
                        </li>

                        <li>
                            <a className="text-decoration-none px-3 py-2 d-block" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                                <FontAwesomeIcon className="me-3" icon={faStream}></FontAwesomeIcon>LIVRAISON
                            </a>

                            <div class="collapse" id="collapseExample3">
                                <a href="#" className="text-decoration-none px-3 py-2 d-block">
                                <FontAwesomeIcon className="me-3" icon={faCircleDot}></FontAwesomeIcon>
                                BL
                                </a>
                                <a href="#" className="text-decoration-none px-3 py-2 d-block">
                                <FontAwesomeIcon className="me-3" icon={faCircleDot}></FontAwesomeIcon>
                                PV
                                </a>
                            </div>
                        </li>

                    </ul>
                    <hr className="h-color mx-2" />
                    <ul className="list-unstyled px-2">
                        <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"> <FontAwesomeIcon className="me-3" icon={faSignOut}></FontAwesomeIcon>Calendar</a></li>
                        <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"> <FontAwesomeIcon className="me-3" icon={faSignOut}></FontAwesomeIcon>Kanban</a></li>
                    </ul>
                    <hr className="h-color mx-2" />
                    <ul className="list-unstyled px-2">
                        <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"> <FontAwesomeIcon className="me-3" icon={faSignOut}></FontAwesomeIcon>Logout</a></li>
                    </ul>
                </section>
            </>
        )
    }
}


