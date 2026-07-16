import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <h1>Header</h1>
      {children}
      <h1>Footer</h1>
    </div>
  )
}

export default layout


// Nested layout creation
// whatever you are writing in your root layout is going to wrap up your entire applicatn
// But if we want to wrap a specific page into  something then we can create a nested layout by creating layout.jsx in that folder who we want to wrap
// such as if we create about page and we want to wrap it up, so we create a layout.jsx file and pass children as prop and wrap that children while using in h1's or header&footers