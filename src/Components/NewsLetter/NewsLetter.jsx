import React from 'react'
import './NewsLetter.scss'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Ofeers on your email</h1>
        <p>Subscribe to our newsletter and stay update</p>
        <div>
            <input type="email" placeholder='Your email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter