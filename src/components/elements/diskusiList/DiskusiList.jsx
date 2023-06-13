"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import api from "@/api";


export default async function DiskusiList({diskusi}) {
    const [forums, setForums] = useState(diskusi)
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(0)
    const [rows, setRows] = useState(0)

    useEffect(() => {
        const getForums = async () => {
            const req = await api.get(`/forums?page=${page}&limit=10`)
            setForums(req.data)
            setRows(req.data.metadata.totalRows)
            setPages(req.data.metadata.totalPage)
        }

        getForums()
    }, [page, pages])

    function handlePrev(page) {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    function handleNext(page) {
        if (page < pages) {
            setPage(page + 1)
        }
    }
    
    return (
        <div className={styles.diskusi__wrapper}>
            {!forums?.data ? (
                <div className={styles.diskusi__emty}>
                    <p>Diskusi masih kosong, yuk buat diskusi</p>
                </div>
            ) : (
                    forums?.data?.map((diskusi) => (
                        <div key={diskusi?.id} className={styles.diskusi__list}>
                            <div className={styles.diskusi__list_title}>
                                <Link href={`/diskusi/${diskusi?.id}/${diskusi?.slug}`}>
                                    <p>{diskusi?.title}</p>
                                </Link>
                            </div>
                            <div className={styles.diskusi__list_detail}>
                                <div className={styles.tags__wrap}>
                                    {diskusi.tags.map(tag => (
                                        <Link key={tag?.id} href={`/tags/${tag?.id}`}>
                                            <span className={styles.diskusi__tags}>
                                                {tag?.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
            )}

            <div className={styles.pagination__wrapper}>
                <button onClick={() => handlePrev(page)} className={page == 1 ? styles.pagination__button_disable : styles.pagination__button}>prev</button>
                <div className="">{page} dari {pages}</div>
                <button onClick={() => handleNext(page)} className={page == pages ? styles.pagination__button_disable : styles.pagination__button}>next</button>
            </div>
        </div>
    )
}