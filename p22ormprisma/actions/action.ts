"use server";

import { prisma } from "@/lib/db";

export async function createUser(formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string

    if (!email || !name) return;

    await prisma.user.create({
        data: {
            name: name,
            email: email,
            createdAt: new Date(),
        },
    })
}



export async function getAllUsers(){
    const allUsers = await prisma.user.findMany()

    return allUsers;
}