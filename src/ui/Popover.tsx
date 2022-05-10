import { Popover as HeadlessPopover } from '@headlessui/react'
import clsx from 'clsx'
import React, { useState } from 'react'
import { usePopper } from 'react-popper'

export interface PopoverProps {
  button: JSX.Element
  panel: JSX.Element
  containerClassName?: string
  buttonContainerClassName?: string
  panelContainerClassName?: string
}

export default function Popover({
  containerClassName,
  buttonContainerClassName,
  panelContainerClassName,
  button,
  panel,
}: PopoverProps) {
  let [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null)
  let [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null)
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrowRef,
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
  })

  return (
    <HeadlessPopover className={containerClassName}>
      <HeadlessPopover.Button
        className={buttonContainerClassName}
        ref={setReferenceElement}>
        {button}
      </HeadlessPopover.Button>
      <HeadlessPopover.Panel
        style={styles.popper}
        {...attributes.popper}
        ref={setPopperElement}>
        <div
          ref={setArrowRef}
          style={styles.arrow}
          className={clsx('after:bg-gray-200')}
          id='arrow'
        />
        <div
          className={clsx(
            'relative',
            'shadow-md bg-gray-200 text-black',
            'py-2 px-4',
            'rounded-md',
            panelContainerClassName
          )}>
          {panel}
        </div>
      </HeadlessPopover.Panel>
    </HeadlessPopover>
  )
}
