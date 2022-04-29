
import { Link } from 'react-scroll'
// import {AiOutlineHome}from 'react-icons/cg'
import 'animate.css'
import './navbar.css'
export const NavLinks=({isMobile,closeMenu})=>{

    return(
     <div className="n-hed" >
     <div className='n-left'></div>
     <div className="n-right">
     <ul className='animate__animated animate__backInLeft'>
         <li >
       <Link to="intro" spy={true} smooth={true} offset={50} duration={500}
       onClick={()=>{isMobile&&closeMenu()}}>Home</Link>
        </li>
        <li>
        <Link to="about" spy={true} smooth={true} offset={-50} duration={500}
        onClick={()=>{isMobile&&closeMenu()}}>Education</Link>
        </li>
        <li>
        <Link to="pro" spy={true} smooth={true} offset={50} duration={500}
        onClick={()=>{isMobile&&closeMenu()}}>Project</Link>
        </li>
        <li>
        <Link to="contact" spy={true} smooth={true} offset={10} duration={500}
        onClick={()=>{isMobile&&closeMenu()}}>Contact</Link>
           
        </li>
      
    
    </ul>
</div>
    </div>

     
  
     
    )
}