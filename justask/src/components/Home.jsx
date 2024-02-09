import React from "react";
import {Row} from "antd/dist/antd";
import "../css/home.css";

const home =()=>{
    return(
        
    <div>

        <Row className="Row">
          <img src="src\assets\images\main-headphone.avif" alt="" />
          <h3>HOME</h3>
          <h3>SHOP</h3>   
          <h3>CART</h3> 
          <h3>CONTECT US</h3> 
          <h3>Profile</h3>        
            
        </Row>
        
    </div>
    );
}
export default home;