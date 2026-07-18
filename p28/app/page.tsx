import UserList from "@/components/user-list";
import { Suspense } from "react";


export default async function Home() {


  return (
    <>
      <h1>Users Directory</h1>
      <Suspense fallback={<p>Loading user...</p>}>
        <UserList />
      </Suspense>
    </>
  );
}



/*

# Caching older way

# Whenevr you want to apply caching things -> you need to build applicatn as : npm run build -> npm run start and whenvr made changes run again these cmds

1. create page.jsx and then fetch moc api data by using moc api
2. now run build cmd
3. while fetching url, pass type of cache we want to use: no-store(store nothing and catch fresh data) , force-cache(show only cache data not fresh one), next->revalidata:sec (it will refectch data in given time or cache data for derive period of time) & revalidate on demand (wnher need to revalidate cached data -> you neeed to tag the data with some identifier -> help in revlidating)

// now to revalidate on demand -> create server actn and one fn to fetch and another to update -> use revalidateTag(tag,profile) 


-> older way code:
import { getUserList, updateList } from "@/actions";

export default async function Home() {

  const data = await getUserList()

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold mb-8">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((user:any, index: number) => (
          <div key={user.id} className="bg-zinc-800 rounded-lg shadow-md p-4 flex flex-col items-center">
            <p>{index+1}</p>
            <img 
            src={user.avatar} 
            alt={`${user.name}'s avatar`}
            width={100}
            height={100}
            className="rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
      <form action={updateList}>
        <button type="submit">Refresh users</button>
      </form>
    </div>
  );
}




# Caching in Nextjs 16
To use cache component fr caching -> go to nextconfig -> enable cachecompo as true
-> it have cache timing options -> whic only wor inside "use cache" directive such as:
-> cachelife() : min,sec,day 



// https://api.github.com/users/deep4nshuu  -> to get data of single user


// So if we want to cache data but want to revalidate on demand -> we tag the cache data and use revalidateTag to revalidate on demand


*/