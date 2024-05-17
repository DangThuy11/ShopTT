import React from 'react'
import './NewsLetter.scss'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Nhận ưu đãi độc quyền trên email của bạn</h1>
        <p>Đăng ký nhận bản tin của chúng tôi  ❤️</p>
        <div>
            <input type="email" placeholder='Your email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter