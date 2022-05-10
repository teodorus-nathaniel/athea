import Project from '#/assets/photos/project-1.png'
import Service, { ServiceProps } from '#/components/Service'
import clsx from 'clsx'
import { motion, MotionValue, useTransform } from 'framer-motion'
import React, { useCallback } from 'react'

interface Props extends Omit<ServiceProps, 'number'> {
  idx: number
  progress: MotionValue<number>
  offset: number
  length: number
}

export default function ServiceAnimated({
  progress,
  idx,
  offset,
  length,
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

  return (
    <motion.div
      key={idx}
      className={clsx('absolute w-full h-full')}
      style={{ y }}>
      <Service {...props} image={Project} number={idx + 1} />
    </motion.div>
  )
}
