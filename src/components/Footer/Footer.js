import React from 'react';
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';


export default function Footer(){

    return(
        <div>
            <div className='main_container_footer'>
                <div id='tec_footer' className='item_footer'>
                    <div className='title_item_footer'>Principales Tecnologías</div>
                    <div>React</div>
                    <div>Javascript</div>
                    <div>Redux</div>
                    <div>Node</div>
                    <div>Express</div>
                </div>
                <div className='item_footer'>
                    <div className='title_item_footer'>Redes</div>
                    <div><LinkedInIcon fontSize='large'/></div>
                    <a className='info_contacto_footer' href="https://www.linkedin.com/in/david-murga-pereyra-5a3254216/" target='_blank' rel='noreferrer'>linkedin.com/</a>
                    <div><GitHubIcon fontSize='large'/></div>
                    <a className='info_contacto_footer' href="https://github.com/David-j787" target='_blank' rel='noreferrer'>github.com/david</a>
                </div>
                <div className='item_footer'>
                    <div className='title_item_footer'>Contáctame</div>
                    <div><EmailIcon fontSize='large'/></div>
                    <a className='info_contacto_footer'>davidpatejo@gmail.com</a>
                    <div><PhoneAndroidIcon fontSize='large'/></div>
                    <a className='info_contacto_footer'>+54 388-5968905</a>
                </div>
            </div>
            <div className='copyright'>
                <a> © Todos los derechos reservados</a>
            </div>

        </div>
    )
}