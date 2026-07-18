"use server";
import { updateTag } from "next/cache";

export async function deleteUser(id:string){
    await fetch(
        `https://6a5b122ead8332e75f02eaf3.mockapi.io/api/users/users/${id}`,
        {method: 'DELETE'}
    )

    updateTag('users');
}

export async function addUser(formData:FormData){
    const name = formData.get('name') as string;
    const avatar = formData.get('avatar') as string;

    await fetch(
        `https://6a5b122ead8332e75f02eaf3.mockapi.io/api/users/users`,
        {
            method: 'DELETE',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({name,avatar})
        }
    )

    updateTag('users')
}










/*

"use server";
import { revalidateTag } from "next/cache";

export async function getUser(){
    const response = await fetch('https://6a5b122ead8332e75f02eaf3.mockapi.io/api/users/users',{
        next: {
            tags: ['user']
        }
    })

    const data = await response.json()
    return data;
}

export async function updateList(){
    revalidateTag('user','max');
}


*/