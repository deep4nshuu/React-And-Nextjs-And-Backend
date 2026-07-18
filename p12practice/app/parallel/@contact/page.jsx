import React from 'react'
import Link from 'next/link'

const ContactPage = () => {
  return (
    <div className='bg-blue-400 h-[50%]'>
      This is contact slot or section inside current layout
      <br />
      <Link href={'/parallel/teaminfo'} className='text-orange-950'>Go to team info page</Link>
    </div>
  )
}

export default ContactPage
