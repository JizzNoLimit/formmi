import { NavbarClient } from "@/components/navbar/Navbar";
import { SidebarClient } from "@/components/sidebar/Sidebar";
import styles from "./layout.module.css"


export default function AuthLayout({children}) {
    return (
        <main className={styles.layout}>
            <NavbarClient />
            <div className={styles.layout__container}>
                <aside className={styles.sidebar}>
                    <SidebarClient />
                </aside>
                <section className={styles.content}>
                    {children}
                </section>
            </div>
        </main>
    );
}