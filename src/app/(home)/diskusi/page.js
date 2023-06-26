import styles from './style.module.css'
import Boarding from "@/components/elements/boarding/Boarding";

export default function Page() {
    return (
        <>
            <section className={styles.home__content}>
                Helo diskusi
            </section>

            <Boarding />
        </>
    )
}