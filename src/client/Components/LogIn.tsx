import React, { useRef } from 'react';
import { LogInProps } from '../types';

import { Link } from 'react-router-dom';
import InputBox from './InputBox';

const LogIn = (props: LogInProps) => {

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div>
      <img src='./stocked.png' alt='logo'/>
      <InputBox id='username' label='Username: ' htmlRef={usernameRef}/>
      <InputBox id='password' type='password' label='Password: ' htmlRef={passwordRef}/>
      <Link to='/signup'>Create an account</Link>
      <button>Submit</button>
    </div>
  );
};

export default LogIn;
