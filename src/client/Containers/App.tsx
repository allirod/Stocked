import React from 'react';
import { useSelector } from 'react-redux';
import { AppProps } from '../types';
import { RootState } from '../reducers/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from '../Components/Login';
import SignUp from '../Components/SignUp';

const App = (props: AppProps) => {
  const loggedIn = useSelector((state: RootState) => state.user.loggedIn);

  return (
    <Router>
      <Routes>
        <Route path='/' element={loggedIn ? <div>HELLO</div> : <LogIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
