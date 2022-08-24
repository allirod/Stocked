import React from 'react';
import { LogInProps } from '../types';

import { Link } from 'react-router-dom';

const LogIn = (props: LogInProps) => {
  return (
    <div>
      <Link to='/signup'>Create an account</Link>
      <button>Submit</button>
    </div>
  );
};

export default LogIn;
