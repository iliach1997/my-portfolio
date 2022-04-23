import {Product} from '../../components/product'

import  data  from "../../web.json"

import './productList.css'
export const ProductList=()=>{
    return(
        <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>My Projects</h1>
            <p className='pl-desc'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Ratione, voluptatum et vitae a aliquid dolorem 
                asperiores vel expedita voluptatibus molestias nemo eum exercitationem
                 explicabo laborum quisquam deserunt architecto. Dolore, officia.
            </p>
        </div>
        <div className="pl-list">
            {data.map((item)=>{
              return   <Product key={item.id} img={item.img} link={item.link} /> 
                    
})}

        
          
        </div>
        </div>
    )
}