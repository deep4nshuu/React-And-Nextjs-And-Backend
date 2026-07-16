'use client'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const ShopPage = () => {

    const params = useParams;
    console.log(params)

    const pathname = usePathname()

  return (
    <div>
      ShopPage : {pathname}
    </div>
  )
}

export default ShopPage
