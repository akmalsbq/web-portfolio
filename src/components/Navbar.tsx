import { useState, useEffect } from 'react'
import logo from '../imports/HomeLight-5/Logo.svg'

const NAV_ITEMS = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(254,254,254,0.92)' : '#fefefe',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid #e1e3e4',
        transition: 'background-color 0.25s ease, backdrop-filter 0.25s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 40px',
          height: 88,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
            href="/"
            aria-label="akmal sabiq — home"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              textDecoration: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <img
              src={logo}
              alt="Akmal Sabiq"
              style={{
                height: 40, // atur sesuai kebutuhan
                width: 'auto',
                display: 'block',
              }}
            />
          </a>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          style={{ display: 'flex', alignItems: 'center', gap: 0 }}
          className="hidden-mobile"
        >
          {NAV_ITEMS.map((item, i) => (
            <span key={item.href} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && (
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: '24px',
                    color: '#c4c7ca',
                    padding: '12px 8px',
                    userSelect: 'none',
                  }}
                  aria-hidden
                >
                  /
                </span>
              )}
              <a
                href={item.href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: '20px',
                  color: '#2b2f32',
                  textDecoration: 'none',
                  padding: '12px 8px',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#6c757d')}
                onMouseLeave={e => (e.currentTarget.style.color = '#2b2f32')}
              >
                {item.label}
              </a>
            </span>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            padding: 8,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          className="show-mobile"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 24,
                height: 2,
                backgroundColor: '#2b2f32',
                borderRadius: 1,
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                transform:
                  menuOpen
                    ? i === 0
                      ? 'rotate(45deg) translate(5px, 5px)'
                      : i === 2
                        ? 'rotate(-45deg) translate(5px, -5px)'
                        : 'scaleX(0)'
                    : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        style={{
          maxHeight: menuOpen ? 400 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          borderTop: menuOpen ? '1px solid #e1e3e4' : 'none',
          backgroundColor: 'rgba(254,254,254,0.97)',
          backdropFilter: 'blur(12px)',
        }}
        className="show-mobile"
      >
        {NAV_ITEMS.map(item => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              padding: '16px 40px',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              color: '#2b2f32',
              textDecoration: 'none',
              borderBottom: '1px solid #e1e3e4',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(225,227,228,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {item.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
