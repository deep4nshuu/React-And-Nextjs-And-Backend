"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const ProductsPage = () => {

  const router = useRouter()

  return (
    <>
      <div>
        Products
      </div>
      <button onClick={() => router.back()}>Backward</button>
    </>
  )
}

export default ProductsPage
