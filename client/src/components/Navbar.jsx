import { useState, useEffect } from 'react';
import {FaShoppingCart } from 'react-icons/fa';
import { FaPlusSquare } from 'react-icons/fa';
import { GiSun, GiMoon } from 'react-icons/gi';

import { Link } from 'react-router-dom';

const Navbar = () => {
   const [colorMode, setColorMode] = useState(localStorage.getItem('colorMode') || 'lightMode');
   
   const toggleColorMode = () => {
      const newColorMode = colorMode === 'lightMode' ? 'darkMode' : 'lightMode';
      setColorMode(newColorMode);
    };

    useEffect(() => {
      if (colorMode === 'darkMode') {
        // Apply dark mode styles
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#ffffff';
      } else {
        // Apply light mode styles
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
      }
  
      // Save colorMode to localStorage
      localStorage.setItem('colorMode', colorMode);
    }, [colorMode]); 

   
  return (
    <nav className='navbar'>

         <Link to={'/'} className='link'>
            <h4>PRODUCT STORE</h4> <FaShoppingCart className='left_icon' />
         </Link>

         <div className="buttons">
            <Link to={'/create'} >
               <FaPlusSquare className='create_icon icon' />
            </Link>
            <Link onClick={toggleColorMode}>
               {colorMode === 'lightMode' ? <GiMoon className='color_icon icon' /> : <GiSun className='color_icon icon'/>}
            </Link>
         </div>
    </nav>
  )
  }

export default Navbar