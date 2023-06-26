"use client"
import Editor from "@/components/editor/Editor";
import styles from "./style.module.css";
import { useState } from "react";
import TimeAgo from "@/lib/timeAgo";
import api from "@/api";
import { useRouter } from "next/navigation";

export default function Komentar({komentar, count, user, diskusi_id}) {
    const [koment, setKoment] = useState('')
    const [reply, setReply] = useState('')
    const [balas, setBalas] = useState(0)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

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
            setLoading(true)
            if (!user) {
                router.push('/auth/login')
            } else {
                const koment = {
                    diskusi_id,
                    user_id: user.id,
                    parent_id: id,
                    konten: reply,
                }
    
                await api.post('/komentar', koment)
                setLoading(false)
                setBalas(0)
                setReply('')
                router.refresh()
            }

        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const handleSubmitKomen = async () => {
        try {
            setLoading(true)
            if (!user) {
                router.push('/auth/login')
            } else {
                const data = {
                    diskusi_id,
                    user_id: user.id,
                    konten: koment,
                }

                await api.post('/komentar', data)
                setLoading(false)
                setBalas(0)
                setKoment('')
                router.refresh()
            }
        } catch (error) {
            setLoading(false)
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
                        <div className={styles.koment__konten}>
                            <article className="quil-content" dangerouslySetInnerHTML={{ __html:  koment?.konten }} />
                        </div>

                        <div className={balas == 0 || parseInt(koment?.id) != balas ? `${styles.none}` : `${styles.komentar__balas}`}>
                            <textarea 
                                required
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
                                {reply ? (
                                    <button 
                                        onClick={() => handleSubmitReply(koment?.id)} 
                                        className={styles.komentar__balas_btn_kirim}
                                    >
                                        {loading ? 'Loading...' : 'kirim'}
                                    </button>
                                ) : (
                                    <button 
                                        className={`${styles.komentar__balas_btn_kirim} ${styles.disabled}`}
                                    >
                                        {loading ? 'Loading...' : 'kirim'}
                                    </button>
                                )}
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
           
            <div className={styles.komentar__editor}>
                <span>Komentar kamu</span>
                <Editor 
                    value={koment}
                    onChange={handleChange}
                />
                <button
                    onClick={() => handleSubmitKomen()}
                    className={styles.komentar__btn_kirim}
                >
                    {loading ? 'Loading...' : 'Komentar'}
                </button>
            </div>
        </div>
    )
}