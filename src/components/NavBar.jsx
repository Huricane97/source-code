import React from 'react';
import './NavBar.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaDiscord} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';



const NavBar=()=>{

    return(

        <div className="container"><nav class="navbar navbar-expand-lg bg-transparent">
        {/* <div class="col Col11 " id="navbarText">
          <ul class="navbar-nav mr-auto justify-content-center">
            <li class="nav-item">
              <a href="https://maecenaslab.com/"><img src={img} height={"120px"} onClick={"https://maecenaslab.com/"}></img></a>
            </li>
          </ul>
        </div> */}
        <div className="col Col12">
        <ul class="navbar-nav mr-auto justify-content-center">
            <li class="nav-item Col111">
            <a href="https://discord.gg/karafuru"> <h2 className='ColorNew'><FaDiscord/> </h2></a>
            </li>
            <li class="nav-item Col111">
            <a href="https://twitter.com/karafurunft"> <h2 className='ColorNew'><FaTwitter/></h2></a>
            </li>
            <li class="nav-item Col111">
            <a href="https://facebook.com"> <h2 className='ColorNew'><FaFacebook/></h2></a>
      
            </li>
            <li class="nav-item Col111">
            <a href="https://instagram.com/karafuru"> <h2 className='ColorNew'><FaInstagram/></h2></a>
      
            </li>
          </ul>
        </div>
      </nav></div>
    );
}




export default NavBar;