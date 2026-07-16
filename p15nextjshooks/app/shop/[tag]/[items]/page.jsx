'use client'

import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const ItemsPage = () => {

    const params = useParams();
    console.log(params)

    const pathname = usePathname()

  return (
    <div>
      Items names or brands shoped : {pathname}
    </div>
  )
}

export default ItemsPage
