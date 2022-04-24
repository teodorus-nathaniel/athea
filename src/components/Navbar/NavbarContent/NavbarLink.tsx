import Link from '#/ui/Link'
import clsx from 'clsx'
import { BsFillCaretRightFill } from 'react-icons/bs'

interface Props {
  href: string
  text: string | JSX.Element
  isActive: boolean
}

export default function NavbarLink({ href, text, isActive }: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        'text-xl uppercase tracking-widest',
        'ml-5 relative',
        isActive ? 'text-white font-serif font-bold' : 'text-gray-500'
      )}>
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
