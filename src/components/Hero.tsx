import { useEffect, useState } from 'react'

const WORDS = ['solve.', 'craft.', 'bridge.', 'simplify.']

const ArrowRight = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M1.99974 13.0001L1.9996 11.0002H18.1715L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"
      fill="currentColor"
    />
  </svg>
)

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="about"
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 88,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          width: '100%',
          margin: '0 auto',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          borderLeft: '1px solid #e1e3e4',
          borderRight: '1px solid #e1e3e4',
        }}
      >
        {/* Big words — upper, flex-1 */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 40px 40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            {WORDS.map((word, i) => (
              <p
                key={word}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 1.2,
                  color: '#2b2f32',
                  margin: 0,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${i * 90}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${i * 90}ms`,
                }}
              >
                {word}
              </p>
            ))}
          </div>
        </div>

        {/* Intro + resume — bottom */}
        <div
          style={{
            padding: '0 40px 80px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.75s cubic-bezier(0.16,1,0.3,1) 420ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) 420ms',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                maxWidth: 337,
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: '28px',
                  color: '#2b2f32',
                  margin: 0,
                }}
              >
                Nice to Meet You
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '24px',
                  color: '#6c757d',
                  margin: 0,
                }}
              >
                Akmal here, a UI/UX Designer with 5 years crafting clear,
                usable digital experiences.
              </p>
            </div>

            <ResumeLink />
          </div>
        </div>
      </div>
    </section>
  )
}

function ResumeLink() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        textDecoration: 'none',
        color: '#2b2f32',
      }}
    >
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: '24px',
          textDecoration: 'underline',
          textDecorationStyle: 'solid',
          color: hovered ? '#6c757d' : '#2b2f32',
          transition: 'color 0.15s ease',
        }}
      >
        Download Resume
      </span>
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: hovered ? '#6c757d' : '#2b2f32',
          transform: hovered ? 'translateX(3px)' : 'translateX(0)',
          transition: 'transform 0.2s ease, color 0.15s ease',
        }}
      >
        <ArrowRight size={24} />
      </span>
    </a>
  )
}
