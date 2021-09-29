import React from 'react';
import './App.css'
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';
import Form from './components/Form';
import LoginPopup from './components/Login';
import ForgetPassword from './components/ForgetPassword';
import HomePage from './components/Home';
import { SlideData } from './components/SlideData';
import Navbar from './components/Navbar';
import Time from './components/Time';

class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <Router>
        <Navbar />
          <Switch>
             <Route exact path ='/'><HomePage slides = {SlideData} /></Route>
            <Route path = '/Signup'><Form/></Route> 
             <Route path ='/Login' component={LoginPopup}></Route>
            <Route path ='/Forget' component={ForgetPassword}></Route>
            <Route path='/Time' component={Time}></Route>
         </Switch>
         </Router>
       </Provider>
      );
  }
}

export default App;
