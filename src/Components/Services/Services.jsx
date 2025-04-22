import React from 'react';
import './Services.css';
import Services_Data from '../../assets/services_data';
import arrow from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <div className="title-wrapper">
          <h1>My Services</h1>
        </div>
      </div>

      <div className="Services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format" style={{ '--i': index }}>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
