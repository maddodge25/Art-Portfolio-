import WaveBg from '../components/WaveBg.jsx'

export default function About() {
  return (
    <>
      <section className="page-heading page-heading--wave reveal">
        <WaveBg />
        <div className="container">
          <h1>About</h1>
        </div>
      </section>

      <section className="about container reveal">
        <div className="about-photo">
          <img src="/images/about/portrait.png" alt="Madelene Dodge" />
        </div>

        <div className="about-text">
          <h2>Madelene (Maddy) Dodge</h2>
          <p>
            Maddy is a visual artist based in Palo Alto, California. She is
            currently a student at Stanford University, studying Psychology,
            Science, Technology &amp; Society (STS), and Art Practice.
          </p>
          <p>
            Originally from Darien, Connecticut, her work carries a distinct
            East Coast influence. Her practice spans personal commissions and
            academic portfolio work, exploring themes that range from
            childhood memory to the textures and forms of marine life. She
            continues to explore and experiment with new mediums &mdash; most
            recently digital art, with new pieces to come.
          </p>
        </div>
      </section>
    </>
  )
}
