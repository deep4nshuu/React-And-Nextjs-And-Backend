"use client"
import { useEffect, useState } from "react";

export default function Home() {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [notes, setNotes] = useState([])
  const [editingId, setEditingId] = useState(null)

  // to fetch notes from db
  const fetchNotes = async () => {
    try {
      const res = await fetch('/api/notes');
      const data = await res.json();
      console.log(data)
      setNotes(data)
    } catch (error) {
      console.log("Error saving note", error)
    }
  }

  // to display notes
  useEffect(() => {
    fetchNotes()
  }, [])


  const handleEdit = (note) => {
    setEditingId(note._id)
    setTitle(note.title)
    setContent(note.content)
  }

  // to handle if user cancel editing mode
  const handleCancel = () => {
    setEditingId(null)
    setTitle("")
    setContent("")
  }

  const handleDelete = async(id) => {
    if(!(confirm("Are you sure?"))) return;  // to show confirmatn msg, use confirm

    try {
      const res = await fetch(`api/notes/${id}`, {
        method: "DELETE"
      })

      if(res.ok){
        fetchNotes()
      }

    } catch (error) {
      console.log("Error deleting note", error)
      alert("Error deleting note")
    }
  }


  const onSubmit = async(e) => {
    e.preventDefault()

    if(!title || !content){
      alert("Please fill all the fields")
      return;
    }

    // to fetch the data created by POST in notes/routes.js
    try {
      setIsLoading(true);

      // this if statement will execute when editing mode runs
      if(editingId){
        const res = await fetch(`/api/notes/${editingId}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title, content})
        })

        if(res.ok){
          fetchNotes()  
          alert("Notes updated successfully")
          setTitle("")
          setContent("")
          setEditingId(null)
        }
      }

      // else statement runs in normal notes creatn mode
      else{
        const res = await fetch('/api/notes', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title, content})
        })

        if(res.ok){
          fetchNotes()  // this will display the notes created successfull to page
          setTitle("")
          setContent("")
        }
      }

    } catch (error) {
      console.log("Error saving note", error)
      alert("Error saving note")
    }
    finally{
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl text-red-400 font-bold mb-2 font-serif">My Notes</h1>
          <p className="text-gray-400 font-serif">Create, read, update and delete your notes</p>
        </div>
        <div className="bg-gray-950 rounded-lg shadow-md border border-gray-800 mb-8 p-6">
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-red-400 font-medium font-serif text-sm mb-2">
                Title
              </label>
              <input 
                type="text"
                className="w-full bg-gray-800 font-serif px-4 py-2 border border-gray-700 rounded-lg text-white"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter note title..."
              />
            </div>
            <div>
              <label className="block text-red-400 font-medium font-serif text-sm mb-2">
                Content
              </label>
              <textarea
                type="text"
                rows={5} 
                className="w-full bg-gray-800 font-serif px-4 py-2 border border-gray-700 rounded-lg text-white"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter note content..."
              />
            </div>
            <div className="flex gap-2">
              <button
                className="flex-1 rounded-lg bg-red-500 text-gray-900 font-bold font-serif px-4 py-2 hover:bg-red-300"
                type="submit"
                disabled={isLoading}
              >
                {
                  isLoading ? "Saving..." : editingId ? "Update Note" : "Add Note" 
                }
              </button> 
              {
                editingId && (
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                )
              }
            </div>
          </form>
        </div>
        <div>
          {
            notes.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg font-serif">No notes created yet. Create one to get started</p>
              </div>
            ) : (
              notes.map((note) => (
                <div key={note._id} className="bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800">
                  <h2 className="text-xl font-semibold font-serif text-red-400 mb-2">{note.title}</h2>
                  <p className="text-gray-300 font-serif mb-4 line-clamp-3">{note.content}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    {new Date(note.createdAt).toLocaleString()}
                  </p>
                  <div className="flex gap-2">
                    <button
                      className="flex-1 bg-yellow-500 text-gray-900 py-1 px-3 rounded hover:bg-yellow-600 transition text-sm font-medium font-serif"
                      type="submit"
                      onClick={() => handleEdit(note)}
                    >
                      Edit
                    </button>
                    <button
                      className="flex-1 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition text-sm font-medium font-serif"
                      type="submit"
                      onClick={() => handleDelete(note._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  );
}



/*
How to initialise notes app
1. install mongoDB compass
2. Form connections and cpy connectn
3. npm i mongoose
4. make lib folder outside app nd inside that make db.js file with a fn to connect db
5. connect app with mongo compass using url

*Step 4 & 5 to connect db to app

6. to check db is connected or not call fn made in db.js in root page.js file and inside page.js file make component async and if no error while calling that fn -> means db is connected successfully
7. now create a mongodb model or schema
8. Now make CRUD(Create, Read, Update, Delete) operations 
9. Now firstly create POST api endpts inside api/notes to create

Tip: whenevr creating endpts/http methods with mongodb in nextjs, always first connect db, then get data or call db, then save/create to db and then return response and Always while creating something, return status code is 201
* we can't make async fn in Client components

10. Create a form and it's functionality to create and store notes in db
11. Now create onSubmit fn to handle submisin of form
11. Now to get specific notes from db create GET() method inside route.js

Tip: use sort({createdAt:-1}) to display latest note at top, here -1(descending), 1(asc)
status:200 -> whenevr response is successfull but we are not creating use it

12. Now create a fetchNotes fn to fetch notes from db in page.js
13. Now to display those fetched notes from db on page, we create a useEffect
14. Now create UI to show fetched notes onto the page
15. Now create delete functionality using note id or dynamic backend endpt -> So for this create dynamic route as [id] inside notes
16. And create handleDelete fn to delete note by id
17. Now create functionality for Edit using PUT() method in id route
18. Create handleEdit and handleCancel functionality inside page file using editingid state
19. whenevr we clic edit, then To go to input field with note title, content who we want to update we create handleEdit fn and set edit id,title,content of note which we want to update
20. Now update onSubmit fn for handling editing mode and simple creatn mode separately
21. Now update Add note btn to handle editing and normal mode
22. Also add Cancel btn while updating note which will cancel edit mode


// button will be of Update note when isLoading is false & edit id is present and Add note when isLoading false but edit id is not present
*/


/*
CRUD Operatns creation using HTTP methods:
C : Create -> using POST()
R : Read -> using GET()
U : Update -> using PUT() / PATCH()✅
D : Delete -> using DELETE()
*/


/*

to fetch data created by POST or to request the data from backend endpts in UI page
const res = await fetch('/api/todos', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        completed: false
    })
})

// data created by POST or to create response for request in backend route:
const body = await request.json()

const {title, completed} = body

return Response.json({
  success: true,
  message: "Todo created successfully",
  todo: {
    title,
    completed
  }
})





*/