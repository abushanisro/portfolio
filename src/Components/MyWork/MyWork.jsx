import React from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <div className="title-wrapper">
          <h1>My Work</h1>
        </div>
      </div>

      <div className="mywork-container"> 
        {mywork_data.map((work, index) => (
          <div key={index} className="work-item">
            <img src={work.w_img} alt={`work-${index}`} />
          </div>
        ))}
      </div>

      {/* ✅ WRAPPING THE WHOLE DIV WITH <a> */}
      <a
        href="https://www.instagram.com/lifeatabushan"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="arrow" style={{ marginLeft: '8px' }} />
        </div>
      </a>
    </div>
  );
};

export default MyWork;
