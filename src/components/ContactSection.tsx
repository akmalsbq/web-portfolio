import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import svgPaths from '../imports/HomeLight-1/svg-kzudjuply9'

const ExternalLinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path d={svgPaths.pbe9de00} fill="currentColor" />
  </svg>
)

function SocialLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'flex-start',
        gap: 8,
        textDecoration: 'none',
        color: hovered ? '#6c757d' : '#2b2f32',
        transition: 'color 0.15s ease',
      }}
    >
      <ExternalLinkIcon />
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: '20px',
        }}
      >
        {label}
      </span>
    </a>
  )
}

export function ContactSection() {
  const { ref, inView } = useInView(0.08)

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        width: '100%',
        backgroundColor: '#fefefe',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          borderLeft: '1px solid #e1e3e4',
          borderRight: '1px solid #e1e3e4',
          padding: '80px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
        }}
      >
        {/* Top row: CTA + body text */}
        <div className="contact-top-row">
          {/* Left: badge + heading */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Available badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span
              className="status-dot"
              style={{ flexShrink: 0 }}
            >
              <span className="status-halo" />
              <span className="status-core" />
            </span>

            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: 16,
                lineHeight: '24px',
                color: '#2b2f32',
              }}
            >
              Available for Freelance
            </span>
          </div>

            {/* Heading */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 48px)',
                lineHeight: '1.167',
                color: '#2b2f32',
                margin: 0,
                maxWidth: 367,
              }}
            >
              {'Got an idea? '}
              <span
                style={{
                  textDecoration: 'underline',
                  textDecorationStyle: 'dotted',
                }}
              >
                {"Let's talk."}
              </span>
            </p>
          </div>

          {/* Right: body text */}
          <p
            className="contact-body"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '24px',
              color: '#6c757d',
              margin: 0,
              maxWidth: 400,
            }}
          >
            {" I like projects that start as a rough idea and turn into something people actually rely on. If that's where you're at, I'd love to hear about it. :)"}
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: '#e1e3e4', width: '100%' }} />

        {/* Footer row */}
        <div className="contact-footer-row">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: '20px',
              color: '#6c757d',
              margin: 0,
            }}
          >
            © Designed by Akmal, powered by too much coffee ☕
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <SocialLink href="https://linkedin.com" label="Linkedin" />
            <SocialLink href="https://dribbble.com" label="Dribbble" />
          </div>
        </div>
      </div>

      <style>{`
        .status-dot {
            position: relative;
            width: 20px;
            height: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          /* Halo yang nge-pulse */
          .status-halo {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #CEEDD9;
            animation: pulse 2s ease-out infinite;
          }

          /* Titik hijau tetap */
          .status-core {
            position: relative;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: #16A34A;
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: .6;
            }

            70% {
              transform: scale(1.5);
              opacity: .15;
            }

            100% {
              transform: scale(1.8);
              opacity: 0;
            }
          }

        .contact-top-row {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
        }
        .contact-footer-row {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
        }
        .contact-body {
          padding-top: 8px;
        }
        @media (max-width: 767px) {
          .contact-top-row {
            flex-direction: column;
          }
          .contact-footer-row {
            flex-direction: column;
            gap: 16px;
          }
          .contact-body {
            max-width: 100% !important;
            padding-top: 0;
          }
        }
      `}</style>
    </section>
  )
}
