import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Offers from './components/Offers';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Offers />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
