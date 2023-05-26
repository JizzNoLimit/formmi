import React from "react";
import styles from "./index.module.css"
import { NavbarClient } from "../navbar/Navbar";
import { SidebarClient } from "../sidebar/Sidebar";

export function LayoutClient( {children} ) {
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
    )
}