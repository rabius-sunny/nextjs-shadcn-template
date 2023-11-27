import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import './globals.css'

import Provider from '@/configs/Provider'
import { siteInfo } from '@/configs/site'
import { twMerge } from 'tailwind-merge'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteInfo.name,
    template: `%s - ${siteInfo.name}`,
  },
  description: siteInfo.description,
  authors: siteInfo.authors,
  generator: siteInfo.generator,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang='en'>
      <body
        className={twMerge(
          inter.className,
          'bg-light dark:bg-dark text-dark dark:text-light'
        )}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
