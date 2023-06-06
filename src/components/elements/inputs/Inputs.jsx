import React from "react";
import styles from "./inputs.module.css";
import Link from "next/link";

export default function Input(props) {
    const {label, htmlFor, onChange, ...inputProps} = props
    return (
        <div className={styles.forms__items}>
            <label htmlFor={htmlFor} className={styles.forms__label}>{label}</label>
            <input 
                {...inputProps} 
                onChange={onChange}
                autoComplete="on"
                className={styles.forms__inputs} 
            />
            {props.name === 'password' ? (
                <Link href="/"><span className={styles.lupa__password}>Lupa password?</span></Link>
            ) : ''}
        </div>
    )
}