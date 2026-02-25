// import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./containers/home/Home";
import ParticleBackground from "./particlesBackgruound/particleBackground";
import About from "./containers/about";
import Skills from "./containers/skills/skills";
import Projects from "./containers/project/Project";
import { useEffect } from "react";
import Footer from "./containers/Footer/Footer";
function App() {

  useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  window.history.replaceState(null, null, " ");

  window.scrollTo(0, 0);
}, []);
  return (
    <div className="App">
      <>
        <Navbar />
        <ParticleBackground />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Footer/>
      </>
    </div>
  );
}

export default App;
