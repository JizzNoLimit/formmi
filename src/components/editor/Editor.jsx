import dynamic from "next/dynamic";
import React, { useMemo } from "react";
// import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

export default function Editor({value, onChange}) {

    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), [])

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code'],
            ['link', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['clean']
        ],
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote', 'code',
        'link', 'code-block',
        'list', 'bullet', 'indent',
        'clean'
    ]


    // console.log(value)
    return (
        <ReactQuill
            name="desk"
            theme="snow" 
            value={value} 
            onChange={onChange} 
            modules={modules}
            formats={formats}
            style={{
                height: '160px', width: '100%',
            }}
        />
    )
}