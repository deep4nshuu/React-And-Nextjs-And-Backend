import React from 'react'
import Form from 'next/form'


const ContactForm = ({action}) => {
  return (
    <>
     <h1>Contact Form</h1> 
     <Form action={action} className='space-y-4 flex flex-col'>
        <input name='name' placeholder='Name' className='border p-2' />
        <input name='email' placeholder='Email' className='border p-2' />
        <textarea name='message' placeholder='Message' className='border p-2' />
        <button className='bg-blue-400 text-white px-4 py-4'>Submit</button>
     </Form>
    </>
  )
}

export default ContactForm
