export type ThemeTypes = 'light' | 'dark'
export const themeClassNames: { [key in ThemeTypes]: string } = {
  light: 'text-black bg-white',
  dark: 'text-white bg-black',
}
