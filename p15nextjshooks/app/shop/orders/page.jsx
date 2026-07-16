"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const OrdersPage = () => {

  const router = useRouter();

  return (
    <>
      <div className='hover:cursor-pointer' onClick={() => router.push('/shop/products')}>
        Go to Product page
      </div>
      <button onClick={() => router.refresh()}>Refresh</button>
      <button className='mt-4 flex' onClick={() => router.forward()}>Forward</button>
    </>
  )
}

export default OrdersPage


/*
// useRouter allow to change routes and browser maintains the history of routes changes
// So if we go forward and then come bacward, this happen due to browser maintaining Stack of routes
// let say you visited product -> orders -> settings, then at top of stack will be settings route
// So if we want to go directly to product from setting, then we need to 2 step backward
// But useRoute.push() does in 1 step or it creates another route entry inside stack or pushes new route
// .replace() -> replace the route not push it as entry into stack
.refresh() -> reffreshes route or page without full page reload


*/