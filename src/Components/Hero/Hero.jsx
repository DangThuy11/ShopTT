import React from 'react'
import './Hero.scss';
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
const Hero = () => { 
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>THỨ 4 & 6 VUI VẺ </h2>
            <div>
                <div className="hero-left-icon">
                    <p>MỚI</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>GIẢM GIÁ CỰC RẺ</p>
                <p>FLASH SALE</p>
            </div>
            <div className="hero-left-btn">
                <div>MUA NGAY</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero