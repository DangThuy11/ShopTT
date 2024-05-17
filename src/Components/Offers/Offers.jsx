import React from 'react';
import './Offers.scss';
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'> 
        <div className="offers-left">
            <h1>Thả ga</h1>
            <h1>Giảm giá cực cháy</h1>
            <h1>Cháy hơn dealine của bạn</h1>
            <button>XEM NGAY</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers