import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import web from "./images/honda-logo-1700x1150.png"
import "./App.css"
const Navbar=()=>{
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container-fluid">
    <img src={web} alt="Honda" width={70} height={40}></img>
    <a className="navbar-brand ms-3" href="https://global.honda" style={{fontWeight:"bold",fontSize:30, color:"#CCCCCC"}}>Honda Civic</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto me-5">
        <a className="nav-link  me-3" style={{fontSize:20,color:"white"}} aria-current="page" href="https://global.honda">Home</a>
        <a className="nav-link me-3" style={{fontSize:20,color:"#CCCCCC"}} href="https://global.honda">Features</a>
        <a className="nav-link me-3" style={{fontSize:20,color:"#CCCCCC"}} href="https://global.honda">Pricing</a>
        <a className="nav-link me-3" style={{fontSize:20,color:"#CCCCCC"}} href="https://global.honda">Contact</a>
        <button type="button" class="btn btn-light" style={{height:35 ,borderRadius:10,marginTop:9}}>Register</button>
      </div>
    </div>
  </div>
</nav>
    )
}
export default Navbar;