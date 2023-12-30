import React from 'react'
import {styles} from "../stykes1"
import { logo } from '../assets'


const Navbar=()=>{

    return(
      <div className="header-2">
      <nav className="navbar-curved-bg py-2 md:py-7 relative overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
      <path fill="#4F46E5" d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,85.3C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
    <div className="animate-slide-in ">
      <div className="flex items-center"> 
        <a href="#" className="custom-link margin-right">Home</a>
        <a href="#" className="custom-link margin-right">About</a>
       
      </div>

        <div className="flex-center"> 
          <img src={logo} alt="Logo" className="image-size" />
            
          <div className="welcome-text"  style={{ fontFamily: 'Pacifico, cursive' }}>
          
          <span className="animate-fadeInUp">Welcome</span>
            <span className="animate-fadeInUp ml-2">to</span>
            <span className="animate-fadeInUp ml-2">high wycombe</span>
            <span className="animate-fadeInUp ml-2">Meenakshi</span>
            <span className="animate-fadeInUp ml-2">Temple</span>


          </div>

        </div>
      
      <div className="flex items-center space-x-4"> 
      <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full mt-4 shadow-md transform hover:scale-105 transition duration-300 animate-bounce">
            Donate Now
          </button> 
        <a href="#" className="custom-link margin-right">Services</a>
        <a href="#" className="custom-link margin-right">Contact</a>
       
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
      <path fill="#4F46E5" d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,85.3C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
  </nav>
    </div>

    
    
      
    )

}

export default Navbar
