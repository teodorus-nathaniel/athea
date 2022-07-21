import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, HTMLProps } from 'react'

export interface ModalProps extends HTMLProps<HTMLDivElement> {
  isOpen: boolean
  handleClose: () => void
}

export default function Modal({
  handleClose,
  isOpen,
  className,
  ...props
}: ModalProps) {
  return (
    <Transition show={isOpen} appear as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-90' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel
                className={clsx(
                  'transform overflow-hidden p-6 align-middle transition-all',
                  className
                )}
                {...props}
                as='div'
              />
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
