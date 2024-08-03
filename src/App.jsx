import React, { useState } from 'react';
import Bg from "./components/main1/main1.jsx";
import Nav from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/hero.jsx";
import Home from "./components/home/home.jsx";
import Contact from "./components/contactus/contact.jsx";
import About from "./components/aboutus/aboutus.jsx";
import Explore from './components/explore/exp.jsx';

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

const App = () => {
  let heroData= [
    {text1: "Dive into", text2: "What you love"},
    {text1: "Indulging", text2: "your passions"},
    {text1: "Give in to", text2: "your passions"},

  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);
  

  return (
    <Router>
      <div>
        
        <Bg playStatus={playStatus} heroCount={heroCount}/>
        <Nav/>
        
        
        {location.pathname === "/home" && (
          <Hero
            setPlayStatus={setPlayStatus}
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
            playStatus={playStatus}
          />
        )}
        
        
        <Routes>
            {location.pathname === "/contact" && (
              <Route path="/contact" element={<Contact />} />
            )}

              {location.pathname === "/about" && (
              <Route path="/about" element={<About />} />
            )}

            {location.pathname === "/explore" && (
              <Route path="/explore" element={<Explore />} />
            )}
        </Routes>
 
      </div>
    </Router>
  );
};

export default App;

