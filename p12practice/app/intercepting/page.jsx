import Link from 'next/link'
import React from 'react'

const InterceptingRoute = () => {
  return (
    <div>
      Intercepting route pages will form here
      <br />
      <Link href={'/intercepting/sameLevel'} className='text-blue-400'>Go to Level One Interceptor</Link>
    </div>
  )
}

export default InterceptingRoute
