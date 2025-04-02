import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='Navigation'>
      <div className='Logo'>Logo</div>
      <div className='Nav-links'>
        <a href='' className='NavBtn'>Home</a>
        <a href='' className='NavBtn'>About Me</a>
        <a href='' className='NavBtn'>Portfolio</a>
        <a href='' className='NavBtn'>Get in touch</a>
      </div>
    </div>
  )
}

export default Nav