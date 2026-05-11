import { useMemo, useState, useCallback } from 'react'
import { categories } from '../data/artworks.js'
import CategorySection from '../components/CategorySection.jsx'
import Lightbox from '../components/Lightbox.jsx'

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const flatPieces = useMemo(
    () => categories.flatMap((c) => c.pieces),
    []
  )

  const baseIndexFor = useMemo(() => {
    const offsets = {}
    let running = 0
    for (const c of categories) {
      offsets[c.id] = running
      running += c.pieces.length
    }
    return offsets
  }, [])

  const handlePrev = useCallback(() => {
    setSelected((i) => (i === null ? null : (i - 1 + flatPieces.length) % flatPieces.length))
  }, [flatPieces.length])

  const handleNext = useCallback(() => {
    setSelected((i) => (i === null ? null : (i + 1) % flatPieces.length))
  }, [flatPieces.length])

  return (
    <>
      <section className="page-heading container reveal">
        <h1>Gallery</h1>
        <p>A selection of my recent work across drawing, mixed media, and sculpture.</p>
      </section>

      <nav className="category-nav container reveal">
        {categories.map((c) => (
          <a key={c.id} href={`#${c.id}`}>{c.title}</a>
        ))}
      </nav>

      {categories.map((c) => (
        <CategorySection
          key={c.id}
          {...c}
          baseIndex={baseIndexFor[c.id]}
          onSelect={setSelected}
        />
      ))}

      {selected !== null && (
        <Lightbox
          pieces={flatPieces}
          index={selected}
          onClose={() => setSelected(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  )
}
