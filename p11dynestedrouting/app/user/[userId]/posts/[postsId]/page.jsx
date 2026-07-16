import React from 'react'

const PostsIdPage = async ({params}) => {
    const {userId, postsId} = await params;
  return (
    <div>
      PostsId: {postsId}
      UserId: {userId}
    </div>
  )
}

export default PostsIdPage


// To create nestes dynamic route
// flow : user(page.jsx :if wanted) -> [userId] with page.jsx to show userid -> posts folder -> [postsId] folder with page.jsx to fetch posts id from url