import Link from 'next/link'
import React from 'react'

const OneLevelUpPage = () => {
  return (
    <div>
      You have reached one level up page
      <br />
      <Link href={'/intercepting/one'} className='text-indigo-500'>Go to one level up route</Link>
    </div>
  )
}

export default OneLevelUpPage
