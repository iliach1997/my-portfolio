
import { useContext } from 'react';
import {Intro} from './components/intro';
import { About } from './components/about';
import {ProductList} from './components/productList'
import { Toggle } from './components/toggle';
import {Contact} from './components/contact'
import { ThemeContext } from './context.js';
import { NavBar } from './components/navBAr';
// import './App.css';
function App() {
const theme=useContext(ThemeContext)
const darkMode=theme.state.darkMode
  return (
    <div style={{backgroundColor:darkMode? "#333": "#c76538",color: "white"}}>
   <NavBar/>
   <Toggle />
   <Intro/>
   <About/>
   <ProductList/>
   <Contact/> 

    </div>
  );
}

export default App;
