"use client"
import Editor from "@/components/editor/Editor";
import styles from "./style.module.css";
import { useState } from "react";
import TimeAgo from "@/lib/timeAgo";

export default function Komentar({komentar, count}) {
    const [koment, setKoment] = useState()

    const handleChange = (desk) => {
        setKoment(desk)
    }

    return (
        <div className={styles.komentar__wrapper}>
            <span className={styles.komentar__header}>{count} Komentar</span>
                {komentar?.data.map(koment => (
                    <div key={koment?.id} className={styles.komentar__list} >
                        <div className={styles.koment__user}>
                            <div className={styles.koment__user_img}></div>
                            <div>
                                <p>{koment?.username}</p>
                                <span className={styles.koment__user_role}>{koment?.role}</span>
                            </div>
                        </div>
                        <span className={styles.komentar__aktivitas}>Komentar {TimeAgo(Date.now(), koment?.created_at)}</span>
                        <div className={styles.koment__konten}>{koment?.konten}</div>
                        <div className={styles.komentar__balas}>
                            <button className={styles.komentar__balas_btn}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '23px', fill: 'green', marginTop: '6px' }}>
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                Ballas Komentar
                            </button>
                        </div>
                    </div>
                ))}
            {/* <div className={styles.komentar__list}>
            </div> */}
            <div>
                <span>Komentar kamu</span>
                <Editor 
                    value={koment}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}