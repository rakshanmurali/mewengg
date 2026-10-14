import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#clients', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap site-header__row">
        <a href="#top" className="brand">
          <span className="brand__mark">MEW</span>
          <span className="brand__name">
            Maheswari<em>Engineering Works</em>
          </span>
        </a>

        <nav className="site-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a href="tel:+919952018384" className="btn header-cta">Call Now</a>

        <button
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="tel:+919952018384" className="btn" onClick={() => setOpen(false)}>Call Now</a>
        </div>
      )}
    </header>
  )
}
