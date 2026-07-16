export async function GET(request) {

    // How to GET query params
    const url = new URL(request.url)
    const {searchParams} = url;

    console.log(searchParams)

    // how to use searchParams
    const apiUrl = new URL("https://jsonplaceholder.typicode.com/todos")

    // now we have created new api url nd want to append searchParams to this url
    searchParams.forEach((value, key) => {
        apiUrl.searchParams.append(key, value)
    })

    const res = await fetch(apiUrl)
    const data = await res.json()

    return Response.json({data})
}





/*

Authorizatn header
export async function GET(request) {

  const auth = request.headers.get("authorization");

  return Response.json({
    auth
  });
}



Auth/Session JWT : HTTP-only cookies or Authorization: Bearer <token>

*/