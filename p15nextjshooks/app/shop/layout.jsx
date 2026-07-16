import { Sidebar } from '@/components/Sidebar'
import React from 'react'

const ShopLayout = ({children}) => {
  return (
    <div className='flex'>
        <Sidebar />
        <main className='flex-1 p-6'>
            {children}
        </main>
    </div>
  )
}

export default ShopLayout
