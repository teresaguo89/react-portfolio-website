import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
      <div className='socialmedia'>
      <Link to={'https://www.instagram.com/teresaguo_?igsh=MWw2bnNkejdkOG1oYQ%3D%3D&utm_source=qr' } target='_blank'> 
        
        <button><InstagramIcon/> </button>  
        </Link>
      
        <Link to={'https://www.facebook.com/teresa.guo.54?mibextid=LQQJ4d'} target='_blank'> 
        
        <button><FacebookIcon/> </button>  
        </Link>
        <Link to={'https://www.linkedin.com/in/teresa-guo-605708204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'} target='_blank'> 
        
        <button><LinkedInIcon/> </button>  
        </Link>
        
      </div>
      </div>

  );
}

export default Footer
