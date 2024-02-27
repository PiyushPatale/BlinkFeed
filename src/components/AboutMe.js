// AboutMe.js

import React, { useRef }  from 'react';
import "./AboutMe.css";
import emailjs from '@emailjs/browser';

const AboutMe = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2sqsudl', 'template_6rwof6r', form.current, {
        publicKey: 'Qh7b3V2qyOJrBz7cd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          alert('Message sent successfully!');

          setTimeout(() => {
            if (document.querySelector('.alert')) {
                document.querySelector('.alert').close();
            }
          }, 2000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      };
  return (
    <>
    <div className='containerA' style={{backgroundColor: 'aliceblue' ,fontSize:'1.2rem' , margin:'4px' }}>
      <h1 className = "text-center" style={{marginTop: "50px" , color:"black" , fontFamily: 'sans-serif'}}>Welcome to BlinkFeed !</h1>

      <p className = "pA">
        Introducing <strong>BlinkFeed</strong> - not just a news app, it's
        an experience. Designed with React, this app provides a sleek and
        intuitive interface for users to stay informed about the latest
        happenings around the world.
      </p>
      
      <div style={{
        backgroundColor:"#c9ffff", borderRadius:"20px", padding:"10px" , paddingLeft:"50px", border: "1px solid black"
      }} className="key">
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
      </div>
      
      <div style={{ marginTop:"25px" ,backgroundColor:"#c9ffff", borderRadius:"20px", padding:"10px" , paddingLeft:"60px", border: "1px solid black" 
      }} className="key">
        <h1 className = "h2A" style={{textAlign:'center'}}>Tech Stack</h1>
        <ul>
          <li>
            <strong>Frontend :</strong> React, JavaScript, HTML, CSS, BootStrap
          </li>
          <li>
            <strong>Backend :</strong> Utilizing APIs for real-time data
          </li>
        </ul>
      </div>

      <h1 className = "text-center" style={{marginTop: "50px" , color:"black" , fontFamily: 'sans-serif'}}>About Me</h1>

      <p className = "pA" style={{margin: '20px', fontSize:'1.2rem'}}>
        Hello there! I'm Piyush, a passionate developer with a knack for
        creating intuitive and engaging applications. I specialize in web
        development and have recently embarked on an exciting journey of crafting
        a modern news app.
      </p>

      <div style={{marginTop:"25px" ,backgroundColor:"#c9ffff", borderRadius:"20px", padding:"10px" , paddingLeft:"50px", border: "1px solid black" }}>
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
      </div>

      <div style={{ justifyContent: "center", marginTop: "25px", backgroundColor: "#c9ffff", borderRadius: "20px", padding: "10px", paddingLeft: "50px", border: "1px solid black", textAlign: 'center' }}>
        <h1 className="h2A">Let's Connect!</h1>
        <p className="pA">
            Thank you for exploring my journey in creating BlinkFeed. If you have any questions, feedback, or just want to connect, feel free to reach out. Let's stay connected and make the world a more informed place!
        </p>
        <div className="connectForm">
            <form ref={form} onSubmit={sendEmail} style={{ width: "70%", margin: "auto" }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "15px",
                }} className="field">

                    <div style={{ display: "flex", alignItems:"center", marginBottom: "10px", width:"100%" }}>
                        <label style={{ marginRight: "10px", minWidth: "80px" }}>Name:</label>
                        <input style={{ flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid gray" }} type="text" name="user_name" />
                    </div>

                    <div style={{ display: "flex", alignItems:"center",  marginBottom: "10px", width:"100%" }}>
                        <label style={{ marginRight: "10px", minWidth: "80px" }}>Email:</label>
                        <input style={{ flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid gray" }} type="email" name="user_email" />
                    </div>

                    <div style={{ display:"flex", marginBottom: "10px", width:"100%" }}>
                        <label style={{ marginRight: "10px", minWidth: "80px" }}>Message: </label>
                        <textarea style={{ flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid gray", width: "100%" }} name="message" />
                    </div>

                    <input style={{ padding: "8px", borderRadius: "5px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }} type="submit" value="Send" />
                    <div class="visme_d" data-title="Untitled Project" data-url="90x3g7nk-untitled-project" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="20941"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
                </div>
            </form>
        </div>
      </div>

    </div>

      </>
  );
};

export default AboutMe;
