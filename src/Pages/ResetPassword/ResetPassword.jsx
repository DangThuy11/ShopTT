import React, { useState } from 'react';
import axios from 'axios';
import './ResetPassword.scss'; // Import CSS file
import { userRequest } from '../../requestMethod';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  // const [password, setPassword] = useState()
  // const navigate = useNavigate()

  //   axios.defaults.withCredentials = true;
  //   const handleSubmit = (e) => {
  //       e.preventDefault()
  //       userRequest.post('/auth/reset-password', {password})
  //       .then(res => { 
  //         debugger;
  //         console.log('res',res);
  //           if(res.data.Status === "Success") {
  //               navigate('/login')
               
  //           }
  //       }).catch(err => console.log(err))
  //   }
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const {id, token} = useParams()

   
    const handleSubmit = (e) => {
        e.preventDefault()
        userRequest.post(`/auth/reset-password/${id}`, {password})
        .then(res => {
          console.log('res',res);
          if (res.data.Status === "Success") {
            
            navigate('/login');
        }
        }).catch(err => console.log(err))
    }


  return (
    <div className="reset-password">
      <div className="reset-container">
        <h2>Reset Password</h2>
        <form  onSubmit={handleSubmit} className="fields">
            <input type="password" placeholder="Enter new password" onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
