import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {

  const isLogged = false;
  
  if(!isLogged){
    redirect('/login')
  }

  return (
    <div>
      <h1>Current Pathname :</h1>
    </div>
  )
}

export default page




