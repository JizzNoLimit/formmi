"use client"
import React, { useEffect, useState } from "react";
// import Editor from "@/components/editor/Editor";
import styles from "./style.module.css";
import Editor from "@/components/editor/Editor";
import TagsInput from "@/components/elements/inputs/TagsInputs";
import api from "@/api";
import { useRouter } from "next/navigation";


export default function FormDiskusi({userId}) {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    
    const [values, setValues] = useState({
        title: '',
        tags: [],
        desk: ''
    })
    

    async function handleSubmit() {
        try {
            setLoading(true)
            const data = {
                user_id: parseInt(userId),
                title: values?.title,
                tags: values?.tags,
                desk: values?.desk
            }
    
            await api.post('/forums', data)
            setLoading(false)
            router.push('/')
        } catch (error) {
            setLoading(false)
        }
    }

    const handleChange = (desk) => {
        setValues({...values, desk})
    }

    const handleTagsChange = (e) => {
        if (e.keyCode == 13 && e.target.value !== '' && e.target.value !== ' ' && e.target.value !== '  ' ) {
            setValues({...values, 
                tags: [...values.tags, {
                    id: e.target.value,
                    name: e.target.value
                }]
            })
            e.target.value = ''
        } else if (e.keyCode == 8 && !e.target.value) {
            setValues({ ...values,
                tags: values?.tags.filter(tag => tag.id !== values?.tags[values.tags.length - 1]?.id)
            })
        }
    }

    const removeTags = indexRemove => {
        setValues({ ...values,
            tags: values?.tags.filter((tag) => tag.id !== indexRemove)
        })
    }

    return (
        <div className={styles.form__warp}>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className={styles.forms__items}>
                    <label htmlFor="title" className={styles.forms__label}>Judul Diskusi</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        autoComplete="on"
                        placeholder="Bagaimana supaya jago koding?"
                        className={styles.forms__inputs}
                        onChange={(e) => setValues({...values, title: e.target.value})}
                    />
                </div>

                <TagsInput
                    tags={values.tags} 
                    onClick={removeTags}
                    onKeyUp={handleTagsChange} 
                />
                
                <div className={styles.forms__items}>
                    <label className={styles.forms__label}>Isi Diskusi</label>
                    <Editor 
                        value={values.desk}
                        onChange={handleChange}
                    />
                </div>
                <button 
                    disabled={!values?.title || !values?.tags || !values?.desk} 
                    onClick={() => handleSubmit()} className={!values?.title || !values?.tags || !values?.desk ? styles.diskusiBtn_disable : styles.diskusiBtn}
                >
                    {loading ? 'Loading...' : 'Buat Diskusi'}
                </button>
            </form>

            
        </div>
    );
}