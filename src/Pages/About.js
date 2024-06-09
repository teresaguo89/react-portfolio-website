import React from 'react'
import Teresaphoto from "../assets/Teresa.jpeg"
import '../styles/About.css'
import { Link } from 'react-router-dom'

function About() {
  return (

    <div className='container'>
    <div className='about'>
        
        <div className='photoSelf'
        style={{backgroundImage: `url(${Teresaphoto})`}}>
        </div>
          <div className='aboutTitle'>
          <h1>About Me</h1>
          </div>

          <div className='aboutDescription'>
          <h2>
          I'm currently studying <span style={{color: '#ffa402'}}> Computing and Software Systems </span>
          at the <span style={{color: '#ffa402'}}>University of Melbourne</span>. 
          </h2>
          <h2>
          I'm someone who is very <span style={{color: '#ffa402'}}>passionate </span>  
           about learning <span style={{color: '#ffa402'}}>new tech</span>.
          </h2>
            <div className='aboutList'>
            <h2>
            <span style={{color: '#e8aee5'}}>My Interests:</span> 
            </h2>
            <p>
              - Yoga, Tennis, Filmmaking, Music
            </p>
            <p>
              - Learning and building with new programming languages. 
            </p>
            <p>
              - Keeping up to date and reading about the ever-changing technology world.
            </p>
            <p>
              - Meeting and working with diverse people.
            </p>
            <h2>
            <span style={{color: '#e8aee5'}}>My Current Goals: </span>
            </h2>
            <p>
              - Continuously learn and put learning into practice. 
            </p>
            <p>
              - Work on impactful projects with others in a diverse team. 
            </p>
            <p>
              - Bring positive change to the wider community with software!
            </p>
            <div className='paragraph'>
            <h2>
            What is Important to Me: 
            </h2>
            
            <h4>
            Mutually sharing knowledge, partaking in active discussions, and working
            collaboratively with peers are very important to me. These activities not
            only enhance my understanding of complex topics but also foster a sense of 
            community and collective growth. I truly believe innovative solutions come from 
            engaging with others and gaining diverse perspectives.  
            </h4>
            </div>

            </div>
            
            <div className='contactButton'>
            <Link to='/contact'>
            <button> Say Hi! </button>
            </Link>
            </div>
          </div> 
    </div>   
    </div>



  )
}

export default About
