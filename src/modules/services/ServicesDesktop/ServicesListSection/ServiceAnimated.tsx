import Project from '#/assets/photos/project-1.png'
import Service from '#/components/Service'
import { ServiceData } from '#/data/types'
import clsx from 'clsx'
import { motion, MotionValue, useTransform } from 'framer-motion'
import React, { useCallback } from 'react'

interface Props {
  idx: number
  service: ServiceData
  progress: MotionValue<number>
  offset: number
  length: number
}

export default function ServiceAnimated({
  progress,
  idx,
  service,
  offset,
  length,
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
    const currentOffset = getOffset(latest)
    if (currentOffset > offset || currentOffset < -offset) return 0
    return 1 - Math.abs(currentOffset / offset)
  })

  return (
    <motion.div
      key={idx}
      className={clsx('absolute w-full h-full')}
      style={{ y, opacity }}>
      <Service {...service} image={Project} number={idx + 1} />
    </motion.div>
  )
}
