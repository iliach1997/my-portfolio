import { useState } from "react"


import { NavLinks } from "./NavLinks"

import {CgClose} from 'react-icons/cg'
import {CgMenuGridR} from 'react-icons/cg'

export const MobileNavigation=()=>{
    const [open, setOpen]=useState("");
   const burgerNav=<CgMenuGridR className="m-menu "
                    size="40px" color="white"
                    onClick={()=>setOpen(!open)}/>
   const closeNav= <CgClose className="m-menu"
                           size="40px" color="white"
                           onClick={()=>setOpen(!open)}/> 
    return(
      
        <nav className="m-mobilenavigation">
            {open?closeNav:burgerNav}
            
            {open&& <NavLinks/>}
        </nav>

    )
}