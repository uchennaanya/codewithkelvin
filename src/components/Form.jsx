import React from 'react'

const Form = () => {
    return (
        <div>
            <form action="">
                <h2>We will love to here from</h2>
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

        </div>
    )
}

export default Form