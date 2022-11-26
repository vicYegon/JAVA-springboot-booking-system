import React from 'react'

function Contact() {
  return (
    <div id='contact'>
      <h1>CONTACT US</h1>
      <form>
        <input type='text' placeholder='Enter your full name' required/>
        <input type='email' placeholder='email@example.com' required/>
        <textarea placeholder='Write your message here...' name='message'></textarea>
        <input type='submit' value='Send'/>
      </form>
    </div>
  )
}

export default Contact;