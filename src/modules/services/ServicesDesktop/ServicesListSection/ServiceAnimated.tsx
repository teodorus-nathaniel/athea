import Project from '#/assets/photos/project-1.png'
import Service from '#/components/Service'
import { ServiceData } from '#/data/types'
import clsx from 'clsx'
import { motion, MotionValue, useTransform } from 'framer-motion'
import React from 'react'

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
  const y = useTransform(progress, (latest) => {
    const originalPosition = idx
    const topOffset = latest * (length - 1)
    return (originalPosition - topOffset) * offset
  })

  return (
    <motion.div
      key={idx}
      className={clsx('absolute w-full h-full')}
      style={{ y }}>
      <Service {...service} image={Project} number={idx + 1} />
    </motion.div>
  )
}
