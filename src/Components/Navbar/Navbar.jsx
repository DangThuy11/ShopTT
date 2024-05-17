import React from 'react';
import './Navbar.scss'
import logo from '../Assets/logoReact.png';
import cart from '../Assets/cart_icon.png';
import { ShopOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
  //console.log('handle', handleLogout);
  const quantity = useSelector(state => state.cart.count);
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log('current', currentUser);
  return (
    <div className='navbar'>
      <Link to='/' className="nav-logo" style={{ textDecoration: 'none' }}>
        <img src={logo} alt="" className='nav-img' />
        <p>T&TShop</p>
      </Link>
      <div className="nav-list">
        <span className='nav-icon'> <ShopOutlined />199 cửa hàng</span>
        <span className='nav-icon'> <PhoneOutlined />1800 2666</span>
        <span className='nav-icon-free'>Free</span>
        <span className='nav-icon'>-</span>
        <span className='nav-icon'>Đặt hàng gọi</span>
        <span className='nav-icon'><PhoneOutlined /> 0816313868</span>
      </div>
      <div className="nav-login-cart">
        {
          !currentUser && <Link to="/login">
          <button>Đăng nhập</button>
        </Link>
        }
        <Link to='/cart'>
          <img src={cart} alt="" />
        </Link>
        <div className="nav-cart-count">{quantity}</div>
        <div className="nav-profile">
          {currentUser && <Link to={"/user/profile"} className="user" style={{ textDecoration: "none" }}>
            <span><UserOutlined /></span> Cá nhân
          </Link>}

        </div>
      </div>
    </div>
  )
}

export default Navbar;