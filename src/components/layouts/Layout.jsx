import { SidebarClient } from "../Sidebar"
import styles from "./index.module.css"

export function LayoutClient( {children} ) {
    return (
        <main className={styles.layout}>
            <aside className={styles.sidebar}>
                <SidebarClient />
            </aside>
            <section className={styles.content}>
                {children}
            </section>
        </main>
    )
}