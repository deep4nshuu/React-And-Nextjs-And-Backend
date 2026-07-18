import React from 'react'

const CatchPage = async({params}) => {
    const {slug} = await params;
  return (
    <div>
      This folder will catch all segments in an arr without creating separate folders for them : {slug}
    </div>
  )
}

export default CatchPage
