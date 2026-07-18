import LogoutButton from '@/components/logout-btn';
import { requireAuth } from "@/lib/auth-guard";
import Image from "next/image";

export default async function Home() {

  const session = await requireAuth()

  const {user} = session;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <div className="flex flex-col justify-center items-center gap-5 space-y-2">
        <Image src={user.image!} alt="userimage" className="object-contain rounded-full" height={70} width={70} />
        <h2 className="text-3xl font-bold">{user.name}</h2>
        <p className="text-xl font-semibold text-zinc-200">{user.email}</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-6 space-y-2">
        <LogoutButton />
      </div>
    </div>
  );
}

// 1 acelo syp, 1 clobet, 6dsr, 6sp,6omna5mg, 3supradine, 1betadine

/*


1. signin on razorpay and go to accnt/settings -> api's -> generate secret and ey -> cpy and paste them in env file
2. add plan field in schema -> migrate -> generate
3. npm i razorpay

# user clic on mae payment -> 1. create a order -> 2. verify order using order id and create checout which will verify nd update data 

4. create api/razorpay/create-order/route.ts and razorpay/verify 

5. in create-order route create order 
6. in pricing card compon, verify order

*/