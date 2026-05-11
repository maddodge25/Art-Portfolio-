import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero container reveal">
      <h1>Madelene Dodge</h1>
      <p className="tagline">Charcoal &amp; graphite · Mixed media · Sculpture &amp; objects</p>
      <Link to="/gallery" className="cta">View Gallery</Link>
    </section>
  )
}
