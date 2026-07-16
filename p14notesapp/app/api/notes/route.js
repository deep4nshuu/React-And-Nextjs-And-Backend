import { connectDB } from "@/lib/db";
import { Note } from "@/lib/models/Notes";


export async function GET(req){
    await connectDB();
    const notes = await Note.find().sort({createdAt: -1})

    return Response.json(notes, {status:200})
}


export async function POST(req){
    await connectDB();
    const {title, content} = await req.json();
    const note = await Note.create({title, content});

    return Response.json(note, {status:201})
}



/*
Tip: whenevr creating endpts/http methods with mongodb in nextjs: 
1. always first connect db, -> await connectDB();
2. then get data or call db,  -> const {title, content} = await req.json();
3. then save to db  -> const note = await Note.create({title, content});
4. And then return response  -> return Response.json(note, {status:201})
5. And Always while creating/reading something, return status code is 201/200
status:200 -> whenevr response is successfull but we are not creating use it

Tip: to fetch something use this way:
1. fetch the data  -> const res = await fetch('/api/notes');
2. convert or de-structure the data  -> const data = await res.json();
*/


