import React from 'react'

const Contact = () => {

    return (
      <div className="contact" >

        <div className="banner">
        <div style={{
          display: 'flex',
          color: '#fff',
          height: '50vh',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          backgroundColor: 'rgba(0,0, 0, 0.5)'
        }}>
            <h1>Contact&nbsp;Us</h1>
        </div>
        </div>
        <main >
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