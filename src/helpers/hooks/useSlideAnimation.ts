import { useCallback, useRef } from 'react'

const OFFSET_X = 100

export type SlideAnimationDir = 'left' | 'right' | ''
export default function useSlideAnimation(offsetX = OFFSET_X) {
  const exitDir = useRef<SlideAnimationDir>('')

  let exitX = 0
  if (exitDir.current === 'left') {
    exitX = -offsetX
  } else if (exitDir.current === 'right') {
    exitX = offsetX
  }

  const initial = { x: exitX, opacity: 0 }
  const exit = { opacity: 0 }
  const animate = { x: 0, opacity: 1 }

  const setSlideDir = useCallback((dir: SlideAnimationDir) => {
    exitDir.current = dir
  }, [])

  return { initial, exit, animate, setSlideDir }
}
