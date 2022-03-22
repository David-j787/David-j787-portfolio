import React from 'react';
import './NavBar.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import react from '../../assets/react.png';
import node from '../../assets/node.png';


export default function NavBar(){
    return(
        <nav className='contenedor_nav'>
            <div>
                <a id='name'>David Pereyra</a>
                <a className='info_icons'><LocalPhoneIcon fontSize='small'/></a>
                <a className='info'>+54 388-5968905</a>
                <a className='info_icons'><EmailIcon fontSize='small'/></a>
                <a className='info'>davidpatejo@gmail.com</a>
                <a className='info_icons'><FmdGoodIcon fontSize='small'/></a>
                <a className='info'>Jujuy, Argentina</a>
                <a></a>
            </div>
            <div>
                <img className='icons_tec' src={react}/>
                <img className='icons_tec' src={node}/>
            </div>
        </nav>
    )
}