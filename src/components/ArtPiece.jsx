export default function ArtPiece({ src, title, medium, index = 0 }) {
  // Stagger reveal animation by index, capped at 9 so late items don't take forever
  const delay = `${Math.min(index, 9) * 70}ms`
  return (
    <article className="art-piece reveal" style={{ '--reveal-delay': delay }}>
      <figure>
        <a href={src} target="_blank" rel="noopener noreferrer">
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
