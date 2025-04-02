import React from 'react';
import './Landing.css';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigate('/Home');
        },7000);
        return() => clearTimeout(timer);
    },[navigate]);
  return (
    <div className="landing-container">
      <div className="text-container">
        <span className="welcome-text">Welcome to my</span>
        <span className="portfolio-text">Personal Portfolio</span>
      </div>
      <div className='bg'></div>
    </div>
  );
};

export default Landing;
