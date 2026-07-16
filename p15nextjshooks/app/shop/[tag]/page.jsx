'use client'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const TagPage = () => {

    const params = useParams();
    console.log(params)

    const pathname = usePathname()

  return (
    <div>
      Tags for shopping items: {pathname}
    </div>
  )
}

export default TagPage
