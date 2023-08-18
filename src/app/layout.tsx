import './globals.css';
import { Montserrat } from 'next/font/google';

import { ReactNode } from 'react';
import type { Metadata } from 'next';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'testes',
  description: 'Generated by create next app',
  keywords:'',
  classification:'',
  category:'',
  creator:'',
}

export default function RootLayout({children,}:{children: ReactNode}) {
  return (

    <html lang="pt-br" className=''>      
      <head>
        <link rel="author" href="url do meu portefolio" />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, nofollow" />

        <link rel="dns-prefetch" href="" /> 
        <link rel="preconnect" href="" />
      </head>

      <body className={montserrat.className}>{children}</body>
    </html>
  )
}