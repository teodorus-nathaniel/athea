import { breakpoints } from '#/constants/theme'
import { useMemo } from 'react'
import useTailwindBreakpoint from './useTailwindBreakpoint'

/**
 * Determine if current vw (viewport width) larger than threshold. You have to handle case if returned first element returns undefined in SSR.
 * @param threshold breakpoint to become threshold
 * @returns boolean bool that determines if current vw is larger than threshold
 */
export function useBreakpointThreshold(
  threshold: typeof breakpoints[number]
): boolean {
  const breakpoint = useTailwindBreakpoint()
  return useMemo(() => {
    const res: { thresholdIdx: number; breakpointIdx: number } = {
      thresholdIdx: 0,
      breakpointIdx: -1,
    }
    breakpoints.forEach((el, idx) => {
      if (el === breakpoint) res.breakpointIdx = idx
      if (el === threshold) res.thresholdIdx = idx
    })
    return res.thresholdIdx <= res.breakpointIdx
  }, [threshold, breakpoint])
}
