import React from 'react';
import './Navbar.scss';
import { Person, Mail } from '@material-ui/icons';
export default function Navbar() {
    return (
        <div className="navbar active">
            <div className='wrapper'>
                <div className='left'>
                 <a href='#intro' className='logo'>Lidu</a>
                 <div className='itemContainer'>
                     <Person className='icon'/>
                     <span>+256 759149629</span>
                 </div>
                 <div className='itemContainer'>
                     <Mail className='icon'/>
                     <span>lidya94gher@gmail.com</span>
                 </div>
                </div>
                <div className='right'>
                    <div className='hamburger'>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>

                    </div>
                </div>
            </div>
        </div>
    )
}
