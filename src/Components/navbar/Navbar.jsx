import React, { useRef } from 'react'
import{RxHamburgerMenu} from 'react-icons/rx';
import Modal from '../modal/Modal';
import './navbar.css';


const Navbar = () => {

  function openModal(){
    setToggleMenu(true)
    modalRef.current.open()
  }

  const[toggleMenu,setToggleMenu] = React.useState(false);
  const modalRef = useRef()
  return (
    <div className='navbar'>
      <div className='navbar-links_logo'>
      <h1>OurName</h1>
      </div>
      <div className='navbar-links'>
        <div className='navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#devs">Devs</a></p>
          <p><a href="#mission">Mission</a></p>
        </div>
      </div>
    
      <div className='navbar-smallscreen'>
        <RxHamburgerMenu class="navbar-burger" color='#fff' fontSize={27} onClick={() => {openModal();}} />

        {toggleMenu && ( 
        <div className='navbar-smallscreen_overlay flex__center slide-bottom'>
          <div className='navbar-smallscreen-links'>
          <Modal ref={modalRef} >
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#devs">Devs</a></p>
          <p><a href="#mission">Mission</a></p>
          </Modal>
        </div>
        </div>
        )}
      </div> 
    
    </div>
    
    )
  }
  
  export default Navbar