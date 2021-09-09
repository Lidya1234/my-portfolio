import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';

export default function Contact() {
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_7l9sxh3','template_re9xp1m', e.target, 'user_CTKYvDQP1udBmu85MlM1T').then(res=>console.log(res)).catch(err=>console.log(err));
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src='assets/handshake.png' alt='shake'/>
            </div>
            <div className="right">
                <h2>Contact</h2>
    <form onSubmit={handleSubmit} >
        <input type='text' placeholder='Email' name='email'/>
        <textarea placeholder='Message' name='message'></textarea>
        <input type='submit' value='Send' className='button'></input>
    </form>
            </div>
            
        </div>
    )
}
