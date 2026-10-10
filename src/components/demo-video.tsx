'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { Media } from '@/lib/projects'

// Plays a muted video only while it is on screen, and never for people who asked for less motion.
function useAutoplayInView(threshold: number) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
      ?.saveData
    if (saveData || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // React doesn't reliably serialize `muted`, and browsers only autoplay muted video.
    video.muted = true

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

type MediaProps = { name: string; media: Media; sizes: string }

// Card media on the home page: a screenshot, or a poster that fades into a short looping clip.
export function ProjectPreview({ name, media, sizes }: MediaProps) {
  const video = useAutoplayInView(0.6)
  const [started, setStarted] = useState(false)

  return (
    <>
      <Image
        src={media.kind === 'video' ? media.poster : media.src}
        alt={`${name} ${media.kind === 'video' ? 'demo' : 'screenshot'}`}
        fill
        sizes={sizes}
        className="object-cover"
      />
      {media.kind === 'video' && (
        <video
          ref={video}
          src={media.preview}
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          tabIndex={-1}
          aria-hidden
          onPlaying={() => setStarted(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            started ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </>
  )
}

// Full demo on a case study page, with the browser's own controls.
export function DemoPlayer({ name, media, sizes }: MediaProps) {
  const video = useAutoplayInView(0.5)
  const aspectRatio = `${media.width} / ${media.height}`

  if (media.kind === 'image') {
    return (
      <div className="relative" style={{ aspectRatio }}>
        <Image
          src={media.src}
          alt={`${name} screenshot`}
          fill
          sizes={sizes}
          priority
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <video
      ref={video}
      src={media.src}
      poster={media.poster}
      muted
      controls
      playsInline
      preload="metadata"
      aria-label={`${name} demo`}
      className="block w-full bg-black"
      style={{ aspectRatio }}
    />
  )
}
