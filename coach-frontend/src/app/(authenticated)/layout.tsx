"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DefaultLayout } from "@/shared/Layouts";
import { LayoutProps } from "@/shared/types/common";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const [token, setToken] = useState<string | null>()

  // useEffect(() => {
  //   const token = localStorage.getItem("token")
  //   setToken(token)
  //   if (!token) {
  //     // Redirect to SignIn page if there's no token
  //     router.push("/signin");
  //   }
  // }, [router]);

  // if (token === null) {
  //   return (
  //     <></>
  //   )
  // }

  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  );
};

export default Layout;
