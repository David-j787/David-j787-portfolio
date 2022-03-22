import React from "react";
import './About.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import cv from '../../assets/CVDavidMurgaPereyra.pdf'


export default function AboutSocial(){


    return(
        <div className="social_about_container">
            <a href="https://github.com/David-j787" target='_blank' rel='noreferrer'>
                <GitHubIcon fontSize="large" className="size_icons_about" />
            </a>
            <a href={cv} download target='_blank' rel='noreferrer'>
                <InsertDriveFileIcon fontSize="large" className="size_icons_about" />
            </a>
        </div>
    )
}


