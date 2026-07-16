"use server";

import { connectDB } from "@/lib/db";
import Contact from "@/lib/models/Contact";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'

export async function createContact(formData){
    await connectDB();

    const name = formData.get('name')
    const email = formData.get("email")
    const message = formData.get("message")

    await Contact.create({
        name,
        email,
        message
    })

    redirect('/dashboard')

}


export async function updateStatus(id){
    await connectDB()

    await Contact.findByIdAndUpdate(id, {
        status: "resolved"
    })

    revalidatePath('/dashboard')
}




/*

// server actn only accept formdata automatically not the id & for id to accept we need to bind in component with action
// So when we need to pass extra data along with formdata, you need to use bind method

// revalidatePath fn will allow to update val of fields such as status in real time without hard page reload


metadata
// it provode info about data to browser,serach engine so that they can ran your website

can only defined in layout/page
2 type : static and dynamic
Static -> export metadata and everything handled by nextjs
Ex: export const metadata(){title:'', description:''}

Dynamic -> created using generateMetadata()

We can create specific metadata for specific page and it shows in tab preview

*/