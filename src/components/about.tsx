import { useInView } from '../hooks/useInView'
import profileImg from '../../assets/about.png'

export function AboutSection() {
  const { ref, inView } = useInView(0.08)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="about"
      style={{
        width: '100%',
        borderBottom: '1px solid #e1e3e4',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div
        className="about-container"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '80px 40px',
          borderLeft: '1px solid #e1e3e4',
          borderRight: '1px solid #e1e3e4',

          display: 'grid',
          gridTemplateColumns: '1fr 420px',
          gap: 72,
          alignItems: 'center',

          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* LEFT */}
        <div className="about-content">
          <p
            style={{
              margin: 0,
              fontSize: 16,
              fontWeight: 500,
              color: '#8C9196',
            }}
          >
            About Me
          </p>

          <h2
            className="about-title"
            style={{
              margin: '12px 0 24px',
              fontSize: 36,
              fontWeight: 700,
              lineHeight: '44px',
              color: '#2B2F32',
            }}
          >
            UI/UX Designer with a
            <br />
            product mindset
          </h2>

          <p
            className="about-description"
            style={{
              margin: 0,
              fontSize: 18,
              lineHeight: '28px',
              color: '#6C757D',
              maxWidth: 620,
            }}
          >
            Hi, I'm Akmal. I've been designing digital products for over
            5 years, from VR/AR at Smarteye and metaverse products at
            MetaNesia to my current role as a UI/UX Designer at OCA
            Indonesia, where I work on OCA Blast, OCA Interaction, and
            OCA API.
            <br />
            <br />
            Jumping between such different worlds taught me to stop
            assuming a solution works just because it worked somewhere
            else. Instead, I focus on understanding the people using the
            product and designing experiences that actually solve their
            problems.
          </p>

          <div
            className="about-stats"
            style={{
              display: 'flex',
              gap: 56,
              marginTop: 48,
            }}
          >
            <Stat number="+5" label="Years of Experience" />
            <Stat number="+50" label="Features Designed" />
            <Stat number="+20" label="Projects Delivered" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-image">
          <img
            src={profileImg}
            alt="Akmal"
            style={{
              width: '100%',
              display: 'block',
              objectFit: 'cover',
              borderRadius: 16,
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {

          .about-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 56px 24px !important;
          }

          .about-content {
            order: 1;
          }

          .about-image {
            order: 2;
          }

          .about-image img {
            width: 100%;
            max-width: 380px;
            margin: 0 auto;
            display: block;
          }

          .about-title {
            font-size: 30px !important;
            line-height: 38px !important;
          }

          .about-description {
            font-size: 16px !important;
            line-height: 26px !important;
            max-width: 100% !important;
          }

          .about-stats {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  )
}

function Stat({
  number,
  label,
}: {
  number: string
  label: string
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 40,
          fontWeight: 700,
          color: '#2B2F32',
          lineHeight: '48px',
        }}
      >
        {number}
      </div>

      <div
        style={{
          marginTop: 8,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14,
          color: '#8C9196',
        }}
      >
        {label}
      </div>
    </div>
  )
}