import { useEffect, type CSSProperties, type ReactNode } from 'react'
import { Navbar } from '../components/Navbar'
import { ContactSection } from '../components/ContactSection'
import { useInView } from '../hooks/useInView'

import imgHero from '../imports/HomeLight-5/herods.png'
import imgContributions from '../imports/HomeLight-5/2a596918a636349eae1b77da6f6d96e399617a22.png'
import imgProblems from '../imports/HomeLight-5/5102789dacacd9dd13765f542fcb6baebc908aca.png'
import imgSolution from '../imports/HomeLight-5/78dc3390e1d5856c16f3ca44a165e4843fe82fbc.png'
import imgProcess from '../imports/HomeLight-5/b2ab9c84dd1fa9f4df8058326a854c59d11706ac.png'
// import imgIterate from '../imports/HomeLight-5/a979c667979d6c698e456c8a6f35b8a1f1c05c9a.png'
import imgGoals from '../imports/HomeLight-5/301bb46ecbfbc0c39bc19cb65dedda64da79bf45.png'
import imgDesign from '../imports/HomeLight-5/0fe4893d66349fbcdbb8809626f26a9e6b73cede.png'
import imgBroadcast from '../imports/HomeLight-5/unifying.png'
import imgContact1 from '../imports/HomeLight-5/validating1.png'
import imgContact2 from '../imports/HomeLight-5/validating2.png'
import imgFiles1 from '../imports/HomeLight-5/filemanagement1.png'
import imgFiles2 from '../imports/HomeLight-5/filemanagement2.png'
import imgReport from '../imports/HomeLight-5/report.png'
import imgOutcomes from '../imports/HomeLight-5/725a5ac00c8005766a60e1179383ab329f9e4a66.png'
import imgLearnings from '../imports/HomeLight-5/25bfe2dce4b59c15d2250ee57f4e2ee65dfd229d.png'
import svgPaths from '../imports/HomeLight-5/svg-0vk23yuv8j'
import imgSolutionPreview from '../imports/HomeLight-5/solutionds.png'
import imgProblemsPreview from '../imports/HomeLight-5/the problems.png'
import imgPainPointPreview from '../imports/HomeLight-5/audit.png'
import imgScopePreview from '../imports/HomeLight-5/foundation.png'
import imgIteratePreview from '../imports/HomeLight-5/components library.png'
import imgGlance from '../imports/HomeLight-5/glance.png'
import imgIntegratePreview from '../imports/HomeLight-5/integrating.png'
import imgGovernancePreview from '../imports/HomeLight-5/governace.png'
import imgColorSystemPreview from '../imports/HomeLight-5/color.png'
import imgTypographyPreview from '../imports/HomeLight-5/typography.png'
import imgButtonPreview from '../imports/HomeLight-5/buttons.png'
import imgComponentPreview from '../imports/HomeLight-5/components.png'
import imgGitPreview from '../imports/HomeLight-5/git.png'

const FONT = "'DM Sans', sans-serif"

function Divider() {
  return (
    <div style={{ height: 1, width: '100%', backgroundColor: '#e1e3e4', flexShrink: 0 }} />
  )
}

function Column({
  children,
  style,
  className,
}: {
  children: ReactNode
  style?: CSSProperties
  className?: string
}) {
  return (
    <div
      className={className}
      style={{
        maxWidth: 1280,
        margin: '0 auto',
        width: '100%',
        borderLeft: '1px solid #e1e3e4',
        borderRight: '1px solid #e1e3e4',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function RevealSection({
  children,
  style,
  className,
  threshold = 0.08,
}: {
  children: ReactNode
  style?: CSSProperties
  className?: string
  threshold?: number
}) {
  const { ref, inView } = useInView(threshold, { rootMargin: '0px 0px -10% 0px' })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`cs-reveal-section${inView ? ' cs-reveal-section--visible' : ''}${className ? ` ${className}` : ''}`}
      style={style}
    >
      {children}
    </div>
  )
}

function RevealItem({
  children,
  index = 0,
  style,
  className,
}: {
  children: ReactNode
  index?: number
  style?: CSSProperties
  className?: string
}) {
  return (
    <div
      className={`cs-reveal-item${className ? ` ${className}` : ''}`}
      style={{ ['--reveal-index' as string]: index, ...style }}
    >
      {children}
    </div>
  )
}

function SectionIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: 104,
        height: 104,
        objectFit: 'cover',
        display: 'block',
        flexShrink: 0,
      }}
    />
  )
}

function AnimatedSection({
  children,
  stackStyle,
  columnStyle,
}: {
  children: ReactNode
  stackStyle?: CSSProperties
  columnStyle?: CSSProperties
}) {
  return (
    <RevealSection style={{ width: '100%' }}>
      <Column className="section-pad" style={{ padding: '80px 40px', ...columnStyle }}>
        <div
          className="cs-section-stack"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 40,
            maxWidth: 880,
            margin: '0 auto',
            width: '100%',
            ...stackStyle,
          }}
        >
          {children}
        </div>
      </Column>
    </RevealSection>
  )
}

function SectionHeader({
  eyebrow,
  title,
  centered = true,
}: {
  eyebrow: string
  title: string
  centered?: boolean
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        textAlign: centered ? 'center' : 'left',
        width: '100%',
        maxWidth: 880,
      }}
    >
      <p
        style={{
          fontFamily: FONT,
          fontWeight: 600,
          fontSize: 16,
          lineHeight: '24px',
          color: '#6c757d',
          margin: 0,
        }}
      >
        {eyebrow}
      </p>
      <p
        style={{
          fontFamily: FONT,
          fontWeight: 700,
          fontSize: 'clamp(24px, 3vw, 30px)',
          lineHeight: 1.33,
          color: '#2b2f32',
          margin: 0,
        }}
      >
        {title}
      </p>
    </div>
  )
}

function BodyText({
  children,
  centered = false,
  style,
}: {
  children: ReactNode
  centered?: boolean
  style?: CSSProperties
}) {
  return (
    <p
      style={{
        fontFamily: FONT,
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '24px',
        color: '#6c757d',
        margin: 0,
        textAlign: centered ? 'center' : 'left',
        ...style,
      }}
    >
      {children}
    </p>
  )
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontFamily: FONT,
        fontWeight: 700,
        fontSize: 18,
        lineHeight: '28px',
        color: '#2b2f32',
        margin: 0,
      }}
    >
      {children}
    </p>
  )
}

function SoftDivider() {
  return <div style={{ height: 1, width: '100%', backgroundColor: '#e1e3e4' }} />
}

function ImageFrame({
  src,
  alt,
  aspectRatio = '16 / 10',
}: {
  src: string
  alt: string
  aspectRatio?: string
}) {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#e1e3e4',
        borderRadius: 8,
        overflow: 'hidden',
        aspectRatio,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  )
}

function MetaCell({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        borderLeft: '1px solid #e1e3e4',
        padding: '8px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <p
        style={{
          fontFamily: FONT,
          fontWeight: 700,
          fontSize: 16,
          lineHeight: '24px',
          color: '#2b2f32',
          margin: 0,
        }}
      >
        {label}
      </p>
      <div
        style={{
          fontFamily: FONT,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: '24px',
          color: '#6c757d',
        }}
      >
        {children}
      </div>
    </div>
  )
}

function GoalItem({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{
        borderLeft: '1px solid #e1e3e4',
        padding: '8px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <SubHeading>{title}</SubHeading>
      <BodyText>{body}</BodyText>
    </div>
  )
}

function GoalGroup({
  label,
  items,
}: {
  label: string
  items: { title: string; body: string }[]
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          alignSelf: 'flex-start',
          padding: '8px 16px',
          borderRadius: 900,
        }}
      >
        <span
          style={{
            fontFamily: FONT,
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: 16,
            lineHeight: '24px',
            color: '#2b2f32',
          }}
        >
          {label}
        </span>
      </div>
      {items.map(item => (
        <GoalItem key={item.title} title={item.title} body={item.body} />
      ))}
    </div>
  )
}

function LearningItem({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{
        borderLeft: '1px solid #e1e3e4',
        padding: '8px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        width: '100%',
      }}
    >
      <SubHeading>{title}</SubHeading>
      <BodyText>{body}</BodyText>
    </div>
  )
}


function ProcessBlock({
  title,
  body,
  children,
}: {
  title: string
  body: string
  children: ReactNode
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <SubHeading>{title}</SubHeading>
        <BodyText>{body}</BodyText>
      </div>
      {children}
    </div>
  )
}

function SolutionPreview() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#e1e3e4',
        borderRadius: 8,
        padding: 'clamp(24px, 4vw, 48px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 452,
          backgroundColor: '#fefefe',
          borderRadius: 8,
          border: '1px solid #e1e3e4',
          overflow: 'hidden',
        }}
      >
        <div style={{ padding: '8px 16px' }}>
          <p
            style={{
              fontFamily: FONT,
              fontWeight: 600,
              fontSize: 14,
              lineHeight: '20px',
              color: '#2b2f32',
              margin: 0,
            }}
          >
            Broadcasting Type
          </p>
        </div>
        <div style={{ height: 1, backgroundColor: '#e1e3e4' }} />
        <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: '20px',
                color: '#2b2f32',
                margin: 0,
              }}
            >
              Select broadcasting type
            </p>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'default' }}>
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 999,
                    border: '1px solid #a6acb1',
                    backgroundColor: '#fefefe',
                    display: 'block',
                  }}
                />
                <span
                  style={{
                    fontFamily: FONT,
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: '20px',
                    color: '#2b2f32',
                  }}
                >
                  Instant Broadcast
                </span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'default' }}>
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 999,
                    border: '1px solid #2b2f32',
                    backgroundColor: '#fefefe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      backgroundColor: '#2b2f32',
                      display: 'block',
                    }}
                  />
                </span>
                <span
                  style={{
                    fontFamily: FONT,
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: '20px',
                    color: '#2b2f32',
                  }}
                >
                  Schedule Broadcast
                </span>
              </label>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#eff0f1',
              borderLeft: '3px solid #6c757d',
              borderRadius: 6,
              padding: 12,
            }}
          >
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: 13,
                lineHeight: '20px',
                color: '#6c757d',
                margin: 0,
              }}
            >
              Your broadcast is scheduled near the end of operational hours or includes a high
              number of contacts. Deliveries may carry over to the next day to ensure completion.
            </p>
          </div>

          <div className="cs-preview-fields" style={{ display: 'flex', gap: 12 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <p
                style={{
                  fontFamily: FONT,
                  fontWeight: 600,
                  fontSize: 12,
                  lineHeight: '18px',
                  color: '#2b2f32',
                  margin: 0,
                }}
              >
                Broadcasting Date *
              </p>
              <div
                style={{
                  backgroundColor: '#fefefe',
                  border: '1px solid #e1e3e4',
                  borderRadius: 6,
                  padding: '10px 12px',
                  fontFamily: FONT,
                  fontSize: 14,
                  color: '#6c757d',
                }}
              >
                DD/MM/YYYY
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <p
                style={{
                  fontFamily: FONT,
                  fontWeight: 600,
                  fontSize: 12,
                  lineHeight: '18px',
                  color: '#2b2f32',
                  margin: 0,
                }}
              >
                Start Time *
              </p>
              <div
                style={{
                  backgroundColor: '#fefefe',
                  border: '1px solid #e1e3e4',
                  borderRadius: 6,
                  padding: '10px 12px',
                  fontFamily: FONT,
                  fontSize: 14,
                  color: '#6c757d',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>00:00</span>
                <span style={{ color: '#2b2f32', fontWeight: 600 }}>WIB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DesignBlock({
  title,
  body,
  images,
  textWidth,
  imageWidth = 880,
}: {
  title: string
  body: string
  images: { src: string; alt: string; aspectRatio?: string }[]
  textWidth?: number
  imageWidth?: number
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%', maxWidth: imageWidth}}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: textWidth, margin: '0 auto' }}>
        <SubHeading>{title}</SubHeading>
        <BodyText>{body}</BodyText>
      </div>
      {images.map(img => (
        <ImageFrame key={img.src} src={img.src} alt={img.alt} aspectRatio={img.aspectRatio} />
      ))}
    </div>
  )
}

export default function DesignSystem() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#fefefe',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Navbar />

      {/* Hero */}
      <section style={{ width: '100%', paddingTop: 88 }}>
        <RevealSection>
          <Column className="section-pad" style={{ padding: '80px 40px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 40,
                maxWidth: 880,
                margin: '0 auto',
                width: '100%',
              }}
            >
              <RevealItem index={0}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <p
                    style={{
                      fontFamily: FONT,
                      fontWeight: 600,
                      fontSize: 18,
                      lineHeight: '28px',
                      color: '#6c757d',
                      margin: 0,
                    }}
                  >
                    OCA Indonesia
                  </p>
                  <h1
                    style={{
                      fontFamily: FONT,
                      fontWeight: 700,
                      fontSize: 'clamp(28px, 4vw, 48px)',
                      lineHeight: 1.167,
                      color: '#2b2f32',
                      margin: 0,
                    }}
                  >
                    Building OCA's Design System from the Ground Up
                  </h1>
                </div>
              </RevealItem>

              <RevealItem index={1}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <SubHeading>In a Nutshell</SubHeading>
                  <BodyText style={{ maxWidth: 640 }}>
                    OCA Indonesia is a B2B CPaaS company offering multiple enterprise
                    communication products including OCA Blast, OCA Interaction, OCA
                    Automated Interaction, and OCA API. As the product suite grew, the lack of a 
                    shared design foundation created inconsistencies across products and 
                    slowed down both design and development workflows.
                    This case study covers the end-to-end creation of OCA's design system, 
                    built from scratch to serve all products and teams.
                  </BodyText>
                </div>
              </RevealItem>

              <div className="cs-meta-row" style={{ display: 'flex', gap: 24, width: '100%' }}>
                <RevealItem index={2} style={{ flex: 1, minWidth: 0 }}>
                  <MetaCell label="Role">
                    UI/UX Designer, Design System Lead
                  </MetaCell>
                </RevealItem>
                <RevealItem index={3} style={{ flex: 1, minWidth: 0 }}>
                  <MetaCell label="Team">
                    Product Owner, UX Lead, UX Copywriter, Engineering Team
                  </MetaCell>
                </RevealItem>
                <RevealItem index={4} style={{ flex: 1, minWidth: 0 }}>
                  <MetaCell label="Timeline">April 2024 - June 2024 (3 Months)</MetaCell>
                </RevealItem>
              </div>
            </div>
          </Column>
        </RevealSection>
      </section>

      {/* Hero image */}
      <RevealSection style={{ width: '100%' }}>
        <RevealItem index={0}>
          <Column>
            <div
              style={{
                backgroundColor: '#e1e3e4',
                width: '100%',
                aspectRatio: '1280 / 800',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(24px, 5vw, 60px)',
              }}
            >
              <img
                src={imgHero}
                alt="OCA Blast product overview"
                style={{
                  width: '100%',
                  maxWidth: 956,
                  borderRadius: 8,
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </Column>
        </RevealItem>
      </RevealSection>

      <Divider />

      {/* Contributions */}
      <AnimatedSection>
        <RevealItem index={0}>
          <SectionIcon src={imgGlance} alt="" />
        </RevealItem>

        <RevealItem index={1}>
          <SectionHeader
            eyebrow="Project at a Glance"
            title="Built from Scratch"
          />
        </RevealItem>

        <RevealItem index={2}>
          <>
            <div
              style={{
                maxWidth: 592,
                margin: "0 auto",
              }}
            >
              <BodyText centered>
                OCA had four growing products but no shared design foundation. This
                project built one from the ground up, covering everything from tokens
                and typography to a full component library integrated directly into
                the development pipeline.
              </BodyText>
            </div>

            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                marginTop: 64,
              }}
            >
              {[
                { value: "120+", label: "Screens Audited" },
                { value: "100+", label: "Tokens Created" },
                { value: "18", label: "Core Components" },
                { value: "4", label: "Products Covered" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  style={{
                    padding: "40px 24px",
                    textAlign: "center",
                    borderLeft: index === 0 ? "none" : "1px solid #E5E7EB",
                  }}
                >
                  <div
                    style={{
                      fontSize: 30,
                      lineHeight: "40px",
                      fontWeight: 700,
                      color: "#101828",
                    }}
                  >
                    {item.value}
                  </div>

                  <div
                    style={{
                      marginTop: 12,
                      fontSize: 16,
                      lineHeight: "24px",
                      color: "#667085",
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </>
        </RevealItem>
      </AnimatedSection>

      <Divider />

      {/* Problems */}
      <AnimatedSection>
        <RevealItem index={0}>
          <SectionIcon src={imgGoals} alt="" />
        </RevealItem>
        <RevealItem index={1}>
          <SectionHeader eyebrow="Goals" title="One Source of Truth" />
        </RevealItem>
        <RevealItem index={2} style={{ width: '100%', maxWidth: 592 }}>
          <GoalGroup
              items={[
                {
                  title: 'Unify the product suite',
                  body: 'Establish a single design foundation shared across OCA Blast, Interaction, Automated Interaction, and API.',
                },
                {
                  title: 'Eliminate duplicated work',
                  body: 'Reduce the time designers and engineers spend rebuilding the same components from scratch.',
                },
                {
                  title: 'Improve consistency',
                  body: 'Ensure every product looks and behaves cohesively, regardless of who built it.',
                },
                {
                  title: 'Accelerate workflows',
                  body: 'Speed up design and development by providing reusable, well-documented patterns.'
                },
                {
                  title: 'Build for scale',
                  body: 'Create a foundation flexible enough to support future products and team growth.',
                }
              ]}
            />
        </RevealItem>
      </AnimatedSection>

      <Divider />

      
      {/* Contributions */}
      <AnimatedSection>
        <RevealItem index={0}>
          <SectionIcon src={imgContributions} alt="" />
        </RevealItem>
        <RevealItem index={1}>
          <SectionHeader eyebrow="Contributions" title="End-to-End Ownership" />
        </RevealItem>
        <RevealItem index={2}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              width: '100%',
              maxWidth: 592,
            }}
          >
            <BodyText centered>
            Led the design system initiative across 5 designers and 4 front-end engineers, owning the overall structure, component decisions, and quality standards.
            </BodyText>
            <SoftDivider />
            <BodyText centered>
            Audited 120+ screens across 4 products, identifying duplicated patterns and inconsistencies that shaped the system's initial scope and priorities.
            </BodyText>
            <SoftDivider />
            <BodyText centered>
            Designed 18 core components with full state and configuration coverage, supported by 100+ design tokens integrated directly into the development pipeline via Tokens Studio and Git.
            </BodyText>
          </div>
        </RevealItem>
      </AnimatedSection>

      <Divider />

      {/* Problems */}
      <AnimatedSection>
        <RevealItem index={0}>
          <SectionIcon src={imgProblems} alt="" />
        </RevealItem>
        <RevealItem index={1}>
          <SectionHeader eyebrow="Problems" title="Fragmented by Default" />
        </RevealItem>
        <RevealItem index={2} style={{ width: '100%', maxWidth: 592 }}>
          <GoalGroup
              items={[
                {
                  title: 'No Shared Design Foundation',
                  body: 'Each product was built independently with no shared components or standards, leading to visual inconsistencies across OCA product suite.',
                },
                {
                  title: 'Duplicated Effort Across Teams',
                  body: 'Designers were rebuilding the same components from scratch for every project. Front-end engineers faced the same problem on their side, with no reusable patterns to work from.',
                },
                {
                  title: 'Slow Design-to-Development Handoff',
                  body: 'Without standardized specifications and tokens, translating design to code was inconsistent and time-consuming for both sides.',
                },
              ]}
            />
        </RevealItem>
      </AnimatedSection>

      <Divider />

      {/* Solution */}
      <AnimatedSection>
        <RevealItem index={0}>
          <SectionIcon src={imgSolution} alt="" />
        </RevealItem>
        <RevealItem index={1}>
          <SectionHeader eyebrow="Solution" title="A Unified Foundation" />
        </RevealItem>
        <RevealItem index={2}>
          <BodyText centered style={{ maxWidth: 592 }}>
A complete design system built from scratch in Figma, covering 18 core components with full state and configuration coverage, a token-based foundation, and a direct pipeline to Git via Tokens Studio so designers and engineers work from the same source of truth.
          </BodyText>
        </RevealItem>
        <RevealItem index={3}>
          <img
            src={imgSolutionPreview}
            alt="Solution Preview"
            className="mt-10 w-full rounded-2xl"
          />
        </RevealItem>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection>
        <RevealItem index={0}>
          <SectionIcon src={imgProcess} alt="" />
        </RevealItem>
        <RevealItem index={1}>
          <SectionHeader eyebrow="Process" title="Structured from the Ground Up" />
        </RevealItem>
        <RevealItem index={2} style={{ width: '100%', maxWidth: 592 }}>
          <ProcessBlock
            title="Auditing the Existing State"
            body="Reviewed 120+ screens across OCA Blast, Interaction, Automated Interaction, and API to map duplicated components, inconsistencies, and gaps. The audit surfaced how fragmented the UI had become across products and became the foundation for scoping what to build first."
          >
            <img src={imgPainPointPreview} alt="pain point Preview" className="mt-10 w-full rounded-2xl" />
          </ProcessBlock>
        </RevealItem>
        <RevealItem index={3} style={{ width: '100%', maxWidth: 592 }}>
          <SoftDivider />
        </RevealItem>
        <RevealItem index={4}style={{ width: '100%', maxWidth: 592 }} >
          <ProcessBlock
            title="Defining the Foundation"
            body="Before building any components, established the core design tokens: color system, typography, spacing, and layout grid. These became the single source of truth that everything else was built on top of, ensuring consistency from the ground up."
          >
            <img src={imgScopePreview} alt="scope Preview" className="mt-10 w-full rounded-2xl" />
          </ProcessBlock>
        </RevealItem>
        <RevealItem index={5} style={{ width: '100%', maxWidth: 592 }}>
          <SoftDivider />
        </RevealItem>
        <RevealItem index={6} style={{ width: '100%', maxWidth: 592 }}>
          <ProcessBlock
            title="Building the Component Library"
            body="Built 18 core components in Figma with full state coverage and configuration options including icon presence, labels, captions, and more. Component naming conventions and usage guidelines were documented within Figma to support consistent adoption across the team."
          >
            <img src={imgIteratePreview} alt="Collaborative design iteration" className="mt-10 w-full rounded-2xl" />
          </ProcessBlock>
        </RevealItem>
        <RevealItem index={5} style={{ width: '100%', maxWidth: 592 }}>
          <SoftDivider />
        </RevealItem>
        <RevealItem index={6} style={{ width: '100%', maxWidth: 592 }}>
          <ProcessBlock
            title="Integrating with Development"
            body="Used Tokens Studio to push design tokens directly to Git, creating a live connection between Figma and the front-end codebase. This ensured designers and engineers stayed in sync and reduced interpretation gaps during handoff."
          >
            <img src={imgIntegratePreview} alt="Collaborative design iteration" className="mt-10 w-full rounded-2xl" />
          </ProcessBlock>
        </RevealItem>
        <RevealItem index={5} style={{ width: '100%', maxWidth: 592 }}>
          <SoftDivider />
        </RevealItem>
        <RevealItem index={6} style={{ width: '100%', maxWidth: 592 }}>
          <ProcessBlock
            title="Governance"
            body="Basic documentation, component naming conventions, and shared usage guidelines were established within Figma from the start. Formal versioning and governance processes were introduced gradually as the system evolved, reinforcing that a design system is a living product, not a one-time deliverable."
          >
            <img src={imgGovernancePreview} alt="Collaborative design iteration" className="mt-10 w-full rounded-2xl" />
          </ProcessBlock>
        </RevealItem>
      </AnimatedSection>

      <Divider />

      {/* Design */}
      <AnimatedSection>
        <RevealItem index={0}>
          <SectionIcon src={imgDesign} alt="" />
        </RevealItem>
        <RevealItem index={1} >
          <SectionHeader eyebrow="Design" title="The System in Action" />
        </RevealItem>
        <RevealItem index={2}>
          <DesignBlock
            title="Color System and Typography"
            body="Defined a token-based color system and typography scale that served as the visual foundation across all OCA products."
            imageWidth={880}
            textWidth={592}
            images={[
              { src: imgColorSystemPreview, alt: 'Color System/', aspectRatio: '16 / 12' },
              { src: imgTypographyPreview, alt: 'Typography/', aspectRatio: '16 / 12' },
            ]}
          />
        </RevealItem>
        <RevealItem index={3} style={{ width: '100%', maxWidth: 592 }}>
          <SoftDivider />
        </RevealItem>
        <RevealItem index={4}>
          <DesignBlock
            title="Component Library"
            body={`18 core components covering buttons, text field, text area, and data display patterns, each with full state and configuration coverage.`}
            imageWidth={880}
            textWidth={592}
            images={[
              { src: imgButtonPreview, alt: 'Buttons Component', aspectRatio: 'cover' },
              { src: imgComponentPreview, alt: 'Components Preview', aspectRatio: 'cover' },
            ]}
          />
        </RevealItem>
        <RevealItem index={5} style={{ width: '100%', maxWidth: 592 }}>
          <SoftDivider />
        </RevealItem>
        <RevealItem index={6}>
          <DesignBlock
            title="Tokens and Git Integration"
            body={`Connected the design system to the development pipeline via Tokens Studio, allowing designers to push and pull tokens from Git and keeping design and code consistently aligned.`}
            imageWidth={880}
            textWidth={592}
            images={[{ src: imgGitPreview, alt: 'Git Preview', aspectRatio: 'cover' }]}
          />
        </RevealItem>
      </AnimatedSection>

      <Divider />

      {/* Outcomes */}
      <AnimatedSection>
        <RevealItem index={0}>
          <SectionIcon src={imgOutcomes} alt="" />
        </RevealItem>
        <RevealItem index={1}>
          <SectionHeader eyebrow="Outcomes" title="Faster, Leaner, Consistent" />
        </RevealItem>
        <RevealItem index={2} style={{ width: '100%', maxWidth: 592 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <SubHeading>35% Faster Design Cycles</SubHeading>
            <BodyText>
              Reduced UI design time through reusable components and a standardized foundation that designers could build on immediately, allowing for faster iteration and delivery.
            </BodyText>
          </div>
        </RevealItem>
        <RevealItem index={3} style={{ width: '100%', maxWidth: 592 }}>
          <SoftDivider />
        </RevealItem>
        <RevealItem index={4} style={{ width: '100%', maxWidth: 592 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <SubHeading>25% Shorter Dev Implementation</SubHeading>
            <BodyText>
              Shortened front-end implementation time by providing consistent specifications, reusable patterns, and a direct token pipeline to Git, reducing the need for manual handoffs and interpretation.
            </BodyText>
          </div>
        </RevealItem>
        <RevealItem index={3} style={{ width: '100%', maxWidth: 592 }}>
          <SoftDivider />
        </RevealItem>
        <RevealItem index={4} style={{ width: '100%', maxWidth: 592 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <SubHeading>70%+ Less Duplication</SubHeading>
            <BodyText>
              Eliminated duplicate UI components across OCA's product suite, freeing both designers and engineers to focus on new work instead of rebuilding existing patterns.
            </BodyText>
          </div>
        </RevealItem>
        <RevealItem index={3} style={{ width: '100%', maxWidth: 592 }}>
          <SoftDivider />
        </RevealItem>
        <RevealItem index={4} style={{ width: '100%', maxWidth: 592 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <SubHeading>4 Products, One Foundation</SubHeading>
            <BodyText>
              OCA Blast, Interaction, Automated Interaction, and API now share a single visual foundation, making the product suite feel coherent for the first time.
            </BodyText>
          </div>
        </RevealItem>
      </AnimatedSection>

      <Divider />

      {/* Learnings */}
      <AnimatedSection>
        <RevealItem index={0}>
          <SectionIcon src={imgLearnings} alt="" />
        </RevealItem>
        <RevealItem index={1}>
          <SectionHeader eyebrow="Learnings" title="What Leading a Design System Taught Me" />
        </RevealItem>
        <RevealItem index={2} style={{ width: '100%', maxWidth: 592 }}>
          <LearningItem
            title="Foundations First"
            body={`Building components without a solid token foundation creates technical debt fast. Establishing color, typography, and spacing tokens before touching components made everything that followed more consistent and scalable.`}
          />
        </RevealItem>
        <RevealItem index={3} style={{ width: '100%', maxWidth: 592 }}>
          <LearningItem
            title="Design Systems are a Product"
            body={`A design system is not a one-time deliverable. It needs documentation, naming conventions, and team buy-in to be genuinely useful. Leading this taught me to think about adoption and maintenance, not just the components themselves.`}
          />
        </RevealItem>
        <RevealItem index={4} style={{ width: '100%', maxWidth: 592 }}>
          <LearningItem
            title="Bridging Design and Engineering"
            body="Integrating Tokens Studio with Git was the most impactful decision in the project. It removed the gap between design specs and implementation, and made the system genuinely useful for the front-end team, not just designers."
          />
        </RevealItem>
      </AnimatedSection>

      <Divider />

      <ContactSection />

      <style>{`
        @media (max-width: 767px) {
          .cs-meta-row {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .cs-meta-row > div {
            border-left: none !important;
            border-top: 1px solid #e1e3e4;
            padding-left: 0 !important;
          }
          .section-pad {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .section-pad {
            padding-left: 32px !important;
            padding-right: 32px !important;
          }
        }
      `}</style>
    </div>
  )
}
