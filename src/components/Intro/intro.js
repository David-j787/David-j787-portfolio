import React, { useEffect, useRef } from 'react';
import { init } from 'ityped'
import "./intro.css";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Full Stack Developer']
        })
    },[]);

    return (
        <div className='intro_container'>
            
            <div className="right">
                <div className="wrapper">
                    <h2>Hello there! my name is</h2>
                    <h1>David Pereyra</h1>
                    <h3>And I'm: <span ref={textRef}></span></h3>
                    <div class="test"></div>
                </div>
            </div>
            <div className="left">
                <div className="imgContainer"></div>
            </div>
        </div>
    )
}