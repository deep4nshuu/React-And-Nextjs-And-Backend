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
1. install auth
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
npm prisma init -> it generates prisma folder and prisma.schema.ts file

8. create lib/db.ts file
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

16. Now we want to show login page to user once when user is not loged in else user is not able to see login page again till session ends or it explicitly logged out. 

17. So create logout btn component with logout fn and import & use it into page.jsx

18. Create loginwithgoogle and loginwithgithub fn and pass to btn as onclic event by writing yourself or cpying from better auth site in login-form

19. Now creating sigup with email functionality
signup - creating new account
signin - login into previously created account


# Notice that confirmPassword is never sent to Better Auth. It's only used for client-side validation.


clerk is a complete user mangmnt platform that can save all user data stuff





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





# Polar code
1. for page.jsx below is code
2. for pricing card only this code in handlesubs fn ->
await authClient.checkout({
  slug:'pro'
})
3. Code in auth.ts as :
plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products:[
            {
              productId: '00e87ae4-9089-4dbf-954d-083e875e96c5',
              slug: 'pro'
            }
          ],
          successUrl: '/',
          authenticatedUsersOnly: true
        })
      ]
    })
]
4. Polar access toen in env file
5. Plugin in auth-client


<Image src={user.image!} alt="userimage" className="object-contain rounded-full" height={70} width={70} />
      <h2 className="text-3xl font-bold mt-5">{user.name}</h2>
      <p className="text-xl font-semibold text-zinc-200">{user.email}</p>

      <div className="flex flex-col justify-center items-center gap-10 space-y-2">
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
      <LogoutButton />










ROUTE.TS OLDER CODE:

import { stripeClient } from "@/lib/stripe";
import {prisma} from '@/lib/db'
import { STRIPE_PRICE_IDS } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth-guard";
import Stripe from "stripe";
import { headers } from "next/headers";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request:NextRequest){
    try {
        const body = await request.text()
        const headerList = await headers()
        const signature = headerList.get('stripe-signature') as string;

        let event: Stripe.Event;

        try {
            event = stripeClient.webhooks.constructEvent(
                body,
                signature,
                webhookSecret as string
            )   
        } catch (error) {
            console.log("Webhook signature verification failed", error);
            return NextResponse.json({error: 'Invalid Signature'},{status: 400})
        }

        switch(event.type){
            case "checkout.session.completed": {
                const session = event.data.object as Stripe.Checkout.Session;

                const userId = session.metadata?.userId;
                const priceId = session.metadata?.priceId;

                if(!userId || !priceId || !session.subscription) break;

                const subscription = await stripeClient.subscriptions.retrieve(
                    session.subscription as string
                )

                await prisma.user.update({
                    where: {id: userId},
                    data: {
                        stripeSubscriptionId: subscription.id,
                        stripePriceId: priceId,
                        stripeCurrentPeriodEnd: new Date(
                            subscription.items.data[0].current_period_end*1000
                        ),
                        plan: priceId === 'premium' ? 'PREMIUM' : "FREE"
                    }
                })
                break;
            }

            case "customer.subscription.updated": {
                const subscription = event.data.object as Stripe.Subscription
                const customerId = subscription.customer as string;

                const user = await prisma.user.findFirst({
                    where: {stripeCustomerId: customerId}
                })

                if(!user) break;

                // derive plan from Stripe(not db)
                const priceId = subscription.items.data[0]?.price.id

                const isActive = subscription.status === 'active'

                await prisma.user.update({
                    where: {id: user.id},
                    data: {
                        stripePriceId: priceId,
                        stripeCurrentPeriodEnd: new Date(
                            subscription.items.data[0].current_period_end*1000
                        ),
                        plan: isActive && priceId === 'premium' ? 'PREMIUM' : "FREE"
                    }
                })
                break;
            }

            case 'customer.subscription.deleted': {
                const subscription = event.data.object as Stripe.Subscription
                const customerId = subscription.customer as string;

                const user = await prisma.user.findFirst({
                    where: {stripeCustomerId: customerId}
                })

                if(!user) break;

                await prisma.user.update({
                    where: {id: user.id},
                    data: {
                        stripeSubscriptionId: null,
                        stripePriceId: null,
                        stripeCurrentPeriodEnd: null,
                        plan: "FREE"
                    }
                })
                break;
            }

            default:
                console.log(`Unhandled event: ${event.type}`)
        }

        return NextResponse.json({received: true})
    }

    // listen multiple events on the basis of condn
    catch (error) {
        console.log("Error processing Webhook", error);
        return NextResponse.json({error: 'Error processing Webhook'},{status: 500})
    }
}




*/