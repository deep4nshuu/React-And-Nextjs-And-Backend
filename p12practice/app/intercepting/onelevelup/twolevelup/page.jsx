import Link from 'next/link'
import React from 'react'

const TwoLevelPage = () => {
  return (
    <div>
      Two level outer folder
      <br />
      <Link href={'/intercepting/two'} className='text-indigo-600'>Go to level two intercept page</Link>
    </div>
  )
}

export default TwoLevelPage


// think like we are 'two' directory out and we are fetching 'two' intercept route so fetch 'two' route which will automaticaly fetch its intercept route & if reloaded it will go to 'two' route