import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import Footer from '../Components/Footer';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CoffeeIcon from '@mui/icons-material/Coffee';
import '../styles/Contact.css'


function Contact() {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Send Message');

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          'service_un42sxu',
         'template_0yedikx',
          form.current, {
          publicKey: 'XyXt7ETINrAZCS2QN',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setButtonText('Sent!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <div className='container'>
     <div className='contact'>
        <div className='leftSide'>
            <div className='iconContainer'>
            <Diversity3Icon style={{ color: 'white', marginTop: 150}} />
            </div>
        </div>

        <div className='rightSide'>
            <h1>Let's <span style={{color: '#ffa402'}}>Connect</span>! <CoffeeIcon sx={{ fontSize: 42 }}/> </h1> 
            <h2> Send me a message and I'll contact you!</h2>

            <form ref={form} onSubmit={sendEmail}>

                <label htmlFor='name' >Name</label>
                <input name='name' placeholder='Your name...' text required/>

                <label htmlFor='email' >Email</label>
                <input name='email' placeholder='Your email...' type='email' text required/>

                <label htmlFor='country' >Country</label>
                <input name='country' placeholder='Your country...' text/>

                <label htmlFor='message' >Message</label>
                <textarea style={{marginTop: 1}} rows={7} placeholder='Write something to me...' 
                    name='message'>
                </textarea>

                <button type='submit' className={buttonText === 'Sent!' ? 'sentButton' : 'defaultButton'}>{buttonText}</button>

            </form>
        </div>
    </div>
    <div className='footer'>
    <Footer />
    </div>
    </div>
  )
}

export default Contact
