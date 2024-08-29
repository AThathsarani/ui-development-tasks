import React from 'react';
import Home from './Components/Home';
import About from "./Components/About";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQ";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Testimonial />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
