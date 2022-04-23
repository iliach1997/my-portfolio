import { createContext } from "react";
import { useReducer } from "react";
export const ThemeContext=createContext();
const INITION_STATE={darkMode:true};
const themeReducer=(state,action)=>{
    switch(action.type){
        case "TOGGLE":
            return{darkMode:!state.darkMode};
            default:
                return state;
    }
}
export const ThemeProvider=(props)=>{
  const [state,despatch] = useReducer (themeReducer,INITION_STATE)
  return(
      <ThemeContext.Provider value={{state,despatch}}>
          {props.children}
      </ThemeContext.Provider>
  )
}