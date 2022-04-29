import { useState} from "react"
import 'animate.css'

import { NavLinks} from "./NavLinks"

import {CgClose} from 'react-icons/cg'
import {CgMenuGridR} from 'react-icons/cg'

export const MobileNavigation=()=>{
    const [open, setOpen]=useState(false);
 
   const burgerNav=<CgMenuGridR className="m-menu "
                    size="40px" color="white"
                    onClick={()=>setOpen(!open)}/>
   const closeNav= <CgClose className="m-menu"
                           size="40px" color="white"
                           onClick={()=>setOpen(!open)}/> 
    const closeMenu=()=>setOpen(false);
    return(
      
        <div className="m-mobilenavigation">
          {open?closeNav:burgerNav}
          
            {open&& <NavLinks isMobile={true} closeMenu={closeMenu}/>}
        </div>

    )
}