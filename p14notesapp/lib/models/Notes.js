import mongoose from "mongoose"

const noteSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required:true
        },
        content: {
            type:String,
            required: true
        }
    },
    {timestamps:true}
)

export const Note = mongoose.models.Note || mongoose.model("Note", noteSchema)

// this schema is the layout/structure of how and what type of Notes will be stored in db