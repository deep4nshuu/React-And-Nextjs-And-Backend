import Link from 'next/link'
import React from 'react'

const Onepage = () => {
  return (
    <div>
      <Link href={'/one/two'}>Go to Page Two</Link>
      <br/>
      <Link href={'/three'}>Go to Page Three</Link>
    </div>
  )
}

export default Onepage
