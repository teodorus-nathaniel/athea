import TriangleIcon from '#/assets/icons/triangle-right.svg'
import clsx from 'clsx'
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useTransform,
} from 'framer-motion'
import React from 'react'

interface Props {
  dataCount: number
  linesPerData?: number
  progress: MotionValue<number>
}

export default function ServicesListScrollIndicator({
  dataCount,
  linesPerData = 8,
  progress,
}: Props) {
  const progressPercentage = useTransform(progress, (latest) => latest * 100)
  const y = useMotionTemplate`${progressPercentage}%`

  return (
    <div className={clsx('w-full h-full', 'flex flex-col', 'relative')}>
      <motion.div className={clsx('absolute', '-left-1')} style={{ top: y }}>
        <TriangleIcon
          className={clsx(
            'absolute',
            '-left-1 -translate-x-full -translate-y-1/2'
          )}
        />
      </motion.div>
      {Array.from({ length: (dataCount - 1) * linesPerData + 1 }).map(
        (_, idx, array) => {
          return (
            <div
              key={idx}
              className={clsx(
                'flex',
                idx < array.length - 1 ? 'flex-1' : '',
                'w-full'
              )}>
              <div
                className={clsx(
                  idx % linesPerData === 0 ? 'w-full' : 'w-1',
                  'h-px bg-white'
                )}
              />
            </div>
          )
        }
      )}
    </div>
  )
}
