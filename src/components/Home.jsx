import React from 'react'

import { Redirect } from 'react-router-dom';
import Form from './Form'

const Home = () => {
  return (
    <div className="">
      <div className="home">
        <h1>Code with Kelvin</h1>
      </div>
      <main>
        {/* <Redirect to="/login">Login</Redirect> */}
        <div className="contact">
          <Form />
        </div>
      </main>
    </div>

  )
};

  export default Home