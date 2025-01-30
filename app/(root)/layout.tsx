import { ReactNode } from "react";
import Header from "@/components/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    //If something goes wrong with the styles print "bg-dark-100" to the root-container class
    <main className={"root-container"}>
      <div className={"mx-auto max-w-7xl"}>
        <Header />
        <div className={"mt-20 pb-20"}>{children}</div>
      </div>
    </main>
  );
};
export default Layout;
