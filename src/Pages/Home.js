import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../assets/background.jpeg'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='headerContainer' 
      style={{backgroundImage: `url(${BackgroundImage})` }}>
      <h1>Hi <WavingHandIcon sx={{ fontSize: 50 }}/> I'm <span style={{color: '#0538b4'}}>Teresa Guo</span> </h1>
        <h2> Welcome! </h2>
        <Link to='/about'>
        <button> Learn more about who I am </button>
        </Link>
      </div>
    </div>
  );
}

export default Home
