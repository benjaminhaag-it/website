'use client'

import PageView from './posthog/PageView'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
        persistence: 'memory',
        capture_pageview: false,
        capture_pageleave: true
      })
  }, [])

  return (
    <PHProvider client={posthog}>
      <PageView />
      {children}
    </PHProvider>
  )
}
