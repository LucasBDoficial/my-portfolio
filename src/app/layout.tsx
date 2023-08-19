import './globals.css';
import { Montserrat } from 'next/font/google';

import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { Header } from '@/app/components/Header'
import { Navbar } from './components/Navbar';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Portfólio de Lucas Bucalon dev',
  keywords:'portfólio, desenvolvedor, designer, react, trabalho',
  classification:'trabalho',
  category:'desenvolvedor',
  creator:'Lucas Bucalon',
}

export default function RootLayout({children,}:{children: ReactNode}) {
  return (

    <html lang="pt-br" className='root'>      
      <head>
        <link rel="author" href="" />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, nofollow" />

        <link rel="dns-prefetch" href="" /> 
        <link rel="preconnect" href="" />
      </head>

      <body className={montserrat.className}>
        <header>
            <Header />
            <Navbar />
        </header>
        {children}</body>
    </html>
  )
}