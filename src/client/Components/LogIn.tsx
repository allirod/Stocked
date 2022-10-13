import React, { useState } from 'react';
import axios from 'axios';
import { LogInProps } from '../types';

import { Link } from 'react-router-dom';
import InputBox from './InputBox';
import '../styles/LogIn.scss';

const LogIn = ({ loggedIn, setLoggedIn }: LogInProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (cb: React.Dispatch<React.SetStateAction<string>>) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      cb(e.target.value)
    };
  }

  const handleUsernameChange = handleChange(setUsername);
  const handlePasswordChange = handleChange(setPassword);

  const handleSubmit = async () => {
    if(username && password) {
      try{
        const response = await axios.post('/api/login', {
          username,
          password
        })
        if(response.data.message === 'Success'){
          setLoggedIn(true);
        } else {
          window.alert('Invalid username or password');
        }
        
      } catch(e) {
        console.log(e);
      }
    }
  }

  return (
    <div className='log_in_container'>
      <img src='./stocked.png' alt='logo'/>
      <InputBox id='username' label='Username: ' value={username} onChange={ handleUsernameChange }/>
      <InputBox id='password' type='password' label='Password: ' value={password} onChange={ handlePasswordChange }/>
      <Link to='/signup'>Create an account</Link>
      <button onClick={ handleSubmit }>Submit</button>
    </div>
  );
};

export default LogIn;
