import React from 'react';
import AuthProvider from '@/contexts/AuthContext';
import './globals.css'
import { cookies } from 'next/headers';
import Authenticated from './Authenticated';

async function getCookie() {
  const token = cookies().get('token')
  return token
}

export default async function RootLayout({ children }) {

  const token = await getCookie()

    return (
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body>
          <AuthProvider>
            <Authenticated />
            {children}
          </AuthProvider>
        </body>
      </html>
    );
}