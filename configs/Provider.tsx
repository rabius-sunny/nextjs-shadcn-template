'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

export default function Provider({ children }: IChildren) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      {children}
    </ThemeProvider>
  )
}
