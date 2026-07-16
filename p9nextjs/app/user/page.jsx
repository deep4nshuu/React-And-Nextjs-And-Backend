import React from 'react'

const UserPage = () => {
  return (
    <div>
      UserPage
    </div>
  )
}

export default UserPage


// Nested routing
// if we are doing nested routing then we need to create page.jsx file for parent folder as well as for children
// And the children folder name should be in []
// else if we want to create page file for only children one then pass children name with some id in url only then it will load else it will show error 404