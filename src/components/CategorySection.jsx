import ArtPiece from './ArtPiece.jsx'

export default function CategorySection({ id, title, pieces }) {
  return (
    <section id={id} className="category">
      <div className="container">
        <h2 className="category-title">{title}</h2>
        <div className="gallery-grid">
          {pieces.map((piece, i) => (
            <ArtPiece key={piece.src || i} index={i} {...piece} />
          ))}
        </div>
      </div>
    </section>
  )
}
