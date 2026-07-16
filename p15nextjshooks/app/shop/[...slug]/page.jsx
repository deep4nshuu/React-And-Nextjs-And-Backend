'use client'

import { useParams, usePathname } from 'next/navigation';
import React from 'react'

const AllShopingItems = () => {

    const para = useParams();
    console.log(para)

    const path = usePathname()

  return (
    <div>
      This page will contains all shopping Items : {path}
    </div>
  )
}

export default AllShopingItems
