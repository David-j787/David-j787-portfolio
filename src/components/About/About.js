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
                    Hola mi nombre completo es David Murga Pereyra y soy Full Stack Web Developer (React - Node).
                    He estado desarrollando algoritmos e interfaces web por más de un año y actualmente estoy buscando crecer
                    profesionalmente en el rubro. Tengo una fuerte inclinación a resolver problemas y a proveer de todo 
                    mi talento para ser un gran aporte en todos los desafíos que se me propongan. 
                </a>
            </div>
        </div>
    )
}