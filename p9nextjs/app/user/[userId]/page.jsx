import React from 'react'

const UserIdPage = async ({params}) => {

    const {userId} = await params
  return (
    <div>
      UserIdPage {userId}
    </div>
  )
}

export default UserIdPage


// here we use params to access the userid from url and then show it on page