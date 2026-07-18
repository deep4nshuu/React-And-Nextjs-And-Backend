import React from 'react'

const OptionCatchAllPage = async({params}) => {
    const {slug} = await params;
  return (
    <div>
      This page will also contains base url along with other segments: {slug} 
    </div>
  )
}

export default OptionCatchAllPage
