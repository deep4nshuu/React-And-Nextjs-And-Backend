import React from 'react'

const CatchAllSegment = async ({params}) => {
    const {slug} = await params;
  return (
    <div>
      Documentation of catch all segment: {slug}
    </div>
  )
}

export default CatchAllSegment


