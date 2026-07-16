import React from 'react'

const BlogPage = async({params}) => {

    const {slug} = await params;

  return (
    <div>
        Blog Page: {slug}
    </div>
  )
}

export default BlogPage
