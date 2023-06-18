import React from "react";
import styles from "./inputs.module.css";

export default function TagsInput({ tags, onKeyUp, onClick }) {
    return (
        <div className={styles.forms__items}>
            <label htmlFor="tags" className={styles.forms__label}>Tags Diskusi</label>
            <div className={styles.tags__wrapper}>
                {tags.map(tag => (
                    <span key={tag.id} className={styles.tag}>
                        <span>{tag.name}</span>
                        <span
                            onClick={() => onClick(tag.id)}
                            className={styles.close}
                        >
                            &times;
                        </span>
                    </span>
                ))}
                <input type="text" id="tags" onKeyUp={onKeyUp} placeholder="Enter tags diskusi..." />
            </div>
        </div>
    )
}