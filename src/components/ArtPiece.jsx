export default function ArtPiece({ src, title, medium, index = 0, onSelect }) {
  const delay = `${Math.min(index, 9) * 70}ms`

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return
    e.preventDefault()
    if (onSelect) onSelect()
  }

  return (
    <article className="art-piece reveal" style={{ '--reveal-delay': delay }}>
      <figure>
        <a href={src} onClick={handleClick} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={title} loading="lazy" />
        </a>
        <figcaption>
          <span className="title">{title}</span>
          <span className="medium">{medium}</span>
        </figcaption>
      </figure>
    </article>
  )
}
