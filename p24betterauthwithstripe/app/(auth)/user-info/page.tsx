import { requireAuth } from '@/lib/auth-guard'
import React from 'react'

const UserInfoPage = async() => {

  const session = await requireAuth();

  const {user} = session;

  return (
    <div className='flex flex-col justify-center h-screen'>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}

export default UserInfoPage
