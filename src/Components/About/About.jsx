import React, { useState } from 'react';
import './About.css';
import profile_img from '../../assets/profile_img.svg';
import {
  FaReact, FaHtml5, FaCss3Alt, FaTrello
} from 'react-icons/fa';
import {
  SiJavascript, SiNodedotjs, SiMixpanel, SiGoogleanalytics, SiNotion, SiCanva, SiJira, SiFigma
} from 'react-icons/si';
import { MdSmartToy } from 'react-icons/md';

const iconData = [
  { Icon: FaHtml5, color: '#E44D26' },
  { Icon: FaCss3Alt, color: '#1572B6' },
  { Icon: SiJavascript, color: '#F7DF1E' },
  { Icon: FaReact, color: '#61DBFB' },
  { Icon: SiNodedotjs, color: '#3C873A' },
  { Icon: SiFigma, color: '#F24E1E' },
  { Icon: SiNotion, color: '#000000' },
  { Icon: SiJira, color: '#0052CC' },
  { Icon: SiGoogleanalytics, color: '#F4B400' },
  { Icon: SiMixpanel, color: '#A970FF' },
  { Icon: SiCanva, color: '#00C4CC' },
  { Icon: FaTrello, color: '#0079BF' },
  { Icon: MdSmartToy, color: '#A0C' }, // AI purple shade
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I'm an experimental and hands-on learner with a passion for full-stack development,
              constantly building real-world projects and learning by doing.
            </p>
            <p>
              My passion lies in solving real problems through scalable tech, especially in startup
              ecosystems. I'm growing my skills every day and actively contributing to meaningful ventures.
            </p>
          </div>

          <div className="about-skills">
            {[
              { label: 'HTML & CSS', width: '70%' },
              { label: 'React JS', width: '50%' },
              { label: 'JavaScript', width: '60%' },
              { label: 'Node JS', width: '30%' },
            ].map((skill, index) => (
              <div className="about-skill" key={index}>
                <p>{skill.label}</p>
                <hr className="animated-skillbar" style={{ '--target-width': skill.width }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-icons">
        {iconData.map(({ Icon, color }, i) => (
          <Icon
            key={i}
            size={50} // Icon size increased for better visibility
            onMouseEnter={() => setActiveIndex(i)} // Show color on hover
            onMouseLeave={() => setActiveIndex(null)} // Reset color when not hovering
            color={activeIndex === i ? color : '#00C853'}
            style={{
              cursor: 'pointer',
              transition: 'color 0.3s ease',
              margin: '10px', // Added margin for spacing
            }}
          />
        ))}
      </div>
      <div className="about-achievements">
        {[
          { count: '2+', label: 'Years of Experience' },
          { count: '5+', label: 'Completed Projects' },
          { count: '2', label: 'Hackathons Winner' },
          { count: '1', label: 'Startup in Progress' },
        ].map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="about-achievement">
              <h1>{item.count}</h1>
              <p>{item.label}</p>
            </div>
            {idx < 3 && <hr />}
          </React.Fragment>
        ))}
      </div>

      {/* ===== Tech Stack Icons Section ===== */}
  
    </section>
  );
};

export default About;
