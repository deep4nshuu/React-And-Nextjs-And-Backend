import React from 'react'

const DefaultDashboardPage = () => {
  return (
    <div className='bg-red-950 h-[50%]'>
      Default dashboard page after unmatched route
    </div>
  )
}

export default DefaultDashboardPage



// if we create default.jsx file in every folder or slots then after full page load, nextjs will automatically loads default pages for that slots