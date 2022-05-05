import clsx from 'clsx'
import { useBreakpointThreshold } from './useBreakpointThreshold'

export default function useHorizontalPadding() {
  const mdUp = useBreakpointThreshold('md')
  return mdUp ? clsx('px-12') : clsx('px-6')
}
