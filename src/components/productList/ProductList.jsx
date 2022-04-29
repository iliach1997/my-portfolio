import {Product} from '../../components/product'

import  data  from "../../web.json"

import './productList.css'
export const ProductList=()=>{
    return(
        <div className='pl' id='pro'>
        <div className='pl-texts'>
            <h1 className='pl-title'>My Projects</h1>
       
        </div>
        <div className="pl-list">
            {data.map((item)=>{
              return   <Product key={item.id} img={item.img} link={item.link} /> 
                    
})}

        
          
        </div>
        </div>
    )
}