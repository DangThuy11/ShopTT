import React, { useState } from 'react'
import './Login.scss';
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import {message} from "antd";
const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector((state => state.user))
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!email || !password){
      message.error('Vui lòng nhập đủ thông tin !');
      return
  }
    login(dispatch,{email,password})
    // .then(() => {
    //   // Nếu đăng nhập thành công, chuyển hướng đến trang Home
    //   navigate('/');
    // })
    // .catch((error) => {
    //   message.error('Đăng nhập thất bại !');
    // });
    
    //message.success('Đăng nhập thành công!')
  }
  return (
    <div className='loginsingup'>
      <div className="login-container">
        <h1>Đăng nhập</h1>
        <form  action="" onSubmit={handleSubmit} className="fields">
          <input type="text" placeholder='Email address' onChange={(e) => setEmail(e.target.value)}/>
          {/* <input type="email" placeholder='Email Address' /> */}
          <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" disabled={isLoading}> Đăng nhập</button>
          <Link to='/forgot-password' className='p'>Quên mật khẩu?</Link>
        </form>
        {error && <div style={{color:'#ff4141'}} className="err">Bạn đã nhập sai mật khẩu hoặc email!</div>}
        <p className='login'>Bạn có tài khoản không? <Link to='/register' style={{textDecoration: 'none', color:'#5c5c5c'}}>
            Đăng Ký
          </Link></p>
      </div>
    </div>
  )
}

export default Login