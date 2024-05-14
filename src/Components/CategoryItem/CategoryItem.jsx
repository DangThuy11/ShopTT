import React from 'react'
import './CategoryItem.scss'
import { Link } from 'react-router-dom'
const CategoryItem = ({item}) => {
  return (
    <Link to={`/products/${item.cat}`}>
      <div className='categoryItem'>
        <img src={item.img} alt="" />
        <div className="info">
            <h1>
                {item.title}
            </h1>
            <button>SHOW NOW</button>
        </div>
    </div>
    </Link>
  )
}

export default CategoryItem