import './about.css'
import Me from '../../img/my.jpg'
import Aca from '../../img/javascript 108+ (1).jpg'
export const About=()=>{
    return(
        <div className='a' id='about'>
        <div className="a-left">
       <div className="a-card bg"></div>
       <div className="a-card">
         <img src={Me} alt="my-foto" className='a-img'/>
       </div>
       </div>
        <div className="a-right">
            <h1 className='a-title'>Education</h1>
            <p className='a-sub'>
            
            </p>
            <p className='a-desc animate__animated animate__zoomIn'>
            Hello.  I've graduated the courses of React.js and Javascript in the Digital Academy.
            </p>
            <div className="a-aca">
                <img src={Aca} alt="" className='a-aca-img ' />
            </div>
        </div>
       </div>
    )
}