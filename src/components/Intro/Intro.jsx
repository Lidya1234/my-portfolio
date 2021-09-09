import React from 'react';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';
import './Intro.scss'

export default function Intro() {
    const textref = useRef();
    useEffect(() =>{
        init(textref.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['HTML&CSS', 'JAVASCRIPT,REACT&REDUX', 'RUBY&ROR', 'JAVA&PHP'],
        })
    },[])
    return (
        <div className='intro' id='intro'>
            <div className='left'>
           <div className="imgContainer">
               <img src='assets/Lidu.png' alt='myimg'/>
           </div>
            </div>
            <div  className='right'>
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Lidya Ghere</h1>
                    <h3>Stacks<span ref={textref}></span></h3>
                </div>
                <a href='#portfolio'>
                    <img src='assets/down.png' alt='down'/>
                </a>

            </div>
            
        </div>
    )
}
