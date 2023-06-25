"use client"
import Link from "next/link";
import styles from "./style.module.css";
import TimeAgo from "@/lib/timeAgo";

export default function Diskusi({diskusi}) {

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