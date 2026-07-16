export async function POST(request) {
    // 1 Parse the json body
    const body = await request.json()
    // 2 De-structure the body
    const {title, completed} = body
    // Can do databse logic here

    // 3 Now return the message or data
    return Response.json({
        success: true,
        message: "Todo created successfully",
        todo: {
            title,
            completed
        }
    })
}



