import React from "react";
import styles from "./style.module.css"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AuthLayout({children}) {
  const token = cookies().get('token')

  if (token) redirect('/')
  
    return (
      <main className={styles.login__layout}>
        {children}
      </main>
    );
  }