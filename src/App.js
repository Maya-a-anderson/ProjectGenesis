import React from 'react'
import {Header, Developers, FindUs, Footer, Genesis, Goal } from './containers';
import {Cta, Navbar} from './Components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
     <div className='gradient__bg'>
      <Navbar />
      <Header />
      <Developers />
      <Goal />
      <Genesis />
      <FindUs />
      <Footer />
     </div>
     
    </div>
  )
}

export default App