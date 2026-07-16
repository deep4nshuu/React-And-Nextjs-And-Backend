"use server"

export async function createTodo(formData){
    "use server";
    const title = formData.get('title')
    console.log("Creating a todo: ", title)
}


// here in server action components, we can pass body params normally but in api routes we don't pass it as or we don't know about body params
export async function updateTodo(title, desc, isCompleted){
    const newData = {
        title,
        desc,
        isCompleted
    }

    return {
        success: true,
        message:"Updated successfully"
    }
}

export async function submitUser(formData){
    const name = formData.get('name')
    const email = formData.get('email')

    console.log("Submitting user data : ", name, email)
}
// here user submit form -> nextjs sends POST request automatically and submit user & run on server