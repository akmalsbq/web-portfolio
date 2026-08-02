import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

interface MetaField {
  label: string
  value: React.ReactNode
}

interface ProjectCardProps {
  company: string
  title: string
  meta: MetaField[]
  thumbnail: string
  href?: string
  delay?: number
}

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M1.99974 13.0001L1.9996 11.0002H18.1715L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"
      fill="currentColor"
    />
  </svg>
)

export function ProjectCard({ company, title, meta, thumbnail, href, delay = 0 }: ProjectCardProps) {
  const navigate = useNavigate()
  const { ref, inView } = useInView(0.08)
  const [btnHovered, setBtnHovered] = useState(false)
  const [imgHovered, setImgHovered] = useState(false)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        width: '100%',
        borderBottom: '1px solid #e1e3e4',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          borderLeft: '1px solid #e1e3e4',
          borderRight: '1px solid #e1e3e4',
          padding: '80px 40px',
        }}
      >
        {/* Project header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            marginBottom: 40,
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: 18,
              lineHeight: '28px',
              color: '#6c757d',
              margin: 0,
            }}
          >
            {company}
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 36px)',
              lineHeight: '1.22',
              color: '#2b2f32',
              margin: 0,
              maxWidth: 613,
            }}
          >
            {title}
          </p>
        </div>

        {/* Content row: image + meta */}
        <div className="project-content-row">
          {/* Image placeholder */}
          <div
            className="project-image"
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
            style={{
              borderRadius: 8,
              aspectRatio: '864 / 536',
              overflow: 'hidden',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <img
              src={thumbnail}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transform: imgHovered ? 'scale(1.02)' : 'scale(1)',
                transition: 'transform .3s ease',
              }}
            />
          </div>

          {/* Meta panel */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 200,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {meta.map(field => (
                <div
                  key={field.label}
                  style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: 16,
                      lineHeight: '24px',
                      color: '#2b2f32',
                      margin: 0,
                    }}
                  >
                    {field.label}
                  </p>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: '24px',
                      color: '#6c757d',
                      margin: 0,
                    }}
                  >
                    {field.value}
                  </div>
                </div>
              ))}
            </div>

            {/* View Project button */}
            <button
              onClick={() => href && navigate(href)}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              className="btn-view"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                height: 44,
                padding: '0 20px',
                backgroundColor: btnHovered ? '#41464b' : '#2b2f32',
                color: '#fefefe',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                lineHeight: '20px',
                border: 'none',
                cursor: 'pointer',
                marginTop: 24,
                transition: 'background-color 0.2s ease',
                alignSelf: 'flex-start',
              }}
            >
              <span>View Project</span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  transform: btnHovered ? 'translateX(3px)' : 'translateX(0)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .project-content-row {
          display: flex;
          flex-direction: row;
          gap: 40px;
          align-items: flex-start;
        }
        .project-image {
          width: 67%;
        }
        @media (max-width: 1024px) {
          .project-image {
            width: 55%;
          }
        }
        @media (max-width: 767px) {
          .project-content-row {
            flex-direction: column;
          }
          .project-image {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
