
import { UserProvider } from '../context/Context'
import Head from 'next/head';

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}



export default function RootLayout({ children }) { 
  return (
    <html lang="en">
    
    
    <Head>   

                    <link rel="icon" href="/logo-main.svg" />

        

                    <link rel='apple-touch-icon' href='/logo-main.svg' />

                    <meta name="theme-color" content="#1D0F4A" />

                    <meta name="msapplication-navbutton-color" content="#1D0F4A" />

                    <meta name="apple-mobile-web-app-status-bar-style" content="#1D0F4A" />

                    <meta name="description" content="Sistema de Administracion de Clientes y Formularios" />

                    <meta name="keywords" content="Logistics Gear" />

                    <meta name="author" content="Logistics Gear" />
    <title>Precio Justo</title>

                </Head>
    
    
    
      <body className={inter.className}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  )
}


