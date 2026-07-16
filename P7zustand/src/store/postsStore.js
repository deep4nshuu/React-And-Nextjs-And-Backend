import { create } from "zustand";


// A Demo how Zustand handle async or sync api's -> it doesn't care about async or sync api, it handle both of them in same way


export const usePostsStore = create((set) => ({
    posts: [],
    loading: false,
    error: false,
    fetchPosts: async () => {
        set({loading: true, error: false})
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            const data = await res.json()
            set({posts: data, loading: false})
        } catch (error) {
            set({error: "Failed to load json file", loading: false})
        }
    }
}))