import React from 'react'

const Contact = () => {

    return (
      <div className="contact" >
        <div className="banner">

        </div>
        <main >
          <h2>Contact Page</h2>
          <div className="contact-div">
            <form action="">
              <p>You can reach us by filling the form bellow and we will take it up from there</p>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <label htmlFor="message">Message</label>
              </div>
              <div>
              <textarea name="message" id="" placeholder="Message"></textarea>
              </div>
              <button>Leave a message</button>
            </form>
            <div className="contactbg">
            </div>
          </div>
        </main>
      </div>
    )
  };

  export default Contact