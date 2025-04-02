import React from 'react'
import Favicon from 'react-favicon' //For icons
import './Home.css'
import Nav from './Nav'

const Home = () => {
  return (
    <>
    <div className='Home-container'>
      <div className='Hero-Section'>
        <Nav/>
        <div className='Home-containter-left'>
          <span className='Intro1'>Hello Word! I'm </span><span className='Intro2'>Neema Ogao</span>
          <p className='Welcometext'>Welcome to my digital space.</p>
          <div className='WelcomeBtns'>
            <button className='Projects'>Projects</button>
            <button className='contacts'>Contacts</button>
          </div>
        </div>
        
        <div className='Home-containter-right'>
          right side animation
        </div>
      </div>
      <div className='AboutMe-Section'>
        <div className='About-Title'>
          <h1 className='AboutMe'>ABOUT ME</h1>
          <h4 className='About-Description'>Transforming ideas into digital solutions.</h4>
        </div>

        <div className='About-Content'>
          <p className='About-Description'> My name is Neema Ogao, and this is my personal portfolio; 
            a garden where innovation and creativity grow. Here's a few things about me:</p>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Home