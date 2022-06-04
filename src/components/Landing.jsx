import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './Landing.css';
import QuantityF from "./QuantityF";
import NavBar from './NavBar';
import video from '../img/M1.mp4';
import img from '../img/M233.png'

const Landing =()=>{

    return(
      
    <div className="Hero image-fluid">
      <div className="bgColor">
      {/* <script>
    document.getElementById('vid').play();
</script>
<div className="center">
      <video id="myVideo" poster={img}  muted loop autoplay="autoplay" >
       <source src={video} type="video/mp4"/>
       </video></div> */}

      <div className="">
            <div class="container">
              <div class="row row1 justify-content-around">
               <div class="col-4 firstcol1">
               <div><QuantityF/></div>
                </div>
                <div><NavBar/></div>
              </div>
            </div>
     </div>
    </div>
  </div>
    );
  
  
  
  
  }
  
  
  export default Landing;