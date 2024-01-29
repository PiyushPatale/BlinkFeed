
// import './App.css';

import React, {} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import AboutMe from './components/AboutMe';
import { Routes, Route } from "react-router-dom";

const App = ()=> {

  const pageSize = 12;
     return (
      <>
        <div>
          <Navbar/>
          {/* <News pageSize= {pageSize} country = "in" category = "general"/> */}
              <Routes>
                <Route exact path="/" element={<News key={"Home"} pageSize= {pageSize} country = "in" category = 'Home'/>} />
                <Route exact path="/entertainment" element={<News key={"Entertainment"} pageSize= {pageSize} country = "in" category = "Entertainment"/>} />
                <Route exact path="/business" element={<News key={"Business"} pageSize= {pageSize} country = "in" category = "Business"/>} />
                <Route exact path="/general" element={<News key={"General"} pageSize= {pageSize} country = "in" category = "General"/>} />
                <Route exact path="/health" element={<News key={"Health"} pageSize= {pageSize} country = "in" category = "Health"/>} />
                <Route exact path="/science" element={<News key={"Science"} pageSize= {pageSize} country = "in" category = "Science"/>} />
                <Route exact path="/sports" element={<News key={"Sports"} pageSize= {pageSize} country = "in" category = "Sports"/>} />
                <Route exact path="/technology" element={<News key={"Technology"} pageSize= {pageSize} country = "in" category = "Technology"/>} />
                <Route exact path="/about" element={<AboutMe key={"about"}/>} />
                
              </Routes>
        </div>
      </>
    )
  
}

export default App