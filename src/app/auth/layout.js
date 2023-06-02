import styles from "./Auth.module.css"

export default function AuthLayout({children}) {
    return (
      <main className={styles.login__layout}>
        {children}
      </main>
    );
  }