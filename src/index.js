import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Profile from './components/Profile'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Services from './components/Services'

import axios from 'axios'


// import EditProfile from './components/EditProfile'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import './app.scss'


const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
          <Header />
          <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/profile" component={Profile} />
              <Route path="/services" component={Services} />
              <Route path="/notfound" component={NotFound} />

              {/* <Route path="/profile/:id" component={EditProfile} /> */}
          </Switch>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));