import React from 'react'

const UserIdPage = async ({params}) => {
    const {userId} = await params;
    console.log(userId)
  return (
    <div>
      Dynamic Routes for User Id: {userId}
    </div>
  )
}

export default UserIdPage
