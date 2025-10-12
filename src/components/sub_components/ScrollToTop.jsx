import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls window to top whenever the route changes
export default function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    // Ignore router path hashes like "#/route"; only honor element ids like "#section"
    const isRouteHash = location.hash.startsWith('#/')
    if (location.hash && !isRouteHash) {
      try {
        const el = document.querySelector(location.hash)
        if (el) {
          el.scrollIntoView({ behavior: 'auto', block: 'start' })
          return
        }
      } catch (_) {
        // fall through to top
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash, location.key])

  return null
}
