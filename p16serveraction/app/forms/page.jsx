import React from 'react'
import Form from 'next/form'
import { submitUser } from '@/actions/actions'
import Link from 'next/link'

const FormPage = () => {
  return (
    <div>
      <Link href={'/about'}>Go to About</Link>
      <h1>Create User</h1>
      <Form action={submitUser}>
        <input type='text' name='name' placeholder='Enter name' />
        <input type='text' name='email' placeholder='Enter email' />
        <button type='submit'>Submit</button>
      </Form>
      <h1>Search User</h1>
      <Form action={'/search'}>
        <input 
            type='text'
            name='query'
            placeholder='Search posts id'
        />
        <button type='submit'>Search</button>
      </Form>
    </div>
  )
}

export default FormPage
