
import './product.css'
export const Product=({img, link})=>{
    return(
        <div className='p'>
           <div className="p-browser">
               <div className="p-circle"></div>
               <div className="p-circle"></div>
               <div className="p-circle"></div>
           </div>
           <a href={link} target="_blank" rel='noreferrer'>
               <img src={img} alt="logo" className='p-img'/>
           </a>
        </div>
    )
}