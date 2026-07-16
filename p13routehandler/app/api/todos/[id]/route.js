export async function PUT(request, {params}) {
    const data = await request.json()

    // these params are dynamic/route params which are part of url path
    const updateTodo = {id: params.id, ...data}  // here we are updating data by getting id
    // assuming that we are updating the data into database
    return Response.json({todo: updateTodo})
}

export async function PATCH(request, {params}){
    const data = await request.json()

    const updateTodo = {id: params.id, ...data}

    return Response.json({todo: updateTodo})
}

export async function DELETE(request, {params}){
    const data = await request.json()

    const updateTodo = {id: params.id, ...data}

    return Response.json({todo: updateTodo})
}




// We can create PUT, PATCH And DELETE into same folder