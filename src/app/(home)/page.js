import styles from "./Home.module.css"
import api from "@/api"
import DiskusiList from "@/components/elements/diskusiList/DiskusiList"

export default function Page() {
    return (
    <>
        <section className={styles.home__content}>
            <header className={styles.home__content_header}>
                
            </header>
            
            <DiskusiList />
        </section>
        <section className={styles.boarding}>
            <h1>Hello world</h1>
        </section>
    </>
    )
}