"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Layouts/Sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex w-full min-h-screen bg-gray-bg">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex-1">

          <main className="h-[calc(100%-32px)]">
            <div className="mx-auto h-full">
              {children}
            </div>
          </main>
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
    </>
  );
}
