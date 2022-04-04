import React from "react";
import './About.css'
import foto from '../../assets/FotodePerfil.jpg.jpeg'

export default function About(){


    return(
        <div className="about_container">
            <div className="container_card_about">
                <div className="foto_about">
                    <img id="foto_perfil" src={foto}/>
                </div>
                <a className="about_txt">
                    Hi, my entire name is David Murga Pereyra and I'm a Full Stack Developer (React, Node).
                    I've been developing algorithms and web interfaces for more than a year and currently I'm searching for 
                    new oppotunities of grow in this market. I have a strong dedication for solving problems and I'm always 
                    excited to provide all my knowledge and talent for every challenge that comes to me. 
                </a>
            </div>
        </div>
    )
}