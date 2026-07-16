"use client"
import { createUser } from '@/actions/user-actions'
import React from 'react'

const CardForm = () => {

  

  return (
    <div className='space-y-4 mt-5'>
      <form action={createUser} className='space-y-4'>
        <div className='grid grid-cols-2 gap-4'>
          <input type='text' name='name' placeholder='Enter name...' className='p-2 border rounded' />
          <input type='email' name='email' placeholder='Enter email...' className='p-2 border rounded' />
          <input type='password' name='password' placeholder='Enter password...' className='px-2 py-1 border rounded' />
          <textarea name='message' placeholder='Enter message...' className='p-2 border rounded' />
        </div>
        <div className='flex justify-center mt-4'>
          <button type='submit' className='px-6 py-4 rounded text-white bg-blue-600 hover:bg-blue-700 shadow'>Create 👤</button>
        </div>
      </form>
    </div>
  )
}

export default CardForm



/*

<div className="space-y-4">
  <div className="grid grid-cols-2 gap-4">
    <input
      type="text"
      placeholder="First Name"
      className="p-2 border rounded"
    />
    <input
      type="text"
      placeholder="Last Name"
      className="p-2 border rounded"
    />
    <input
      type="email"
      placeholder="Email"
      className="p-2 border rounded"
    />
    <input
      type="password"
      placeholder="Password"
      className="p-2 border rounded"
    />
  </div>

  
  <div className="flex justify-center">
    <button className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700">
      Submit
    </button>
  </div>
</div>


*/