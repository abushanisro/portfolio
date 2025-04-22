import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt='Profile' className='hero-img' />

      <h1>
        <span>Hello, I'm Mohammed Abushan,</span> an Aspiring Product Manager and Full-Stack Developer from India.
      </h1>

      <p>
        I'm passionate about building innovative solutions at the intersection of technology and business. Currently, I'm pursuing entrepreneurship at the Institute of Venture Building while collaborating on impactful projects that bridge the gap between creativity and code.
      </p>

      <div className="hero-action">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          <div className="hero-connect">Let's Connect</div>
        </AnchorLink>
        <div className="hero-resume">View My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
