import React from 'react';
import './Register.scss';
import {message} from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import {BASE_URL1} from "../../requestMethod";
import { useDispatch, useSelector } from 'react-redux';
import { register } from "../../redux/apiCalls";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const error = useSelector((state) => state.user.error);
  const[username,setUsername] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     password: ""
// })
// const handleChange = (e) => {
//   setValues({
//       ...values,
//       [e.target.name]: e.target.value
//   })
//   console.log('setValues',setValues);
// }
// console.log('value',values);

console.log('user',username);
const handleSubmit = async (e) => {
  e.preventDefault();
  // if (!values.email || !values.username || !values.password) {
  //   message.error('Vui lòng nhập đủ thông tin!');
  //   return;
  // }
  dispatch(register({username,email,password}));
  message.success('Đăng ký thành công !');
  navigate('/login')
};

if (error) {
  //message.error(error);
}
  return (
    <div className='register'>
      <div className="register-container">
        <h1>Đăng ký</h1>
        <form className="fields" onSubmit={handleSubmit}>
          <input type="text" placeholder='Your name' onChange={(e) => setUsername(e.target.value)}/>
          <input type="email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" >Đăng ký</button>
        </form>
        
        <p className='registerUp'>Bạn đã có tài khoản? <Link to='/login' style={{textDecoration: 'none', color:'#5c5c5c'}}>Đăng nhập tại đây</Link></p>
        <div className="agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the temrm of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Register