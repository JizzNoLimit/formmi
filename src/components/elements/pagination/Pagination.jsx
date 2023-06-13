"use client"

import styles from "./style.module.css";

export default function Pagination({page, pages, rows}) {
    return (
        <div className={styles.pagination__wrapper}>
            <button className={styles.pagination__button}>prev</button>
            <div className="">{page}</div>
            <button className={styles.pagination__button}>next</button>
        </div>
    )
}