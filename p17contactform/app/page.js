import { createContact } from "@/action/contact";
import ContactForm from "@/components/contact-form";
import { connectDB } from "@/lib/db";

export default async function Home() {

  await connectDB()

  return (
    <>
      <ContactForm action={createContact} />
    </>
  );
}
