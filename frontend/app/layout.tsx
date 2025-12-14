import React from 'react'
import './globals.css'
import { Providers } from './providers'
import { WebSocketProvider } from './components/WebSocketProvider'
import GlobalOverlays from './components/GlobalOverlays'

export const metadata = {
  title: 'Etsy Orders',
  description: 'Professional order management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />

        {/* Google Fonts for Unicode Support */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Mono:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Symbols:wght@100..900&family=Noto+Sans+Symbols+2:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-black">
        <Providers>
          <WebSocketProvider>
            {children}
            <GlobalOverlays />
          </WebSocketProvider>
        </Providers>
      </body>
    </html>
  )
}
