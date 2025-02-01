import { ReactNode } from "react";
import Header from "@/components/Header";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session) redirect("/sign-in");
  return (
    //If something goes wrong with the styles print "bg-dark-100" to the root-container class
    <main className={"root-container"}>
      <div className={"mx-auto max-w-7xl"}>
        <Header session={session} />
        <div className={"mt-20 pb-20"}>{children}</div>
      </div>
    </main>
  );
};
export default Layout;
