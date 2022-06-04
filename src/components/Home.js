import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './Home.css';
import QuantityF from "./QuantityF";
import NavBar from './NavBar';
import video from '../img/M1.mp4';
import img from '../img/M233.png'
import InfoF from './InfoF';

const Home =()=>{

    return(
      
    <div className="Hero image-fluid">
      <div className="bgColor">
      <div className="">
            <div class="container">
              <div class="row row1 justify-content-around">
               <div class="col-4 firstcol">
               <div><InfoF/></div>
                </div>
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
  
  
  export default Home;