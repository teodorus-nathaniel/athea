import { ThemeTypes } from '#/constants/theme'
import Link, { LinkProps } from '#/ui/Link'
import clsx from 'clsx'
import { BsFillCaretRightFill } from 'react-icons/bs'

interface Props extends LinkProps {
  href: string
  text: string | JSX.Element
  isActive: boolean
  theme?: ThemeTypes
}

export default function NavbarLink({
  href,
  text,
  isActive,
  className,
  theme = 'dark',
  ...props
}: Props) {
  const activeFontColor = theme === 'dark' ? 'text-white' : 'text-black'
  return (
    <Link
      href={href}
      className={clsx(
        'uppercase tracking-widest',
        'ml-5 relative',
        isActive
          ? `${activeFontColor} text-lg font-serif font-bold`
          : 'text-xl text-gray-500',
        className
      )}
      {...props}>
      {text}
      {isActive && (
        <BsFillCaretRightFill
          fontSize='0.8em'
          className={clsx('absolute top-1/2 -translate-y-1/2', '-left-6')}
        />
      )}
    </Link>
  )
}
