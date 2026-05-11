import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll-reveal: any element with the .reveal class fades + slides up into view
 * the first time it enters the viewport. Re-initializes on route changes.
 */
export default function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: just show everything immediately
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('is-visible')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    // Wait one tick so the new route's elements are in the DOM
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        observer.observe(el)
      })
    }, 50)

    return () => {
      clearTimeout(t)
      observer.disconnect()
    }
  }, [pathname])
}
