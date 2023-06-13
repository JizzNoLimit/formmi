import styles from "./Home.module.css"
import api from "@/api"
import DiskusiList from "@/components/elements/diskusiList/DiskusiList"

async function getData() {
    const forums = await api.get('forums')
    return forums.data
}

export default async function Page() {
    const forums = await getData()

    return (
    <>
        <section className={styles.home__content}>
            <header className={styles.home__content_header}>
                
            </header>
            
            <DiskusiList diskusi={forums} />

        </section>
        <section className={styles.boarding}>
            <h1>Hello world</h1>
        </section>
    </>
    )
}