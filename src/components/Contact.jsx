import React from 'react'

const Contact = () => {

    return <main>
        <h2>Contact Page</h2>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="message"></label>
          </div>
          <div>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          </div>

          <button>Send</button>
        </form>
    </main>
  };

  export default Contact