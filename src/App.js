import React from 'react';
import './App.css'
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';
import Form from './components/Form';
import LoginPopup from './components/Login';
import ForgetPassword from './components/ForgetPassword';

class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <Router>
          <Switch>

           <Route exact path='/'><Form/></Route> 
             <Route path='/Login' component={LoginPopup}></Route>
            <Route path='/Forget' component={ForgetPassword}></Route>
         </Switch>
         </Router>
       </Provider>
      );
  }
}

export default App;
