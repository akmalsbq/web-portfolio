import { useEffect } from 'react'
import { useInView } from './hooks/useInView'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProjectCard } from './components/ProjectCard'
import { ContactSection } from './components/ContactSection'
import imgOCA from '../assets/thumbnail-oca.png'
import imgDesignSystem from '../assets/thumbnail-designsystem.png'
import { AboutSection } from './components/about'


const PROJECTS = [
  {
    company: 'OCA Indonesia',
    title: 'Reducing Friction Across the OCA Blast Broadcast Workflow',
    thumbnail: imgOCA,
    meta: [
      {
        label: 'Description',
        value:
          'Switching broadcast types mid-setup meant losing all progress and starting over. Redesigned the workflow so user input carries over automatically.',
      },
      { label: 'Year', value: 'Q3 2024' },
      { label: 'Role', value: 'UI/UX Designer' },
      {
        label: 'Impact',
        value: (
          <span>
            {'Reduced the workflow from '}
            <strong style={{ fontWeight: 700, color: '#41464b' }}>
              6 to 4 steps (33% fewer steps)
            </strong>
            {' and '}
            <strong style={{ fontWeight: 700, color: '#41464b' }}>
              cut duplicate form entry by 50%
            </strong>
            {' by preserving user input when switching broadcast types.'}
          </span>
        ),
      },
    ],
    href: '/oca-blast',
  },
  {
    company: 'OCA Indonesia',
    title: 'Building OCA\'s Design System from the Ground Up',
    thumbnail: imgDesignSystem,
    meta: [
      {
        label: 'Description',
        value:
          'Built a scalable design system from scratch, reducing duplicated work and bringing consistency across OCA\'s entire product suite.',
      },
      { label: 'Year', value: 'Q2 2024' },
      { label: 'Role', value: 'UI/UX Designer, Design System Lead' },
      {
        label: 'Impact',
        value: (
          <span>
            {'Cut design time by '}
            <strong style={{ fontWeight: 700, color: '#41464b' }}>35%</strong>
            {', dev time by '}
            <strong style={{ fontWeight: 700, color: '#41464b' }}>25%</strong>
            {', and eliminated '}
            <strong style={{ fontWeight: 700, color: '#41464b' }}>70%+</strong>
            {' of duplicate components.'}
          </span>
        ),
      },
    ],
    href: '/oca-design-system',
  },
  
]

function Divider() {
  return (
    <div style={{ height: 1, width: '100%', backgroundColor: '#e1e3e4', flexShrink: 0 }} />
  )
}

function SelectedWorksHeader() {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        width: '100%',
        borderBottom: '1px solid #e1e3e4',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '64px 40px',
          borderLeft: '1px solid #e1e3e4',
          borderRight: '1px solid #e1e3e4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 24,
            lineHeight: '36px',
          }}
        >
          <span style={{ color: '#c4c7ca' }}>/</span>
          <span style={{ color: '#2b2f32' }}>Selected Works</span>
          <span style={{ color: '#c4c7ca' }}>/</span>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const id = hash.slice(1)
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#FEFEFE',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Navbar />

      {/* Hero — full-width, contains its own max-width border column */}
      <div style={{ width: '100%' }}>
        <Hero />
      </div>

      <Divider />

      <SelectedWorksHeader />

      <Divider />

      {PROJECTS.map((project, i) => (
        <ProjectCard
          key={i}
          id={i === 0 ? 'work' : undefined}
          company={project.company}
          title={project.title}
          thumbnail={project.thumbnail}
          meta={project.meta}
          href={project.href}
          delay={i * 80}
        />
      ))}

      <Divider />

      <AboutSection />

      <Divider />

      <ContactSection />
    </div>
  )
}
