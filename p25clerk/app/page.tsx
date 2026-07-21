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


# Clerk Authenticatn setup

Step 1: install app

Step 2: npm install @clerk/nextjs

Step 3: Setup clerk dashboard and keys
cpy creadentiwls from site in env or Set your Clerk API keys

Step 4: Create middleware
Add clerkMiddleware() to your app by creating proxy.ts file in root folder
// it contains a matcher which tell where to trigger clerk

Purpose: Intercepts every request -> Checks authentication -> Makes Clerk available on every request.

Step 5: Wrap app with ClerkProvider
Add ClerkProvider and Clerk components to your app inside app/layout 

Step 6: Create Auth Routes
create sign-in/[[...sign in]] and sign-up/[[...sign-up]] folder and respective page with <Sign In/> -> display complete signin ui & <SignUp/> -> Show registratn form component

Step 7: Add Auth Btns
import & use user btn from clerk inside page.tsx root

Step 8: Protect route
now create layout for auth folder
now update proxy.ts file and also update env vars
*/