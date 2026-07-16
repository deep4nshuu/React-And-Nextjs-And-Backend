import { createUser, getAllUsers } from "@/actions/action";

export default async function Home() {
  const data = await getAllUsers();
  console.log(data);

  return (
    <div>
      <h1>Create user</h1>

      <form action={createUser}>
        <input
          type="text"
          name="name"
          placeholder="Enter name..."
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Enter email..."
          required
        />

        <button type="submit">Create user</button>
      </form>
    </div>
  );
}






/*



1. first thing when you work with prisma, you need to make schema 
2. configure the database connection in prisma.config file 
3. run prisma migration to create the database tables or to convert schema into raw sql file
4. query with prisma client to perform CRUD operations on the database tables

// Whenevr you want to make specific field as their id, use @id attribute in the schema. 
// @default attribute is used to set default value for the field. and if we want to make any field optional, we can use ? after the field name.

install prisma 
-> npm i @prisma/client @prisma/adapter-pg pg -> 
why we use 'npx prisma init'  not 'npx prisma@latest init' as we don't want to install the latest version of prisma, we want to install the version which is compatible with our project.

1. Always create model inside schema.prisma file
Models represent the entities of your application domain. They are defined using model blocks in the data model.
2. now sync prisma schema with db -> by running 'npx prisma migrate dev' cmd to create migratn
Always while making migratn, close curr run app, then do error free
3. create db file in lib folder to query 
4. now while querying with client, generate prisma client by running 'npx prisma generate' cmd. This will generate the client in node_modules/@prisma/client folder.
5. now create server actn to create user using prisma client props
6. now make post model in schema.prisma
# Always after creating model run migratn cmd after closing terminal
*/