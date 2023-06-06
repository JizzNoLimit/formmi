import { NavbarClient } from "@/components/navbar/Navbar";
import { SidebarClient } from "@/components/sidebar/Sidebar";
import styles from "./Home.module.css"


export default function Layout({children}) {
    return (
        <main className={styles.layout}>
            <NavbarClient />
            <section className={styles.layout__container}>
                <aside className={styles.sidebar}>
                    <SidebarClient />
                </aside>
                <section className={styles.content}>
                    {children}
                </section>
            </section>
        </main>
    );
}