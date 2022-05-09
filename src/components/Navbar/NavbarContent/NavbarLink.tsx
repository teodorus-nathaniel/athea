import { ThemeTypes } from '#/constants/theme'
import Link, { LinkProps } from '#/ui/Link'
import Text from '#/ui/Text'
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
  const activeFontColor = theme === 'dark' ? 'text-gray-100' : 'text-black'
  return (
    <Link
      href={href}
      className={clsx(
        'uppercase tracking-widest text-2xl',
        'ml-4 relative whitespace-nowrap',
        isActive ? `${activeFontColor}` : 'text-gray-500',
        className
      )}
      {...props}>
      <Text serif={isActive} bold={isActive}>
        {text}
      </Text>
      {isActive && (
        <BsFillCaretRightFill
          fontSize='0.8em'
          className={clsx(
            'absolute top-[calc(50%_-_1px)] -translate-y-1/2',
            '-left-5'
          )}
        />
      )}
    </Link>
  )
}
