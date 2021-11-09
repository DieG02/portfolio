import React from 'react';
import NavBar from './views/NavBar';
import Home from './views/Home';
import About from './views/About';
import Skills from './views/Skills';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Footer from './views/Footer';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      {/* <Projects/> */}
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
