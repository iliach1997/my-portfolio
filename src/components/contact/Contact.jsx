import { useRef } from "react"
import { useContext } from "react"
import { ThemeContext } from "../../context"
import Phone from "../../img/phone.png"
import Email from '../../img/email.png'
import Addres from '../../img/map.png'
import emailjs from '@emailjs/browser';
import './contact.css'
export const Contact=()=>{
    const formRef=useRef();
    const theme=useContext(ThemeContext)
    const darkMode=theme.state.darkMode
    const handlSubmit=(e)=>{
   e.preventDefault()
       emailjs.sendForm('service_cwyapzr ', 'template_pvrpnjr', formRef.current,'user_shncQhpk9IkPBl0GiWavcY')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });

    }
    return(
        <div className="c">
         <div className="c-bg"> </div>    
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                         <img src={Phone} 
                         alt="phone-logo" 
                         className='c-icon'/>
                         598-172-124
                    </div>
                    <div className="c-info-item"> 
                         <img src={Email} 
                         alt="email-logo" 
                         className='c-icon'/>
                         chapidze19997@gmail.com

                   </div>
                    <div className="c-info-item">
                         <img src={Addres} 
                         alt="addres-logo" 
                         className='c-icon'/>
                         xobis rioni sofeli chaladidi
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                   <b> Lorem ipsum dolor sit</b> amet consectetur adipisicing elit.
                     Voluptatem sapiente, deserunt officia totam facilis maiores 
                     accusantium maxime quo ad ex est quibusdam 
                    sequi suscipit itaque neque fugit earum magni consequatur.
                </p>

                <form ref={formRef} onSubmit={handlSubmit}>
                   
                    <input style={{backgroundColor:darkMode && "#555" }} type='text' placeholder="Name" name="user_name"/>
                    <input style={{backgroundColor:darkMode && "#555"}} type='text' placeholder="Subject" name="user_subject"/>
                    <input style={{backgroundColor:darkMode && "#555"}} type='text' placeholder="Email" name="user_email"/>
                    <textarea style={{backgroundColor:darkMode && "#555"}} rows='5' placeholder="Message" name='message'/>
                    <button>Submit</button>
                    
                </form>
            </div>
        </div>
             
             
       </div>
    )
}