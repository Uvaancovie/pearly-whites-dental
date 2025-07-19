"use client"

import { useEffect } from 'react'

interface WebVital {
  name: string
  value: number
  id: string
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export function useAnalytics() {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = (metric: WebVital) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        })
      }
    }

    // Import and track web vitals
    import('web-vitals').then((webVitals) => {
      webVitals.onCLS(trackWebVitals)
      webVitals.onINP(trackWebVitals) // FID is deprecated, replaced with INP
      webVitals.onFCP(trackWebVitals)
      webVitals.onLCP(trackWebVitals)
      webVitals.onTTFB(trackWebVitals)
    })

    return () => {
      // Cleanup
    }
  }, [])

  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, parameters)
    }
  }

  const trackConversion = (eventName: string, value?: number) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, {
        event_category: 'Conversion',
        value: value,
        currency: 'ZAR',
      })
    }
  }

  return { trackEvent, trackConversion }
}
