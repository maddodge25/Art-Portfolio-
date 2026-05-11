import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

export default function Lightbox({ pieces, index, onClose, onPrev, onNext }) {
  const piece = pieces[index]

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onPrev()
      else if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
    }
  }, [handleKey])

  if (!piece) return null

  const stop = (e) => e.stopPropagation()

  return createPortal(
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={piece.title}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <button className="lightbox-nav lightbox-prev" onClick={(e) => { stop(e); onPrev() }} aria-label="Previous">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 6 9 12 15 18" />
        </svg>
      </button>
      <button className="lightbox-nav lightbox-next" onClick={(e) => { stop(e); onNext() }} aria-label="Next">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      <figure className="lightbox-figure" onClick={stop}>
        <img className="lightbox-image" src={piece.src} alt={piece.title} />
        <figcaption className="lightbox-caption">
          <span className="lightbox-title">{piece.title}</span>
          <span className="lightbox-medium">{piece.medium}</span>
        </figcaption>
      </figure>
    </div>,
    document.body
  )
}
