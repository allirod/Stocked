import React from 'react';
import { useSelector } from 'react-redux';
import { AppProps } from '../types';
import { RootState } from '../reducers/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from '../Components/Login';
import SignUp from '../Components/SignUp';
import MainContent from '../Components/MainContent';
import Settings from './Settings';
import ClientDataHome from './ClientDataHome';
import ReportingHome from './ReportingHome';
import Home from './Home';

const App = (props: AppProps) => {
  const loggedIn = useSelector((state: RootState) => state.user.loggedIn);

  return (
    <Router>
      <Routes>
      <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={loggedIn ? <MainContent/> : <LogIn />}>
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
