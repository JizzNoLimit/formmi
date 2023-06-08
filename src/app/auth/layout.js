import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LayoutAuth } from "@/components/layout/Layout";

async function AuthPage() {
  // await authPageAdmin
  const token = cookies().get('token')?.value
  if (token) redirect('/')

  return
}

export default async function AuthLayout({children}) {
  await AuthPage()  
    return (
      <LayoutAuth>
        {children}
      </LayoutAuth>
    );
  }