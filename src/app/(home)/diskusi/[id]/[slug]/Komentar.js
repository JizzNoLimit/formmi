"use client"
import Editor from "@/components/editor/Editor";
import styles from "./style.module.css";
import { useState } from "react";
import TimeAgo from "@/lib/timeAgo";
import api from "@/api";

export default function Komentar({komentar, count}) {
    const [koment, setKoment] = useState('')
    const [reply, setReply] = useState('')
    const [balas, setBalas] = useState(0)

    const handleChange = (desk) => {
        setKoment(desk)
    }

    const handleBalas = (id) => {
        setBalas(id)
    }

    const handleBatal = () => {
        setBalas(0)
    }

    const handleChangeBalas = (e) => {
        setReply(e.target.value)
    }

    const handleSubmitReply = async (id) => {
        try {
            const koment = {
                parent_id: id
            }

            await api.post('/komentar', koment)
        } catch (error) {
            console.log(error)
        }
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

                        <div className={balas == 0 || parseInt(koment?.id) != balas ? `${styles.none}` : `${styles.komentar__balas}`}>
                            <textarea 
                                placeholder="Tulis balasan komentar..."
                                className={styles.komentar__balas_input}
                                onChange={(e) => handleChangeBalas(e)}
                            />
                            <div className={styles.komentar__balas_btn}>
                                <button 
                                    onClick={() => handleBatal()}
                                    className={styles.komentar__balas_btn_batal}
                                >
                                    Batal
                                </button>
                                <button 
                                    onClick={() => handleSubmitReply(koment?.id)} 
                                    className={styles.komentar__balas_btn_kirim}
                                >
                                    Kirim
                                </button>
                            </div>
                        </div>
                            <button
                                onClick={() => handleBalas(koment?.id)}
                                className={balas == 0 || parseInt(koment?.id) != balas ? `${styles.komentar__btn}` : `${styles.none}`}
                            >
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '23px', fill: 'green', marginTop: '6px' }}>
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                Ballas Komentar
                            </button>
                        {koment?.reply.length === 0 ? '' : (
                            koment?.reply.map(reply => (
                                <div key={reply?.id} className={styles.reply__list}>
                                    <div className={styles.reply__user}>
                                        <div className={styles.reply__user_img}></div>
                                        <div>
                                            <p>{reply?.username}</p>
                                            <span className={styles.reply__aktivitas}>Dibalas {TimeAgo(Date.now(), reply?.created_at)}</span>
                                        </div>
                                    </div>
                                    <div className={styles.reply__konten}>{reply?.konten}</div>
                                </div>
                            ))
                        )}
                    </div>
                ))}
           
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