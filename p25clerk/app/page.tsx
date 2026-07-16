import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <UserButton />
    </div>
  );
}



/*

install app
install @clerk/nextjs
cpy creadentiwls from site in env or Set your Clerk API keys
Add clerkMiddleware() to your app by creating proxy.ts file in root folder
// it contains a matcher which tell where to trigger cler
Add ClerkProvider and Clerk components to your app inside app/layout 

create sign-in/[[...sign in]] and sign-up/[[...sign-up]] folder and respective page with sign in & up componet

import & use user btn from clerk inside page.tsx root
now create layout for auth folder
now update proxy.ts file and also update env vars
*/