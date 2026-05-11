import { Link } from 'react-router-dom'
import WaveBg from '../components/WaveBg.jsx'

export default function Home() {
  return (
    <section className="hero reveal">
      <WaveBg />
      <div className="container hero-content">
        <h1>Madelene Dodge</h1>
        <p className="tagline">Charcoal &amp; graphite · Mixed media · Sculpture &amp; objects</p>
        <Link to="/gallery" className="cta">View Gallery</Link>
      </div>
    </section>
  )
}
