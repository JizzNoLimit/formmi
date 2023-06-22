"use client"
import Link from "next/link";
import styles from "./style.module.css";

export default function Diskusi({diskusi}) {

    function TimeAgo(now, createAt) {
        let msPerMinute = 60 * 1000
        let msPerHour = msPerMinute * 60
        let msPerDay = msPerHour * 24
        let msPerMonth = msPerDay * 30
        let msPerYear = msPerDay * 365

        let elapsed = parseInt(now) - parseInt(createAt * 1000)

        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' detik yang lalu'
        } else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' menit yang lalu'
        } else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' jam yang lalu'
        } else if (elapsed < msPerMonth) {
            return Math.round(elapsed / msPerDay) + ' hari yang lalu'
        } else if (elapsed < msPerYear) {
            return Math.round(elapsed / msPerMonth) + ' bulan yang lalu'
        } else {
            return Math.round(elapsed / msPerYear) + ' tahun yang lalu'
        }
    }

    return (
        <div className={styles.diskusi__wrapper}>
            <section className={styles.diskusi__header}>
                <h2 className={styles.diskusi__header_title}>{diskusi?.data.title}</h2>
                <time>Dibuat: {TimeAgo(Date.now(), diskusi?.data.created_at)}</time>
            </section>
            <article className="quil-content" dangerouslySetInnerHTML={{ __html: diskusi.data.desk }} />
            <div className={styles.tags__wrap}>
                {diskusi?.data.tags.map(tag => (
                    <Link key={tag?.id} href={`/tags/${tag?.id}`}>
                        <span className={styles.diskusi__tags}>
                            {tag?.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}