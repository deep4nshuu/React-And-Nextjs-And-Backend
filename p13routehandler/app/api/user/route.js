import { cookies, headers } from "next/headers"

export async function GET(request){

    // 1st way to create headers
    // const reqHeaders = new Headers(request.headers)

    // 2nd recommended way
    const reqHeaders = await headers()
    console.log(reqHeaders.get("user-agent")) // to read header

    //1. to read cookies ->
    const username = request.cookies.get("username")
    console.log(username)

    //2. to read/get,set
    const cookieStore = await cookies()
    cookieStore.set("theme", "dark")
    const theme = cookieStore.get("theme")
    console.log(theme)


    // now to modify outgoing response
    return new Response("<h1>Hello World</h1>", {
        headers: {
            "content-type": "text",
            //1. "set-cookie": "username=deep"  
        }
    })
}


/*
# to set cookies 2 approach
Approach-1: set cookies while returning response
To read this: request.cookies.get("theme")
To set cookies:
return new Response({
    headers: {
        "content-type": "text",
        "set-cookie": "username=deep"  
    }
})

Approach 2: using cookie() method by nextjs
const cook = await cookie()
To set : cook.set("theme", "dark")
To read: const theme = cook.get("theme")


Read cookies -> get stored browser cookies
Ex : const store = await cookies(); store.get("name")
Set cookies -> store data in browser
Ex: store.set("name", "value")
Delete cookies -> remove stored cookie
Ex: store.delete("name")


.get() -> to read from server
.set() -> to set val on server
*/

