import Service, { ServiceProps } from '#/components/Service'
import clsx from 'clsx'
import { motion, MotionValue, useTransform } from 'framer-motion'
import React, { useCallback } from 'react'

interface Props extends Omit<ServiceProps, 'number'> {
  idx: number
  progress: MotionValue<number>
  offset: number
  length: number
  animateOpacity?: boolean
}

export default function ServiceAnimated({
  progress,
  idx,
  offset,
  length,
  animateOpacity = false,
  ...props
}: Props) {
  const getOffset = useCallback(
    (latest: number) => {
      const originalPosition = idx
      const topOffset = latest * (length - 1)
      return (originalPosition - topOffset) * offset
    },
    [offset, idx, length]
  )

  const y = useTransform(progress, getOffset)
  const opacity = useTransform(progress, (latest) => {
    if (!animateOpacity) return 1
    const currentOffset = getOffset(latest)
    if (currentOffset > offset || currentOffset < -offset) return 0
    return 1 - Math.abs(currentOffset / offset)
  })

  return (
    <motion.div
      key={idx}
      className={clsx('absolute w-full h-full')}
      style={{ y, opacity }}>
      <Service {...props} image='' number={idx + 1} />
    </motion.div>
  )
}
