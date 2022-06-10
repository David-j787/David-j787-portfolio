import React, { useState } from 'react';
import './Proyects.css';
import proyects from './../../assets/ProyectsArray.js';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Proyects(){
    
    const [currentSlide, setCurrentSlide] = useState(0);

    const HChangeCurrentSlideNext = (e) =>  {
        e.preventDefault();
        if(currentSlide === proyects.length - 1){
            setCurrentSlide(0);
        }else{
            setCurrentSlide(old => old + 1);
        }
    }
    const HChangeCurrentSlideBack = (e) =>  {
        e.preventDefault();
        if(currentSlide === 0){
            setCurrentSlide(proyects.length -1);
        }else{
            setCurrentSlide(old => old - 1);
        }
    }

    let currenProject = proyects[currentSlide];

    return(
        <div className='main_container_proyects'>
            <h1 className='proyects_title'>My Projects</h1>
            <div className='cntainer_proyects'>
            <ArrowBackIosIcon className='icon_row_pointer' sx={{ fontSize: 40 }} onClick={e => HChangeCurrentSlideBack(e)}/>
            {
                <a href={currenProject.href} target='_blank' rel='noreferrer' className='card_container_proyect'>
                    <img className='img_card_proyect' src={currenProject.img}/>
                    <a className='name_card_proyect'>{currenProject.name}</a>
                </a>   
            }
            <ArrowForwardIosIcon className='icon_row_pointer' sx={{ fontSize: 40 }} onClick={e => HChangeCurrentSlideNext(e)}/>
            </div>
        </div>
    )
}