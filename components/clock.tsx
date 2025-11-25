'use client'

import { useEffect, useState } from 'react'

const Clock = () => {
  const [clockState, setClockState] = useState<string | undefined>()

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date()
      setClockState(date.toLocaleTimeString([], { hourCycle: 'h23', hour: 'numeric', minute: '2-digit' }))
    }, 5)

    return () => clearInterval(interval)
  }, [])

  return (
    <time
      id="Clock"
      className="text-[88px] font-extrabold absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 block text-center tracking-[0.05rem]"
      style={{ fontFamily: 'var(--font-family)' }}
    >
      {clockState}
    </time>
  )
}

export default Clock

