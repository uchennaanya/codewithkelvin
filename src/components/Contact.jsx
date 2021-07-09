import React from 'react'
import Form from './Form'

const Contact = () => {

    return (
      <div className="contact" >

        <div className="banner">
        <div className='layer'>
            <h1>Contact&nbsp;Us</h1>
        </div>
        </div>
        <main >
          <div className="contact-div">
            <Form />
            <div className="contactbg">
            </div>
          </div>
        </main>
      </div>
    )
  };

  export default Contact