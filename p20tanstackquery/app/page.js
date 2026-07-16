"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


export default function Home() {

    // const [data, setData] = useState('')
    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState(null)

    // const fetchData = async() => {
    //   try {
    //     setIsLoading(true)
    //     const req = await fetch('https://api.freeapi.app/api/v1/public/cats?query=sociable&page=1&limit=10')
    //     const data = await req.json()
    //     setData(data)
    //     setIsLoading(false)
    //   } catch (error) {
    //     setError(error)
    //   }
    // }


    // useEffect(() => {
    //   fetchData()
    // },[])


    const {data, isLoading, error} = useQuery({
      queryKey:['cat-data'],
      queryFn:()=>fetch('https://api.freeapi.app/api/v1/public/cats?query=sociable&page=1&limit=10').then((res) => res.json())
    })

    if(isLoading){
      return <div>Loading...</div>
    }

    if(error){
      return <div>Error...</div>
    }


  return <div>{JSON.stringify(data, null, 2)}</div>
}
