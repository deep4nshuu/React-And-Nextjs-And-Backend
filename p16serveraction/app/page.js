import { createTodo } from "@/actions/actions";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  // async function createTodo(formData){
  //   "use server";
  //   const title = formData.get('title')
  //   console.log("Creating a todo: ", title)
  // }

  return (
    <>
      <form action={createTodo}>
        <input 
          name="title"
        />
        <button>Add Todo</button>
      </form>
      <Link href={{
        pathname: '/about',
        query: {name: 'Deep'}
      }} className="text-blue-400 underline"
      >Go to about</Link>
      <div className="flex">
        <Image 
          src={'/assets/images/carimage.png'}
          alt='profile image'
          width={400}
          height={400}
          className="flex-1"
        />

        <Image 
          src={'https://images.unsplash.com/photo-1593055357429-62eaf3b259cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          alt="remote image"
          height={500}
          width={500}
        />        
      </div>
    </>
  );
}




/* 
we use api route and server actns to fetch the data from db
without server action -> while creating form, we need to handle it manually by creating onSubmit fn and state var etc and mark it as client component
But using server actn we can handle form in Server component-> we don't need anything like that, we create a fn to handle form & mark fn as server action and use 'action' filed in form tag to handle this fn
Now this form will execute on server and give output on terminal as it also a server
We can individually mark any fn use server

To use server action, create a separte folder as actions and inside that create actions.js inside that make server action fns

We can't use "use server" fn inside "use client"


# fonts
we can also use custom or google fonts in nextjs and don't need to download or load as they download while bundling and reduce it's size

we can also specify specific fonts for any page by using 'font/google

So we can load global level font as well as for specific page

syntax: 
1. import { Poppins} from "next/font/google";
2. const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400','500', '600','700','800','900']
  })
3.  return (
    <html lang="en" className={`${poppins.className}`}
    ></html
  )

We can also use local fonts in nextjs by downloading and placing in public folder

Form
Nextjs provide built in form tag which reduce boilerplate code and logic


action
we use action field for 2 different use:
1. to submit form and passes fn to handle form submissn
2. to perform query and passing a query path



Link
in link tag we can also pass query which we can use as params using 'query' field


# Image 
If image is in only public folder, then pass src as '/image.png' -> means no need to mention public folder
But if image is present inside public/assest -> then src : '/assets/image.png'

Remote/Online image can't be used directly by passing source as nextjs blocs remote images for security reasons
So we need to set remote patterns in the next.config.mjs file
Where we need to set pathname,protocol inside image->remotepatterns -> []

Syntax:
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
};




Backend Topics

Typical backend topics include:

-> Server
Node.js
Express
Next.js Route Handlers
Server Actions

-> APIs
REST
GraphQL
CRUD
Validation

-> Databases
PostgreSQL
MongoDB
Prisma
Mongoose

-> Authentication
JWT
Sessions
OAuth

-> Business Logic
Controllers
Services
Middleware

-> Deployment
Docker
Vercel
Linux
Nginx


*/