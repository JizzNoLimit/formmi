import Link from "next/link";
import styles from "./style.module.css";
import api from "@/api";


export default async function DiskusiList({diskusi, metadata}) {
    
    return (
        <div className={styles.diskusi__wrapper}>
            <div className={styles.diskusi__header}>
                <div>
                    <h2>Diskusi Teratas</h2>
                    <p><strong>Total:</strong> {metadata?.totalRows} diskusi</p>
                </div>
                <div>
                    <Link href={`/diskusi/buat`}>
                        <button className={styles.diskusi__buatBtn}>Buat</button>
                    </Link>
                </div>
            </div>
            {diskusi.length == 0 ? (
                <div className={styles.diskusi__emty}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.diskusi__emty_icon}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                    </div>
                    <p>Diskusi masih kosong, yuk buat diskusi</p>
                </div>
            ) : (
                    diskusi.map((diskusi) => (
                        <div key={diskusi?.id} className={styles.diskusi__list}>
                            <div className={styles.diskusi__list_title}>
                                <Link href={`/diskusi/${diskusi?.id}/${diskusi?.slug}`}>
                                    <p>{diskusi?.title}</p>
                                </Link>
                            </div>
                            <div className={styles.diskusi__list_desk}>
                                {diskusi?.desk}
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

            {diskusi.length !== 0 ? (
                <div className={styles.pagination__wrapper}>
                    {parseInt(metadata.page) == 1 ? (
                        <button className={styles.pagination__button_disable}>prev</button>
                    ) : (
                        <Link href={{pathname: '/', query: {'page': metadata.page - 1, 'limit': 10}}}>
                            <button className={styles.pagination__button}>prev</button>
                        </Link>
                    )}
                    <div className="">{metadata?.page} dari {metadata?.totalPage}</div>
                    {parseInt(metadata.page) == parseInt(metadata.totalPage) ? (
                        <button className={styles.pagination__button_disable}>next</button>
                    ) : (
                        <Link href={{ pathname: '/', query: { 'page': metadata.page + 1, 'limit': 10 } }}>
                            <button className={styles.pagination__button}>next</button>
                        </Link>
                    )}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}