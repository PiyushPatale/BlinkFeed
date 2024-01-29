// AboutMe.js

import React from 'react';
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div className='containerA' style={{backgroundColor: 'aliceblue' ,fontSize:'1.2rem' , margin:'4px' }}>
      <h1 className = "text-center" style={{marginTop: "50px" , color:"black" , fontFamily: 'sans-serif'}}>Welcome to BlinkFeed !</h1>
      <p className = "pA" style={{margin: '20px', fontSize:'1.2rem'}}>
        Hello there! I'm Piyush, a passionate developer with a knack for
        creating intuitive and engaging applications. I specialize in web
        development and have recently embarked on an exciting journey of crafting
        a modern news app.
      </p>
      <hr />

      <h1 className = "h2A" style={{textAlign:'center'}}> My Expertise</h1>
      <ul className = "ulA" style={{fontSize:'1.2rem'}}>
        <li className = "liA">
          <strong>React Enthusiast:</strong> I thrive in the world of React,
          utilizing its powerful features to build dynamic and responsive user
          interfaces.
        </li>
        <li className = "liA">
          <strong>API Integration Maestro:</strong> Seamlessly integrating data
          is my forte. I have successfully harnessed the power of APIs to bring
          real-time news updates directly to your fingertips.
        </li>
      </ul>

    <hr/>

      <h1 className = "h2A" style={{textAlign:'center'}} >About BlinkFeed</h1>
      <p className = "pA">
        Introducing <strong>BlinkFeed</strong> - not just a news app; it's
        an experience. Designed with React, this app provides a sleek and
        intuitive interface for users to stay informed about the latest
        happenings around the world.
      </p>

    <hr />

      <h1 className = "h3A" style={{textAlign:'center'}}>Key Features </h1>
      <ol className = "olA">
        <li className = "liA">
          <strong>User-Friendly Design:</strong> A clean and user-centric design
          ensures a smooth navigation experience.
        </li>
        <li className = "liA">
          <strong>Real-Time Updates:</strong> Thanks to News API
          integration, the app fetches the latest news, keeping users in the
          loop.
        </li>
        <li className = "liA">
          <strong>Customizable Preferences:</strong> Tailor your news feed by
          selecting topics of interest, ensuring a personalized news experience.
        </li>
      </ol>

     <hr /> 

      <h1 className = "h2A" style={{textAlign:'center'}}>Tech Stack</h1>
      <p className = "pA">
        <strong>Frontend :</strong> React, JavaScript, HTML, CSS, BootStrap
        <br />
        <strong>Backend :</strong> Utilizing APIs for real-time data
      </p>
    <hr />
      <h1 className = "h2A" style={{textAlign:'center'}}>Let's Connect!</h1>
      <p className = "pA">
        Thank you for exploring my journey in creating BlinkFeed. If you have
        any questions, feedback, or just want to connect, feel free to reach
        out. Let's stay connected and make the world a more informed place!
      </p>
      {/* Add your contact information or social media links here */}
    </div>
  );
};

export default AboutMe;
