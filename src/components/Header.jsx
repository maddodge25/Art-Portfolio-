import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="site-title">Madelene Dodge</Link>
        <nav className="site-nav">
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
