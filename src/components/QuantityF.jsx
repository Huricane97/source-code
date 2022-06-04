import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { useState, useEffect } from "react";
import './Quantity.css'
import Web3 from "web3";
import abi from "./new.json";
import img from '../img/BOTON3.png';
import img1 from '../img/red.gif';
import detectEthereumProvider from '@metamask/detect-provider';
require("dotenv").config();


const { REACT_APP_CONTRACT_ADDRESS } = process.env;
let price
var totalnfts=500;
var remainingnfts=100;
var price1;
const SELECTEDNETWORKNAME = "Ethereum Maintnet";
const SELECTEDNETWORK = "1";

const QuantityF = () => {
  

  // const [price,setPrice] = useState();
  const [counter, setCounter]= useState(1);
  const [iswhitelist,setwhitelist]=useState(false);
  const [errormsg,seterrormsg]=useState(false);
    const [connectedAccount,setConnectedAccount] = useState("Connect Dapp");
    // const [contract, setContract] = useState(null);
    // const [totalSupply, setTotalSupply] = useState(83);
  
  price=0.01;
  remainingnfts=totalnfts-counter;
  price1=price * counter;
    
    useEffect(async () => {
      window.web3 = new Web3(window.ethereum);
      // const ct = new web3.eth.Contract(abi, contractaddress);
      const web3 = window.web3;
      const contractaddress = REACT_APP_CONTRACT_ADDRESS;
      new web3.eth.Contract(abi, contractaddress);
      // let current = await ct.methods.totalSupply().call();
      // setTotalSupply(current);
    }, []);
    
    async function loadWeb3() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const web3 = window.web3;
        if(await web3.eth.net.getId() == SELECTEDNETWORK){
          // Meta Mask Connected Account Address
          let metaMaskAccount = await web3.eth.getAccounts();
          metaMaskAccount = metaMaskAccount[0];
          let splitedMetaMaskAddress;
          console.log("contract");
          if (metaMaskAccount) {
            splitedMetaMaskAddress =
              metaMaskAccount[0].substring(0, 6) +
              "......" +
              metaMaskAccount[0].substring(
                metaMaskAccount[0].length - 4,
                metaMaskAccount[0].length
              );
          }
          setConnectedAccount(splitedMetaMaskAddress);
      
            // // creating contract instance
            const contractaddress = REACT_APP_CONTRACT_ADDRESS;
            const ct = new web3.eth.Contract(abi, contractaddress);
            
            price = await ct.methods.MINT_PRICE().call();
            console.log(price);

            price = price * counter;
            
            // setPrice(price);

            let current = await ct.methods.totalSupply().call();
            // setTotalSupply(current);
            if (Number(current) === 500) {
              setConnectedAccount("Sold out");
            }
            await ct.methods
              .mint(counter)
              .send({ from: metaMaskAccount, value: price });
            current = await ct.methods.totalSupply().call();
            setCounter(1);
            remainingnfts=totalnfts-counter;
            price1=price * counter;
          }
          else{
            alert("Please select Ethereum Mainnet in Metamask");
          }
        } else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider);
        } else {
          window.alert(
            "Non-Polygon browser detected. You should consider trying MetaMask!"
          );
        }
      }

      const increment=()=>{ 
        if(counter>=10){
          setCounter(10);
        }
        else{
          setCounter(counter+1);
          
        }
        price=0.01;
        remainingnfts=totalnfts-counter;
        price1=price * counter;
      }
      const decrement=()=>{
        if (counter<=1){
          setCounter(1);
        }
        else{
          setCounter(counter-1);
        }
        price=0.01;
        remainingnfts=totalnfts-counter;
        price1 =price * counter;
        
      }
      
    async function whitelistchk(){
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const web3 = window.web3;
        // Meta Mask Connected Account Address
        let metaMaskAccount = await web3.eth.getAccounts();
        metaMaskAccount = metaMaskAccount[0];
        let splitedMetaMaskAddress;
        console.log("contract");
        if (metaMaskAccount) {
          splitedMetaMaskAddress =
            metaMaskAccount[0].substring(0, 6) +
            "......" +
            metaMaskAccount[0].substring(
              metaMaskAccount[0].length - 4,
              metaMaskAccount[0].length
            );
        }
      
      // console.log(metaMaskAccount);
      // let lengthofwl= whitelistaddress.length;
      // console.log(lengthofwl);
      // for(var i=0;i<lengthofwl;i++){
      //   // console.log(whitelistaddress[i]);
      //   if(metaMaskAccount===whitelistaddress[i]){
      //     setwhitelist(true);
      //   }

      // }
      // seterrormsg(true);
          
      }

    }


return(
  <div className="container">
    <div className="new"><img src={img1} width={"30px"}></img></div>
  <div>
 <div className="FontFam"><h3>PRESALE IS LIVE</h3> </div>

  <div class="container container121">
  <div class="row row121">
    <div class="col col1">
    <img className="smallimg" src={img} width={"130px"}></img>
    </div>
    <div class="col col2">
    <p className="styl">Price Per Mint</p>
    <h5 className="styl1">0.01 Eth Each</h5>
    </div>
  </div>
  </div>


  <div className="NewDiv">  
  
  <div class="row row121">
    <div class="col col121">
    <div className="button1"><button onClick={decrement}>-</button></div>
  <div className="FontFam1 "><h4>{counter}</h4></div> 
  <div className="button2"><button onClick={increment}>+</button></div>
    </div>
    <div class="col col122">
    <div class="selection-max">
          <span class="fs-22">
          <b><span class="selection-amount" id="box_right-selection-amount">10</span> Max</b>
          </span>
       </div>
    </div>
  </div>
  </div>
  <hr/>
  <div class="total padding-10 border-bottom-1 border-top-1 margin-bottom-20">
          <span >Total</span>
           <span class="fs-22">
         <b><span class="total-amount" id="box_right-total-amount">{price1}</span> ETH</b>
       </span>
  </div>
  <hr/>
  <button className="button mintbutton" onClick={() => {loadWeb3();}}>MINT</button>
  <hr/>
  <div><h5>{remainingnfts}/{totalnfts}</h5></div>
  </div>
</div>

);
}


export default QuantityF;