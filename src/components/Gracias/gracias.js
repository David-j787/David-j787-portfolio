import React from "react";
import conv from "../../assets/dialogo.png"
import "./gracias.css"

export default function Gracias(){
    return(
        <div className="container_gracias">
            <img className="img_gracias" src={conv}/>
            <h1 className="txt_gracias">Thanks for watching!</h1>
        </div>
    )
}