import React from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cfd9c3cc-dbbf-4b52-bab9-010413f5c515");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

  };


  return (
    <div id = 'contact' className='contact'>
<div className="contact-tittle">
    <h1>Get in Touch</h1>
    </div>
    <div className="contact-section">
        <div className="contact-left">
       <h1>Lets Talk</h1> 
       <p>I am currently avilable on </p>
       <div className="contact-details">
        <div className="contact-detail">
            <img src={mail_icon} alt=""/>
            <p>abushan2027ug@buildwithivb.com</p>        
            
        </div>
        <div className="contact-detail">
            <img src={call_icon} alt=""/><p>+91 9360216324</p>
            
            </div>
            <div className="contact-detail">
            <img src={location_icon} alt=""/><p>Chennai, India</p>
            </div>
       </div>
       </div>
       <form  onSubmit ={onSubmit} className="contact-right">
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Your Name' name ='name'/>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Your Email' name ='email'/>
        <label htmlFor="message">Write your Message here</label>
        <textarea name="message" rows="8" placeholder='Your Message'></textarea>
        <button type = 'submit' className="contact-submit">Submit now</button>

       </form>
        </div>      
    </div>
  )
}

export default Contact
