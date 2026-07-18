import LogoutButton from "@/components/logout-button";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { requireAuth } from "@/lib/auth-guard";
import { prisma } from "@/lib/db";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const session = await requireAuth();

  const {user} = session;

  const dbuser = await prisma.user.findUnique({
    where: {
      id: session?.user?.id
    },
    select: {
      plan:true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true
    }
  })


  const isPremium = dbuser?.plan === "PREMIUM";

  const renewalDate = dbuser?.stripeCurrentPeriodEnd ? new Date(dbuser.stripeCurrentPeriodEnd).toLocaleDateString('en-GB', {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
  : null;


  return (
    <div className="flex justify-center items-center h-screen bg-zinc-900 text-white px-4">
      <Card className="relative w-full max-w-sm overflow-visible rounded-3xl border-zinc-800 bg-zinc-800 pt-14 text-center shadow-xl">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <Image src={user.image!} alt="userimage" className="rounded-full object-cover ring-4 ring-zinc-900" height={70} width={70} />
        </div>
        <CardContent className="flex flex-col items-center gap-3 pb-8">
          <h2 className="text-2xl font-bold text-white">{user.name}</h2>
          <p className="-mt-2 text-sm text-zinc-400">{user.email}</p>

          <span
            className={cn(
              "rounded-full px-4 py-1 text-xs font-bold tracking-wide",
              isPremium
                ? "bg-red-500/15 text-red-500"
                : "bg-zinc-700/50 text-zinc-300"
            )}
          >
            {isPremium ? "PREMIUM PLAN" : "FREE PLAN"}
          </span>

          {isPremium && renewalDate && (
            <p className="text-sm text-zinc-400">
              Active until <span className="font-semibold text-white">{renewalDate}</span>
            </p>
          )}

          <div className="mt-3 flex w-full flex-col gap-3">
            {!isPremium ? (
              <Link
                href="/pricing"
                className={cn(
                  buttonVariants(),
                  "w-full rounded-xl bg-white text-black hover:bg-zinc-200"
                )}
              >
                Upgrade to Premium
              </Link>
            ) : (
              <Button
                variant="outline"
                className="w-full rounded-xl border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
              >
                Manage Subscription
              </Button>
            )}

            <LogoutButton />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}




/*

# Better Auth installatn steps
1. npm install better-auth
2. make .env file and paste secret key and auth url
3. create a better auth instance or auth.ts file in lib or utils folder
4. now configure the db or setup db -> copy connectn string in .env file
5. Github secrets 
for github secret -> go to better auth -> Authenticatn sectn -> github  and copy url provided there
-> then visit to github -> developer settings -> oauth apps 
-> create app there copy that url in callbac url and localhost url inside homepage url and register applicatn
-> after creating app, copy client id and paste inside .env 
-> also generate github secret there and cpy them in env file

6. Google secrets
Visit to google cloud console -> console at top right -> create a project -> Api keys and Services -> Enable Api keys -> Create Credientials -> Outh client id -> auth screening
-> Now create client id by using homepage url and better auth google authenticatn url -> and cpy client id and secrets

7. As we are using prisma for db so install it as:
npm install -D prisma
npm i @prisma/client @prisma/adapter-pg pg
npx prisma init -> it generates prisma folder and prisma.schema.ts file

8. create empty lib/db.ts file
npx prisma generate

9. update auth.ts file by using prismaadapter

10. npx auth@latest generate and npx prisma migrate dev

11. Now copy authenticatn methods which we want to use inside auth.ts file

12. Now setup mount handler by creating api folder -> auth folder -> [...all] -> route.ts -> copy code from moute handler step from better auth site

13. Now create client instance which will help you interact with auth service and framewors
Create lib/auth-client.ts file and paste code of instance creatn from better auth site

14. now create lib/auth-guard.ts file and authentctn fn which will be used where you want authenticatn and mae anorther fn use where we don't want authetcatn or where you want user to be logged out(login page) -> they are reusable fns
use them authlayout

15. now setup page.jsx and we are using remote image here so define remote pattern

// To add different components from shadcn run this cmd as: npx shadcn@latest add

16. Now we want to show login page to user once when user is not loged in else user is not able to see login page again till session ends or it explicitly logged out. 

17. So create logout btn component with logout fn and import & use it into page.jsx

18. Create loginwithgoogle and loginwithgithub fn and pass to btn as onclic event by writing yourself or cpying from better auth site in login-form

19. Now creating sigup with email functionality
signup - creating new account
signin - login into previously created account


# Notice that confirmPassword is never sent to Better Auth. It's only used for client-side validation.






# If made changes in schema.prisma file then use these cmds to update
1. npx prisma migrate dev
Creates a migration.
Updates the database schema.
Regenerates Prisma Client.

2. npx prisma generate
Only regenerates the Prisma Client.
It does not:
Create migrations ❌
Update the database ❌
It only updates the generated client in your project.



*/