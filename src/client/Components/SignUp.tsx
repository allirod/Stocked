import React, { useState } from 'react';
import axios from 'axios';
import { SignUpProps } from '../types';
import InputBox from './InputBox';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ loggedIn, setLoggedIn}: SignUpProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (cb: React.Dispatch<React.SetStateAction<string>>) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => cb(e.target.value);
  }

  const handleFirstNameChange = handleChange(setFirstName);
  const handleLastNameChange = handleChange(setLastName);
  const handleUsernameChange = handleChange(setUsername);
  const handlePasswordChange = handleChange(setPassword);
  const handleConfirmPasswordChange = handleChange(setConfirmPassword);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if(!(firstName || lastName|| username || password|| confirmPassword)) {
        window.alert('Please ensure all fields are populated prior to submitting')
    } else if(password !== confirmPassword) {
      window.alert('Please ensure both password values entered align')
    } else {
      try {
        const response = await axios.post('/api/signup', {
          firstName,
          lastName,
          username,
          password
        })
        setLoggedIn(true);
        navigate('../', {replace: true})
      } catch(error) {
        console.error(error)
      }
    }
  }

  return (
    <div>
      Please fill in the below and press submit to sign-up!
      <InputBox label='First Name: ' id='first-name' value={firstName} onChange={ handleFirstNameChange }/>
      <InputBox label='Last Name: ' id='last-name' value={lastName} onChange={ handleLastNameChange }/>
      <InputBox label='Username: ' id='username' value={username} onChange={ handleUsernameChange }/>
      <InputBox label='Password: ' id='password' value={password} type='password' onChange={ handlePasswordChange }/>
      <InputBox label='Confirm Password: ' id='confirm -password' value={confirmPassword} type='password' onChange={ handleConfirmPasswordChange }/>
      <button onClick={ handleSubmit }>Submit</button>
    </div>
  );
};

export default SignUp;
