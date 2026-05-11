import { categories } from '../data/artworks.js'
import CategorySection from '../components/CategorySection.jsx'

export default function Gallery() {
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
        <CategorySection key={c.id} {...c} />
      ))}
    </>
  )
}
