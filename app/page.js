import LogIn from "@/components/LogIn";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession();
  if (session) redirect("/dashboard");
  return (
    <div>
      <LogIn />
    </div>
  );
}
