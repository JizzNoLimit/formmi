import { NavbarClient } from "@/components/navbar/Navbar";
import { SidebarAdmin } from "@/components/sidebar/Sidebar";
import styles from "./admin.module.css"


export default function Layout({children}) {
    return (
        <main className={styles.layout}>
            <NavbarClient />
            <div className={styles.layout__container}>
                <aside className={styles.sidebar}>
                    <SidebarAdmin />
                </aside>
                <section className={styles.content}>
                    {children}
                </section>
            </div>
        </main>
    );
}