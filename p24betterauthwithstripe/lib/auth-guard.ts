import {auth} from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'


export async function requireAuth(){
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session){
        redirect('/login')
    }
    return session;
}


// it means places where user don't need auth, that is login page. So for that we use this fn
export async function requireUnAuth(){
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(session){
        redirect('/')
    }

    return session;
}