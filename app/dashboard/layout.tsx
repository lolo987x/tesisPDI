"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { AppSidebar } from "@/components/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Bell, CircleUser } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="flex min-h-screen flex-col bg-[#f8f9fa]">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-100 bg-white px-6 shadow-sm">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1 text-slate-500 hover:bg-slate-100" />
          </div>

          <div className="flex items-center gap-5">
            <button className="rounded-full p-1.5 text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#0f3087]">
              <CircleUser className="h-5 w-5 stroke-[1.8]" />
            </button>

            <button className="relative rounded-full p-1.5 text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#0f3087]">
              <Bell className="h-5 w-5 stroke-[1.8]" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#002884]" />
            </button>

            <span className="text-xs font-semibold tracking-tight text-slate-700">
              Admin User
            </span>

            <button
              onClick={handleLogout}
              className="text-xs font-bold text-blue-600 transition-all hover:text-blue-800 hover:underline"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="flex-1 p-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}