import { useContext } from 'react'
import { ThemeContext } from '../../context'
import Sun from '../../img/sunny.png'
import Moon from '../../img/crescent-moon.png'

import './toggle.css'


export const Toggle=()=>{
    const theme=useContext(ThemeContext) 
     const hendleClick=()=>{
         theme.despatch({type:"TOGGLE"})
     }
    return (
        <div className='t'>
         <img src={Sun} alt="" className="t-icon" />
         <img src={Moon} alt="" className="t-icon" />
         <div className="t-button" onClick={hendleClick} style={{left: theme.state.darkMode?0: 25 }}></div>
        </div>
    )
}