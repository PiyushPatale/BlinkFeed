import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import AboutMe from './components/AboutMe';
import { Routes, Route } from "react-router-dom";


const App = ()=> {
  const [text, setText] = useState('');

  const pageSize = 12;
     return (
      <>
        <div>
          <Navbar setText={setText}/>
              <Routes>
                <Route exact path="/" element={<News text={text} key={"Home"} pageSize= {pageSize} country = "in" category = 'General'/>} />
                <Route exact path="/entertainment" element={<News text={text} key={"Entertainment"} pageSize= {pageSize} country = "in" category = "Entertainment"/>} />
                <Route exact path="/business" element={<News text={text} key={"Business"} pageSize= {pageSize} country = "in" category = "Business"/>} />
                <Route exact path="/general" element={<News text={text} key={"General"} pageSize= {pageSize} country = "in" category = "General"/>} />
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