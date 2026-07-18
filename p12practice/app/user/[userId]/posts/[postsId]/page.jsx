import React from 'react'

const PostsPage = async ({params}) => {
  const {userId, postsId} = await params;
  return (
    <div>
      User Posts Page
      <br />
      UserId : {userId}
      <br />
      PostsId : {postsId}
    </div>
  )
}

export default PostsPage
