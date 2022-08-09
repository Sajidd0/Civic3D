import React from "react";
import "./App.css"
import {BsFacebook ,BsTwitter,BsGoogle,BsLinkedin,BsInstagram,BsPinterest} from "react-icons/bs"
const footer=()=>{
    return (
        <footer className="page-footer font-small cyan darken-3">


  <div className="container">


    <div className="row">

      
      <div className="col-md-12 py-5">
        <div className=" d-flex justify-content-center">

         
          <a className="fb-ic" href="https://global.honda">
            <i className="white-text me-md-5 me-3" ><BsFacebook color="#CCCCCC" fontSize={50}/> </i>
          </a>
       
          <a className="tw-ic" href="https://global.honda">
            <i className="fab fa-twitter fa-lg white-text me-md-5 me-3 fa-2x"><BsTwitter color="#CCCCCC" fontSize={50}/> </i>
          </a>
    
          <a className="gplus-ic" href="https://global.honda">
            <i className="fab fa-google-plus-g fa-lg white-text me-md-5 me-3 fa-2x"><BsGoogle color="#CCCCCC" fontSize={50}/> </i>
          </a>
        
          <a className="li-ic" href="https://global.honda">
            <i className="fab fa-linkedin-in fa-lg white-text me-md-5 me-3 fa-2x"><BsLinkedin color="#CCCCCC" fontSize={50}/> </i>
          </a>
         
          <a className="ins-ic" href="https://global.honda">
            <i className="fab fa-instagram fa-lg white-text me-md-5 me-3 fa-2x"><BsInstagram color="#CCCCCC" fontSize={50}/> </i>
          </a>
        
          <a className="pin-ic" href="https://global.honda">
            <i className="fab fa-pinterest fa-lg white-text fa-2x"><BsPinterest color="#CCCCCC" fontSize={50}/> </i>
          </a>
        </div>
      </div>
      

    </div>
 

  </div>
 


  <div className="footer-copyright text-center py-3 " style={{color:"#CCCCCC"}}>© 2020 Copyright:
    <a href="https://global.honda"> MDBootstrap.com</a>
  </div>
</footer>
    );
}
export default footer;