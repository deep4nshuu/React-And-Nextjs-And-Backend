import Link from 'next/link'
import React from 'react'

const InnerTwoPage = () => {
  return (
    <div>
      Inner two page
      <br/>
      <Link href={'/final'}>Go to Final Page</Link>
    </div>
  )
}

export default InnerTwoPage
