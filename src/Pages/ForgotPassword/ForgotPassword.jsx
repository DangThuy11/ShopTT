import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.scss'; // Import CSS file
import { Link, useNavigate } from 'react-router-dom';
import { userRequest } from '../../requestMethod';

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      userRequest.post('/auth/forgot-password', { email })
      .then(res => {
          debugger;
          console.log('res', res);
          if (res.data.Status === "Success") {
              navigate('/login');
          }
      }).catch(err => console.log(err));
    };

  return (
    <div className="forgotPass">
        <div className="forgot-container">
            <h1>Tìm tài khoản của bạn</h1>
            <h3>Vui lòng nhập email hoặc số di động để tìm kiếm tài khoản của bạn.</h3>
            <form className="fields" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email của bạn" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type='submit'>Tìm kiếm</button>
            </form>
            
        </div>
    </div>
  );
};

export default ForgotPassword;
