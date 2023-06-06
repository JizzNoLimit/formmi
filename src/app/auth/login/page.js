import React from "react";
import LoginContent from "./LoginContent";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {

    const token = cookies().get('token')

    if (token) redirect('/')

    return (
        <LoginContent />
    )
}