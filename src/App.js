import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./app/Auth/Login/Login"
import Register from "./app/Auth/Register/Register";
import Home from "./app/pages/Layouts/Home/Home";
import MasterLayout from "./app/pages/MasterLayout/MasterLayout";
import Client from "./app/pages/Layouts/Client/Client";
import Fournisseurs from "./app/pages/Layouts/Fournisseurs/Fournisseurs";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Dashbaord from "./app/pages/Layouts/Dashboard/Dashboard";
import NotFound from "./app/pages/Layouts/NotFound/NotFound";
import AddClinet from "./app/pages/Layouts/Client/AddClient/AddClinet";



axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});





function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/' element={localStorage.getItem('auth_token') ? <Navigate to="/app/Dashbaord" replace /> : <Login />} />
        <Route path='/Register' element={localStorage.getItem('auth_token') ? <Navigate to="/app/Dashbaord" replace /> : <Register />} />
        <Route path='*' element={<NotFound/>}/>
        
        <Route path="/app" element={<MasterLayout/>}>
        <Route path="Dashbaord" element={<Dashbaord/>}/>
          <Route path="" element={<Dashbaord/>}/>
          <Route path="addclient" element={<AddClinet/>}/>
          <Route path="PARTENAIRE/Client" element={<Client/>}/>
          <Route path="PARTENAIRE/Fournisseurs" element={<Fournisseurs/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
