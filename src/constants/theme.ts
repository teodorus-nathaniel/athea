import clsx from 'clsx'

export type ThemeTypes = 'light' | 'dark'
export const themeClassNames: { [key in ThemeTypes]: string } = {
  light: clsx('text-black bg-white'),
  dark: clsx('text-gray-300 bg-black'),
}

export const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'] as const
