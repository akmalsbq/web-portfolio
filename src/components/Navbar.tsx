import { useState, useEffect } from 'react'
import logo from '../imports/HomeLight-5/Logo.svg'

const NAV_ITEMS = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  //{ label: 'Process', href: '/#process' },
  { label: 'Contact', href: 'mailto:akmalsbq@gmail.com' },
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function handleNavClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onNavigate?: () => void,
) {
  const hashIndex = href.indexOf('#')
  if (hashIndex === -1) return

  const id = href.slice(hashIndex + 1)
  const onHome = window.location.pathname === '/'

  if (onHome) {
    e.preventDefault()
    scrollToSection(id)
    window.history.pushState(null, '', `/#${id}`)
    onNavigate?.()
  } else {
    onNavigate?.()
  }
}

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
        backgroundColor: menuOpen
        ? '#FEFEFE'
        : scrolled
          ? 'rgba(254,254,254,0.92)'
          : '#FEFEFE',
      
        backdropFilter: menuOpen
          ? 'none'
          : scrolled
            ? 'blur(12px)'
            : 'none',
        
        WebkitBackdropFilter: menuOpen
          ? 'none'
          : scrolled
            ? 'blur(12px)'
            : 'none',
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
                onClick={e => handleNavClick(e, item.href)}
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
            justifyContent: 'center',
            gap: 5,
            width: 40,
            height: 40,
            padding: 8,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          className="show-mobile nav-hamburger"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className={`nav-hamburger__line${menuOpen ? ' nav-hamburger__line--open' : ''}`}
              data-line={i}
            />
          ))}
        </button>
      </div>

      {/* Mobile fullscreen menu — kept mounted for enter/exit animation */}
      <div
        className={`mobile-menu show-mobile${menuOpen ? ' mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
        inert={menuOpen ? undefined : true}
      >
        <nav aria-label="Mobile navigation" className="mobile-menu__nav">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-menu__link"
              style={{ ['--menu-index' as string]: index }}
              tabIndex={menuOpen ? 0 : -1}
              onClick={e => handleNavClick(e, item.href, () => setMenuOpen(false))}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }

        .nav-hamburger__line {
          display: block;
          width: 24px;
          height: 2px;
          background-color: #2b2f32;
          border-radius: 1px;
          transform-origin: center;
          transition:
            transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-hamburger__line[data-line="0"].nav-hamburger__line--open {
          transform: translateY(7px) rotate(45deg);
        }

        .nav-hamburger__line[data-line="1"].nav-hamburger__line--open {
          opacity: 0;
          transform: scaleX(0);
        }

        .nav-hamburger__line[data-line="2"].nav-hamburger__line--open {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-menu {
          position: fixed;
          top: 88px;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 49;
          flex-direction: column;
          background-color: #fefefe;
          padding: 40px;
          overflow-y: auto;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-12px);
          pointer-events: none;
          transition:
            opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            visibility 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu--open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }

        .mobile-menu__nav {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .mobile-menu__link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 36px;
          line-height: 44px;
          color: #2b2f32;
          text-decoration: none;
          opacity: 0;
          transform: translate3d(0, 20px, 0);
          transition:
            opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            color 0.15s ease;
          transition-delay: calc(var(--menu-index, 0) * 55ms);
        }

        .mobile-menu--open .mobile-menu__link {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .mobile-menu__link:active {
          color: #6c757d;
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-hamburger__line,
          .mobile-menu,
          .mobile-menu__link {
            transition: none !important;
          }

          .mobile-menu {
            transform: none;
          }

          .mobile-menu__link {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </header>
  )
}
