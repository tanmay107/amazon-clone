import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';
import HeaderResponsive from './HeaderResponsive';

const promise = loadStripe('pk_test_51HwiACCaW2R8VUI3vu7XfA4HtsNVOb8C6z18x6UcrE7enUWpYSIEFiZLDF9UJPL4Uz7YKUd1AEJHHl98H6gSjZlJ00zycbCb2p');
function App() {

  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    //will only run once when the app component loads... 
    auth.onAuthStateChanged(authUser => {
      console.log('The user is :-  ', authUser);

      if(authUser) {
        //the user just logged in/ the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = '/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path = '/login'>
              <Login />
          </Route>
          <Route path = '/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe = {promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path = '/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
