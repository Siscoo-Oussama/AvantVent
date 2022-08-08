import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./app/Auth/Login/Login"
import Register from "./app/Auth/Register/Register";
import Home from "./app/pages/Layouts/Home/Home";
import MasterLayout from "./app/pages/MasterLayout/MasterLayout";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Register" element={<Register/>} />
        <Route path="/Home" element={<Home/>}/>
        
        <Route path="/app" element={<MasterLayout/>}>
          <Route path="" element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
