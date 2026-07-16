import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-5xl font-bold text-indigo-500'>Auth Layout</h1>
        {children}
    </div>
  )
}

export default AuthLayout



// we can create a single separate layout file for Route grp folder
// we can only move main page.js into separate (root) folder and we never touch layout js file