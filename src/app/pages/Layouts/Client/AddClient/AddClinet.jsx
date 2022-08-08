import React, { Component } from "react";
import "./addclient.scss";
import $ from "jquery";
import { useState } from "react";




const AddClient = () => {


    $(document).ready(function () {

        $(document).on('click', '.remove-btn', function () {
            $(this).closest('.main-form1').remove();
        });

        $(document).on('click', '.remove-btn', function () {
            $(this).closest('.main-form2').remove();
        });

        $(document).on('click', '.add-more-form1', function (e) {
            e.preventDefault();
            $('.item-add1').append('<div class="main-form1 mt-3 border-bottom">\
                                <div class="row">\
                                    <div class="col-md-4">\
                                        <div class="form-group mb-2">\
                                            <label for="">Name</label>\
                                            <input type="text" name="name[]" class="form-control" required placeholder="Enter Name">\
                                        </div>\
                                    </div>\
                                    <div class="col-md-4">\
                                        <div class="form-group mb-2">\
                                            <label for="">Phone Number</label>\
                                            <input type="text" name="phone[]" class="form-control" required placeholder="Enter Phone Number">\
                                        </div>\
                                    </div>\
                                    <div class="col-md-3">\
                                    <div class="form-group mb-2">\
                                        <label for="">Eamil</label>\
                                        <input type="text" name="Email[]" class="form-control" required placeholder="Enter Email">\
                                    </div>\
                                </div>\
                                    <div class="col-md-1">\
                                        <div class="form-group mb-2">\
                                            <br>\
                                            <button type="button" class="remove-btn btn btn-danger">Remove</button>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>');
        });


        $(document).on('click', '.add-more-form2', function (e) {
            e.preventDefault();
            $('.item-add2').append('<div class="main-form2 mt-3 border-bottom">\
                                <div class="row">\
                                    <div class="col-md-4">\
                                        <div class="form-group mb-2">\
                                            <label for="">Name</label>\
                                            <input type="text" name="name[]" class="form-control" required placeholder="Enter Name">\
                                        </div>\
                                    </div>\
                                    <div class="col-md-4">\
                                        <div class="form-group mb-2">\
                                            <label for="">Phone Number</label>\
                                            <input type="text" name="phone[]" class="form-control" required placeholder="Enter Phone Number">\
                                        </div>\
                                    </div>\
                                    <div class="col-md-3">\
                                    <div class="form-group mb-2">\
                                        <label for="">Eamil</label>\
                                        <input type="text" name="Email[]" class="form-control" required placeholder="Enter Email">\
                                    </div>\
                                </div>\
                                    <div class="col-md-1">\
                                        <div class="form-group mb-2">\
                                            <br>\
                                            <button type="button" class="remove-btn btn btn-danger">Remove</button>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>');
        });


    });
    const [Loading,SetLoading]=useState(true);

    const [Societe, SetSociete] = useState('');
    const [Telephone, SetTelephone] = useState('');
    const [Adresse, SetAdresse] = useState('');
    const [Email, SetEmail] = useState("");
    const [Ice, SetICE] = useState("");
    const [Site, SetSite] = useState("");

    const [Bc, SetBC] = useState('');
    const [Devis, SetDevis] = useState('');
    const [Attachment, SetAttachment] = useState([]);

    const [Name, SetName] = useState('');
    const [Phone, SetPhone] = useState('');
    const [EmailSupport, SetEmailSupport] = useState('');

    const [Montant, SetMontant] = useState('');
    const [Date, SetDate] = useState('');
    const [Paiement, SetPaiement] = useState('');



    const handleInputSociete = (e) => {
        SetSociete(e.target.value);
    }
    const handleInputTelephone = (e) => {
        SetTelephone(e.target.value);
    }
    const handleInputAdresse = (e) => {
        SetAdresse(e.target.value);
    }
    const handleInputEmail = (e) => {
        SetEmail(e.target.value);
    }
    const handleInputICE = (e) => {
        SetICE(e.target.value);
    }
    const handleInputSite = (e) => {
        SetSite(e.target.value);
    }
    const handleInputName = (e) => {
        SetName(e.target.value);
    }
    const handleInputPhone = (e) => {
        SetPhone(e.target.value);
    }
    const handleInputEmailSupport = (e) => {
        SetEmailSupport(e.target.value);
    }
    const handleInputMontant = (e) => {
        SetMontant(e.target.value);
    }
    const handleInputDate = (e) => {
        SetDate(e.target.value);
    }
    const handleInputPaiement = (e) => {
        SetPaiement(e.target.value);
    }

    const handleInputBC = (e) => {
        SetBC({ image: e.target.files[0] });
    }
    const handleInputDevis = (e) => {
        SetDevis({ image: e.target.files[0] });
    }
    const handleInputAttachment = (e) => {
        SetAttachment({ image: e.target.files[0] });
    }

    return (
        <>
            <section id="AddClient">
                <form>
                    <div className="container">
                        <div className="px-5 py-3 card">
                            <div className="items-add">
                                <button type="submit" class="btn float-end btn-sm btn-add-client">+ Add Client</button>
                            </div>
                            <div className="row">

                                <div className=" col-md-6 py-3">
                                    <label for="">Societe</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="societe" name="societe" onChange={handleInputSociete} value={Societe} />
                                </div>

                                <div className=" col-md-6 py-3">
                                    <label for="">Telephone</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="telephone" 
                                    name="telephone" onChange={handleInputTelephone} value={Telephone}/>
                                </div>
                                <div className=" col-md-6 py-3">
                                    <label for="">Adresse</label>
                                    <input type="text" class="form-control" id="exampleIanputPassword1" placeholder="adresse" 
                                    name="adresse" onChange={handleInputAdresse} value={Adresse}/>
                                </div>
                                <div className=" col-md-6 py-3">
                                    <label for="">Eamil</label>
                                    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="email"
                                    name="email" onChange={handleInputEmail} value={Email}/>
                                </div>
                                <div className=" col-md-6 py-3">
                                    <label for="">ICE</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="ICE" 
                                    name="ice" onChange={handleInputICE} value={Ice}/>
                                </div>
                                <div className=" col-md-6 py-3">
                                    <label for="">SITE</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="SITE" 
                                    name="site" onChange={handleInputSite} value={Site}/>
                                </div>
                                <div className=" col-md-4 py-3">
                                    <label for="">BC</label>
                                    <input type="file" class="btn btn-BC form-control" placeholder="societe"
                                    name="bc" onChange={handleInputBC}/>
                                </div>
                                <div className=" col-md-4 py-3">
                                    <label for="">Devis</label>
                                    <input type="file" class="btn btn-BC form-control" placeholder="societe" 
                                    name="devis" onChange={handleInputDevis}/>
                                </div>
                                <div className=" col-md-4 py-3">
                                    <label for="">Attachment</label>
                                    <input type="file" class="btn btn-BC form-control" placeholder="societe"
                                    name="attachment" onChange={handleInputAttachment} />
                                </div>
                            </div>
                        </div>

                        <div className="px-5 py-3 card">
                            <div className="div ">
                                <a href="javascript:void(0)" class="add-more-form1 float-end btn btn-sm btn-add-item">+ ADD Item</a>
                            </div>
                            <div className="row item-add1">
                                <div className=" col-md-4 py-3">
                                    <label for="">Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Nom" name="name" onChange={handleInputName} value={Name}/>
                                </div>
                                <div className=" col-md-4 py-3">
                                    <label for="">Phone Number</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Phone Number" 
                                    name="phone" onChange={handleInputPhone} value={Phone}/>
                                </div>
                                <div className=" col-md-3 py-3">
                                    <label for="">Email</label>
                                    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Enter Email" 
                                    name="email" onChange={handleInputEmailSupport} value={EmailSupport}/>
                                </div>

                            </div>
                        </div>


                        <div className="px-5 py-3 card">
                            <div className="div ">
                                <a href="javascript:void(0)" class="add-more-form2 float-end btn btn-add-item btn-sm">+ ADD Item</a>
                            </div>
                            <div className="row item-add2">
                                <div className=" col-md-4 py-3">
                                    <label for="">Montant</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Montant" name="montant" onChange={handleInputMontant} value={Montant}/>
                                </div>
                                <div className=" col-md-4 py-3">
                                    <label for="">Date</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Date" name="date" onChange={handleInputDate} value={Date}/>
                                </div>
                                <div className=" col-md-3 py-3">
                                    <label for="">Paiement</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Paiement" name="paiement" onChange={handleInputPaiement} value={Paiement}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>

    )
}


export default AddClient;