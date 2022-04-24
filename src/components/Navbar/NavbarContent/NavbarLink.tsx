import Link, { LinkProps } from '#/ui/Link'
import clsx from 'clsx'
import { BsFillCaretRightFill } from 'react-icons/bs'

interface Props extends LinkProps {
  href: string
  text: string | JSX.Element
  isActive: boolean
}

export default function NavbarLink({
  href,
  text,
  isActive,
  className,
  ...props
}: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        'text-xl uppercase tracking-widest',
        'ml-5 relative',
        isActive ? 'text-white font-serif font-bold' : 'text-gray-500',
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
