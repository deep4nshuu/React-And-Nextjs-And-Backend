import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import {prisma} from '@/lib/db'
import { polar, checkout, portal, usage, webhooks } from "@polar-sh/better-auth"; 
import { Polar } from "@polar-sh/sdk"; 

// server have 2 val as: productn & sandbox
const polarClient = new Polar({ 
    accessToken: process.env.POLAR_ACCESS_TOKEN, 
    server: 'sandbox'
}); 



export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),

  socialProviders: { 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID as string, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
    }, 
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }
  }, 

  emailAndPassword: { 
    enabled: true, 
  },

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

});

// it will automatically create a customer inside polar whenevr user signup