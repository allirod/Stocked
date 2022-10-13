import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppProps } from '../types';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './Login';
import SignUp from './SignUp';
import MainContent from './MainContent';
import Settings from './Settings';
import ClientDataHome from './ClientDataHome';
import ReportingHome from './ReportingHome';
import Home from './Home';

const App = (props: AppProps) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
      <Route path='/signup' element={<SignUp loggedIn={ loggedIn } setLoggedIn={ setLoggedIn }/>} />
        <Route path='/' element={loggedIn ? <MainContent/> : <LogIn loggedIn={ loggedIn } setLoggedIn={ setLoggedIn }/>}>
          <Route path='/reporting' element={<ReportingHome/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/client_data' element={<ClientDataHome/>}/>
          <Route path='/' element={<Home/>}/>
        </Route>
        
      </Routes>
    </Router>
  );
};

export default App;
