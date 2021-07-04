import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Link, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Profile from './components/Profile'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import EditProfile from './components/EditProfile'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import  './style.css'


const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
          <Header />
          <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/Profile" component={Profile} exact={true} />
              <Route path="/profile/:id" component={EditProfile} />
              <Route path="/notfound" component={NotFound} />
          </Switch>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));