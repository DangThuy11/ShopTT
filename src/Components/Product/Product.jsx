import React from 'react'
import './Product.scss'
import { Link } from 'react-router-dom';
const Product = ({item}) => {
  debugger
  console.log('item',item);
  return (
    <div className='item'>
       <Link to={`/product/${item._id}`}>
          <img className='item-img' src={item.img} alt="" />
       </Link>
        <p>{item.title}</p>
        <div className='item-price'>
            <div className="new"> 
                $ {item.price}
            </div>
            <div className="old">
               $ {item.old_price}
            </div>
        </div>
    </div>
  )
}

export default Product