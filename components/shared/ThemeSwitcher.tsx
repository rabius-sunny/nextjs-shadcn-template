'use client'

import { useIsSSR } from '@react-aria/ssr'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const isSSR = useIsSSR()

  const onChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <button type='button' onClick={onChange}>
      {theme === 'light' || isSSR ? (
        <p className='text-light font-semibold text-sm'>dark</p>
      ) : (
        <p className='text-dark font-semibold text-sm'>light</p>
      )}
    </button>
  )
}
