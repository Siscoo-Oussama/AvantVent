import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./app/Auth/Login/Login"
import Register from "./app/Auth/Register/Register";
import Home from "./app/pages/Layouts/Home/Home";
import MasterLayout from "./app/pages/MasterLayout/MasterLayout";
import Client from "./app/pages/Layouts/Client/Client";
import Fournisseurs from "./app/pages/Layouts/Fournisseurs/Fournisseurs";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Register" element={<Register/>} />
        <Route path="/Home" element={<Home/>}/>
        
        <Route path="/app" element={<MasterLayout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="PARTENAIRE/Client" element={<Client/>}/>
          <Route path="PARTENAIRE/Fournisseurs" element={<Fournisseurs/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
