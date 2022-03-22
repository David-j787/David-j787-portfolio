import React from 'react';
import './Proyects.css';
import proyects from './../../assets/ProyectsArray.js';


export default function Proyects(){


    return(
        <div className='main_cntainer_proyects'>
            <h1 className='proyects_title'>Mis proyectos</h1>
            {
                proyects.map(p => {
                    return(
                        <a href={p.href} target='_blank' rel='noreferrer' className='card_container_proyect'>
                            <img className='img_card_proyect' src={p.img}/>
                            <a className='name_card_proyect'>{p.name}</a>
                        </a>
                    )
                })
            }
            <h1>1</h1>
        </div>
    )
}