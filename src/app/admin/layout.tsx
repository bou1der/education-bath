import { redirect } from "next/navigation";
import type React from "react";
import { Sidebar } from "./sidebar";
import { AdminHeader } from "./header";
import { auth } from "~/server/auth/auth";
import { headers } from "next/headers";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (session?.user.role !== "admin") {
    redirect("/auth/signin");
  }

  return (
    <div className="w-dvw h-dvh flex gap-6">
      <Sidebar />
      <div className="grow max-h-screen overflow-y-scroll no-scrollbar px-6">
        <AdminHeader />
        {children}
      </div>
    </div>
  );
}
