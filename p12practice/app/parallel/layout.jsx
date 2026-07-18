import React from 'react'

const LayoutPage = ({
    children,
    about,
    contact
}) => {
  return (
    <div className='grid grid-cols-2 gap-4 h-screen p-4'>
      <div className='overflow-auto'>{children}</div>
      <div className='grid grid-rows-2 gap-4'>
        <div className='overflow-auto'>{about}</div>
        <div className='overflow-auto'>{contact}</div>
      </div>
    </div>
  )
}

export default LayoutPage
