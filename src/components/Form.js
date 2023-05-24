import React, { useState } from 'react'
import './Form.css'
import { db } from '../firebase/db';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name:name,
            email:email,
            message:message
        })
        .then(() => {
            alert('Message submited. Thank you!')
        })
        .catch((error) => {
            alert(error.message)
        })
        
        setName('')
        setEmail('')
        setMessage('')
    }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <h3>Contact form</h3>


        <label>Name</label>
        <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>

        <label>Email</label>
        <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>

        <label>Message</label>
        <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

        <button type='submit'>Submit</button>
    </form>
  );
}

export default Form;