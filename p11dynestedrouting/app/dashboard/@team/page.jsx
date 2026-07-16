import Link from 'next/link'
import React from 'react'

const TeamPage = () => {
  return (
    <div className='bg-blue-950 h-[50%]'>
      <Link href={'/dashboard/team-docs'}>Go to team docs page</Link>
    </div>
  )
}

export default TeamPage
