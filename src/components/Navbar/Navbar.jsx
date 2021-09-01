import React from 'react';
import './Navbar.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Mail } from '@material-ui/icons';
export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className='wrapper'>
                <div className='left'>
                 <a href='#intro' className='logo'>Lidu</a>
                 <div className='itemContainer'>
                 <a href="https://github.com/Lidya1234"  target="_blank" rel='noreferrer'><GitHubIcon className='icon'/> </a>  
                 </div>
              
                 <div className='itemContainer'>
                 <a href="https://www.linkedin.com/in/lidya-ghebreigziabher/" target="_blank" rel='noreferrer'>< LinkedInIcon className='icon'/> </a>
                 </div>
                 <div className='itemContainer'>
                 <a href="https://twitter.com/Lidya42676629" target="_blank" rel='noreferrer'><TwitterIcon className='icon'/></a>
                 </div>
                 <div className='itemContainer'>
                     <Mail className='icon'/>
                     <span>lidya94gher@gmail.com</span>
                 </div>
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>

                    </div>
                </div>
            </div>
        </div>
    )
}
