import React from "react";
import styles from "./style.module.css"

export default function AuthLayout({children}) {
    return (
      <main className={styles.login__layout}>
        {children}
      </main>
    );
  }