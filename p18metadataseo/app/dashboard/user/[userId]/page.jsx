import React from 'react'

export async function generateMetadata({params}){
    const {userId} = await params;

    return {
        title: `User ID : ${userId}`,
        description: `This is the user ID page of our website for user ${userId}`,
    }
}

const UserIdPage = async({params}) => {

    const {userId} = await params;

  return (
    <div>
      User ID Page: {userId}
    </div>
  )
}

export default UserIdPage


// we can create dynamic metadata in dynamic route by using the params object in the metadata function. The params object contains the dynamic route parameters, which we can use to generate the metadata for the page.


// in title object, template prop have %s which to write allow current page metadata along with default metadata. So we can use template prop to write the current page metadata along with default metadata.

// absolute prop in title object is used to override the default metadata or template metadata. It shows current metadata instead of default or template metadata

// open graph image size should be 1200x630 pixels. If the image is smaller than this size, it will be stretched to fit the size. If the image is larger than this size, it will be cropped to fit the size. So we should use the image of 1200x630 pixels for open graph image.

// to see your open graph image, you can use the ngrok that will expose your localhost to the internet. You can use the ngrok url to see your open graph image in the social media platforms.