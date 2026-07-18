import { cacheLife, cacheTag } from "next/cache";

export async function getUser(){
    "use cache"
    cacheLife("hours");
    cacheTag('users')

    const res = await fetch('https://6a5b122ead8332e75f02eaf3.mockapi.io/api/users/users')

    return res.json()
}


// this is the function to create cache component for storing cache