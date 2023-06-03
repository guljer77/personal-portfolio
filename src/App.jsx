import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About/>
      <Services />
      <Work />
      <Contact/>
    </div>
  );
};

export default App;