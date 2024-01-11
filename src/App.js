import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Sectionfour from './Sectionfour';
import Sectionone from './Sectionone';
import Sectionthree from './Sectionthree';
import Sectiontwo from './Sectiontwo';
import { Topnavbar,SectionTHREETOP } from './Styled';
import React, { useRef } from 'react';

function App() {

  return (
    <div>
      <Topnavbar>
        <Navbar />
        <Sectionone />
      </Topnavbar>

      <Sectiontwo/>
      <SectionTHREETOP>
      <Sectionthree/>
      <Sectionfour/>
      </SectionTHREETOP>
      <Footer/>
     


    </div>
  );
}

export default App;
