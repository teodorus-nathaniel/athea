import HeadphoneIcon from '#/assets/icon-images/headphone.png'
import SoundOffIcon from '#/assets/icon-images/sound-off.png'
import SoundOnIcon from '#/assets/icon-images/sound-on.png'
import Headline from '#/assets/ui/headline.png'
import Layout from '#/components/layouts/Layout'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import Button from '#/ui/Button'
import ImageContainer from '#/ui/ImageContainer'
import Modal from '#/ui/Modal'
import Text from '#/ui/Text'
import clsx from 'clsx'
import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'

const isVideoPlaying = (video: HTMLVideoElement | null) =>
  video &&
  !!(
    video.currentTime > 0 &&
    !video.paused &&
    !video.ended &&
    video.readyState > 2
  )

const Home: NextPage = () => {
  const [openOverlay, setOpenOverlay] = useState(true)
  const mdUp = useBreakpointThreshold('md')
  const [isVideoMuted, setIsVideoMuted] = useState(false)
  const [videoName, setVideoName] = useState('')
  useEffect(() => {
    setVideoName(`/videos/teaser${mdUp ? '' : '-portrait'}`)
    if (isVideoPlaying(videoRef.current)) {
      videoRef.current?.pause()
      videoRef.current?.load()
      videoRef.current?.play()
    }
  }, [mdUp])

  const videoRef = useRef<HTMLVideoElement | null>(null)

  function closeModal() {
    setOpenOverlay(false)
    videoRef.current?.load()
    videoRef.current?.play()
  }

  return (
    <Layout
      meta={{ title: 'Homepage' }}
      theme='dark'
      mobileFooter
      mobileFooterTitle
    >
      <Modal
        className={clsx('flex flex-col', 'items-center', 'text-white')}
        isOpen={openOverlay}
        handleClose={closeModal}
      >
        <div className='w-12'>
          <ImageContainer src={HeadphoneIcon} aspectRatio='1:1' />
        </div>
        <Text className='mt-4 text-lg'>
          Please use{' '}
          <Text serif bold>
            earphone
          </Text>{' '}
          for
          <br />
          the{' '}
          <Text serif bold>
            better experience
          </Text>
        </Text>
        <Button
          onClick={closeModal}
          type='outline'
          className={clsx(
            'text-white',
            'text-sm uppercase',
            'px-10',
            'mt-8',
            'hover:bg-gray-600'
          )}
        >
          <Text serif bold>
            Begin
          </Text>
        </Button>
      </Modal>
      <div className={clsx('w-full h-screen relative mb-8')}>
        <video
          playsInline
          loop
          className={clsx(
            'absolute w-full h-full top-0 left-0',
            'object-cover'
          )}
          muted={isVideoMuted}
          ref={videoRef}
        >
          <source src={`${videoName}.webm`} type='video/webm' />
          <source src={`${videoName}.mp4`} type='video/mp4' />
        </video>
        <div
          className={clsx('absolute w-full h-full', 'bg-black opacity-30')}
        />
        <div
          className={clsx(
            'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
            'w-full max-w-screen-lg px-12'
          )}
        >
          <img
            className='w-full'
            src={Headline.src}
            alt='A collective of passionate souls'
          />
        </div>
        <div
          className={clsx(
            'absolute right-16 bottom-12',
            'flex items-center',
            'space-x-2 cursor-pointer',
            'transition duration-75',
            'hover:scale-105 focus:scale-105'
          )}
          onClick={() => setIsVideoMuted((prev) => !prev)}
        >
          <div className='w-8'>
            <ImageContainer
              src={isVideoMuted ? SoundOnIcon : SoundOffIcon}
              aspectRatio='1:1'
            />
          </div>
          <Text className='uppercase'>
            Audio{' '}
            <Text serif bold>
              {isVideoMuted ? 'On' : 'Off'}
            </Text>
          </Text>
        </div>
      </div>
    </Layout>
  )
}

export default Home
