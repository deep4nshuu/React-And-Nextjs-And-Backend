import CardForm from "@/components/card-form";
import CardList from "@/components/card-list";


export default function Home() {
  return (
    <div>
      <main>
        <h1>User Cards</h1>
        <section>
          <CardList />
          <CardForm  />
        </section>
      </main>
    </div>
  );
}



/*


Step1:
install drizzle with neon db as : npm i drizzle-orm @neondatabse/serverless
npm i-D driver-kit

Step2:
Set up Neon db connectn by making new project and importing connectn string in .env 

Step3:
create db schema in lib/db/schema.ts which also create table in neon db 

Step4:
create connectn in db/index.ts file

Step5:
now make drizzle folder and create separate file of drizzle.config.ts in root folder to setup drizzle kit by running cmd as:
npx drizzle-kit generate and npx drizzle-kit push

Step6:
Now create CRUD operatn using server actn


*/