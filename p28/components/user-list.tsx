import { addUser, deleteUser } from '@/actions';
import { getUser } from '@/app/lib/users'

import React from 'react'

const UserList = async() => {

    const users = await getUser();
    

  return (
    <div className='grid gap-4'>
      <div className=' flex flex-col items-center justify-center gap-10'>
        <form action={addUser} method='POST' className='flex gap-2'>
          <input type="text" name='name' placeholder='Name' className='border p-2 rounded'/>
          <input type="text" name='avatar' placeholder='Avatar url' className='border p-2 rounded'/>
          <button type='submit' className='bg-green-500 text-white py-2 px-4 rounded'>Add user</button>
        </form>  

        {users.map((user:any) => (
        <div key={user.id} className='p-4 border rounded'>
          <img src={user.avatar} alt={user.name}  className='w-12 h-12 rounded-full'/>
          <h2>{user.name}</h2>
          <p className='text-sm text-gray-500'>
            Joined {new Date(user.createdAt).toLocaleDateString()}
          </p>
          <form action={deleteUser.bind(null, user.id)} method='POST'>
            <button type='submit' className='bg-red-500 text-white py-2 px-4 rounded'>
              Delete User
            </button>
          </form>
        </div>
      ))}
      </div>
    </div>
  )
}

export default UserList
