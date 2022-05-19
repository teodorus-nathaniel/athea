import Headline from '#/assets/ui/headline.png'
import Layout from '#/components/layouts/Layout'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import { calculateObjectFitElement } from '#/helpers/instrinsic-sizes'
import clsx from 'clsx'
import type { NextPage } from 'next'
import { useCallback, useEffect, useRef, useState } from 'react'

const Home: NextPage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mdUp = useBreakpointThreshold('md')
  const [hasFirstRendered, setHasFirstRendered] = useState(false)
  useEffect(() => {
    setHasFirstRendered(true)
  }, [])

  const videoSuffix = mdUp ? '' : '-portrait'
  const videoName = hasFirstRendered ? `/videos/teaser${videoSuffix}` : ''

  const setupCanvasUpdater = useCallback(() => {
    if (!canvasRef.current || !videoRef.current) return
    const video = videoRef.current
    const canvas = canvasRef.current
    var cw = Math.floor(canvas.clientWidth)
    var ch = Math.floor(canvas.clientHeight)
    canvas.width = cw
    canvas.height = ch
    const context = canvasRef.current.getContext('2d')

    function updateCanvas() {
      if (video.paused || video.ended) return false
      const { width, height, sourceX, sourceY } =
        calculateObjectFitElement(video)
      context?.drawImage(
        video,
        sourceX ?? 0,
        sourceY ?? 0,
        width ?? cw,
        height ?? ch,
        0,
        0,
        1920,
        1080
      )
      setTimeout(updateCanvas, 20)
    }

    videoRef.current.addEventListener('play', updateCanvas, false)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!videoName || !video) return
    video.pause()
    video.load()
    video.play()

    setupCanvasUpdater()
  }, [videoName, setupCanvasUpdater])

  return (
    <Layout
      meta={{ title: 'Homepage' }}
      theme='dark'
      mobileFooter
      mobileFooterTitle>
      <div className={clsx('w-full h-screen relative mb-8')}>
        {videoName && (
          <video
            ref={videoRef}
            playsInline
            muted
            loop
            className={clsx(
              'absolute w-full h-full top-0 left-0',
              'object-cover',
              'z-10'
            )}>
            <source src={`${videoName}.webm`} type='video/webm' />
            <source src={`${videoName}.mp4`} type='video/mp4' />
          </video>
        )}
        <div
          className={clsx(
            'absolute top-8',
            'w-full h-full',
            'blur-xl opacity-80 z-0'
          )}>
          <canvas className={clsx('w-full h-full')} ref={canvasRef} />
        </div>
        <div
          className={clsx('absolute w-full h-full', 'bg-black opacity-30')}
        />
        <div
          className={clsx(
            'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
            'w-full max-w-screen-lg px-12 z-10'
          )}>
          <img
            className='w-full'
            src={(Headline as any).src}
            alt='A collective of passionate souls'
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home
