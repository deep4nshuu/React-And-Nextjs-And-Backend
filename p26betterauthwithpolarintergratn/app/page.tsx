import { requireAuth } from "@/lib/auth-guard";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import LogoutBtn from "@/components/logout-button";
import { prisma } from "@/lib/db";
import { cn } from "@/lib/utils";

export default async function Home() {

  const session = await requireAuth()

  const {user} = session;

  const dbuser = await prisma.user.findUnique({
    where: {
      id: session?.user?.id
    },
    select: {
      plan: true
    }
  })

  const isPro = dbuser?.plan === "PRO"

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <div className="flex flex-col justify-center items-center gap-10 space-y-2">
        <Image src={user.image!} alt="userimage" className="object-contain rounded-full" height={70} width={70} />
        <h2 className="text-3xl font-bold mt-5">{user.name}</h2>
        <p className="text-xl font-semibold text-zinc-200">{user.email}</p>

        <Badge variant={dbuser?.plan === 'FREE' ? 'default' : 'destructive'}>
          {dbuser?.plan}
        </Badge>
        {
          dbuser?.plan === 'FREE' && (
            <Link href={'/pricing'} className={buttonVariants()}>
              Go to Pricing
            </Link>
          )
        }
      </div>

      <div className="flex flex-col justify-center items-center gap-10 space-y-2">
        <LogoutBtn />
      </div>
    </div>
  );
}




/*

# Polar steps
// Polar integration
1. install polar with better auth : npm install better-auth @polar-sh/better-auth @polar-sh/sdk

2. Configure Polar Access Token as : Polar settings -> developers -> create token -> cpy token and paste into env file

3. Configure BetterAuth Server by cpying code from there to auth.ts
The Polar plugin comes with it’s own set of plugins to add functionality to your stack:
checkout - Enable seamless checkout integration
portal - Make it possible for your customers to manage their orders, subscriptions & benefits
usage - List customer meters & ingest events for Usage Based Billing
webhooks - Listen for relevant Polar webhooks
-> Whenevr you want to wor with polar, initialise polar client -> add plugins inisde better auth config
// createCustomerOnSignUp: true -> it will automatically create a customer inside polar whenevr user signup
// use -> contain checout -> products -> accept id & slug

4. Go inside product sectn of polar -> create product with meta data & benefits -> cpy product id -> paste inside  plugin product id

5. Now go to auth-client and create plugin with polarclient

6. Now add plan in schema.prisma

7. To expose localhost as public url, we need to install ngrok and setup that

8. Then run this cmd in command prompt: ngrok http 3000 -> it will expose localhost to public and provide url

9. now open webhook plugin guide present right side in dashboard of polar

10. Now to configure webhooks endpts in polar -> go to polar -> settings -> webhooks -> Add endpts -> create that by adding copied public url with /api/auth/polar/webhook in url

11. This will create webhooks secret -> cpy them and paste into env file

12. Our terminal will provide develop host with allowedurl field -> allow third party to access localhost -> cpy that and paste into -> next.config.ts

13. Add webhooks plugins inside auth.ts velow checkout with events

14. Now when user signin -> customer created automatically in polar custimer sectn -> So to find it -> we use customer external id -> present in customer sectn -> which maps to user db id or prisma studio user id

15. Now use this id to update user while creating events such as onOrderPaid,onOrderCreated inside webhook plugin in auth.ts

16. Now format homepage to handle change of plan field or homepage only shows logo,email and plan active

*/