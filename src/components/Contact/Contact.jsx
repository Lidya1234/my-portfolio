import React from 'react';
import './Contact.scss';

export default function Contact() {
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src='assets/handshake.png' alt='shake'/>
            </div>
            <div className="right">
                <h2>Contact</h2>
    <form onClick={handleSubmit}>
        <input type='text' placeholder='Email'/>
        <textarea placeholder='Message'></textarea>
        <button type='submit'>Send</button>
    </form>
            </div>
            
        </div>
    )
}
