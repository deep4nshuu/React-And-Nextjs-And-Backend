"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react';

function QueryClientProviderWrapper({children}){
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

export default QueryClientProviderWrapper;



/*

Server state means data that is fetched from a server and can change over time. It is different from client state, which is data that is managed locally in the application. Server state can be affected by external factors, such as user actions or changes on the server, and it needs to be kept in sync with the server to ensure that the application displays the most up-to-date information.

We store cached data in key value pairs which allow to use querykey to access the cached data. The query key is an array of strings or numbers that uniquely identifies a query. It can also be a function that returns an array of strings or numbers.

Tanstack considers cached data as stale data by default

invalidatn updates the stale data or cached data, and refetches the data from the server. This is useful when you know that the data has changed on the server and you want to ensure that your application has the most up-to-date information.

always mark any provider component with "use client" at the top of the file, so that it can be used in the app directory.

instead of doing this : const queryClient = new QueryClient()

// here we use useState because we want to create a new instance of QueryClient only once, and not on every render. By passing a function to useState, we ensure that the QueryClient is created lazily and only when the component is first rendered. This is important for performance and to avoid unnecessary re-renders.

To use QueryClientProvider , wrap children in layout.js inside it

# To update or invalidaate query:
const queryClient = useQueryClient()
queryClient.invalidateQueries({queryKey:['todos']})

*/