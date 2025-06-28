import Greeting from './components/MyComponent/MyComponent';
import './App.css';
import Header from './components/Header';
import Features from './components/Feature';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import React, { useState } from 'react'; // make sure useState is imported


function App() {

   const [showContact, setShowContact] = useState(false);
  return (
    <div className="App">
     <Header onContactClick={() => setShowContact(true)}/>

       <Greeting/>
 <Features />
 <Services/>
   <Contact showModal={showContact} closeForm={() => setShowContact(false)}  />
<Footer/>


      
    </div>
  );
}

export default App;
