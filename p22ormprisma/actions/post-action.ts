"use server";
import {prisma} from '@/lib/db'

export const createPost = async(formData:FormData) => {
    const title = formData.get('title')
    const content = formData.get('content')

    if(!title) return;

    const post = await prisma.post.create({
        data:{
            title:title as string,
            content:content as string,
            updatedAt:new Date()
        }
    })

    return post;
}


export const getAllPost = async() => {
    const allPost = await prisma.post.findMany({
        orderBy: {
            updatedAt: 'desc'
        }
    })

    return allPost;
}


export const getPostById = async(id:string) => {
    const post = await prisma.post.findUnique({
        where:{
            id:id
        }
    })

    return post;
}


export const updatePost = async(id:string, formData:FormData) => {
    const title = formData.get('title') as string
    const content = formData.get('content') as string

    if(!title) return;

    const updatedPost = await prisma.post.update({
        where: {
            id: id
        },
        data: {
            title,
            content
        }
    })

    return updatedPost;
}


export const deletePost = async(id:string) => {
    await prisma.post.delete({
        where: {
            id:id
        }
    })

    return {
        message: "Post deleted successfully"
    }
}
