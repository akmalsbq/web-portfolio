import { useEffect, type CSSProperties, type ReactNode } from 'react'
import { Navbar } from '../components/Navbar'
import { ContactSection } from '../components/ContactSection'
import { useInView } from '../hooks/useInView'

import imgHero from '../imports/HomeLight-5/3e6babbdb4f240d5aa3c71664813a58e03a7a00d.png'
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
import imgSolutionPreview from '../imports/HomeLight-5/the solutions.png'
import imgProblemsPreview from '../imports/HomeLight-5/the problems.png'
import imgPainPointPreview from '../imports/HomeLight-5/mapping pain points.png'
import imgScopePreview from '../imports/HomeLight-5/defining scopes.png'
import imgIteratePreview from '../imports/HomeLight-5/iterating team.png'

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
          backgroundColor: '#eff0f1',
          padding: '8px 16px',
          borderRadius: 900,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d={svgPaths.p2fdbff00} fill="#2b2f32" />
        </svg>
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

export default function CaseStudy() {
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
                    Reducing Friction Across the OCA Blast Broadcast Workflow
                  </h1>
                </div>
              </RevealItem>

              <RevealItem index={1}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <SubHeading>In a Nutshell</SubHeading>
                  <BodyText style={{ maxWidth: 640 }}>
                    OCA Blast lets businesses send bulk messages across WhatsApp, SMS, and email. The
                    workflow had grown so fragmented that ops teams spent more time managing the tool
                    than sending broadcasts. I led the UI revamp that simplified broadcast creation,
                    contact setup, and reporting into a single, coherent flow.
                  </BodyText>
                </div>
              </RevealItem>

              <div className="cs-meta-row" style={{ display: 'flex', gap: 24, width: '100%' }}>
                <RevealItem index={2} style={{ flex: 1, minWidth: 0 }}>
                  <MetaCell label="Role">
                    UI/UX Designer
                    <p
                      style={{
                        fontFamily: FONT,
                        fontWeight: 400,
                        fontStyle: 'italic',
                        fontSize: 12,
                        lineHeight: '18px',
                        color: '#6c757d',
                        margin: '4px 0 0',
                      }}
                    >
                      (Owned end-to-end UI/UX design across the product, from flow mapping to Figma
                      handoff.)
                    </p>
                  </MetaCell>
                </RevealItem>
                <RevealItem index={3} style={{ flex: 1, minWidth: 0 }}>
                  <MetaCell label="Team">
                    Product Owner, UX Lead, UX Copywriter, Engineering Team
                  </MetaCell>
                </RevealItem>
                <RevealItem index={4} style={{ flex: 1, minWidth: 0 }}>
                  <MetaCell label="Timeline">September 2024 - December 2024 (4 Months)</MetaCell>
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
              Led the end-to-end UI/UX revamp across OCA Blast, from pain point mapping and
              workflow analysis to final design handoff in Figma.
            </BodyText>
            <SoftDivider />
            <BodyText centered>
              Worked closely with a UX Lead and Product Owner, using their input to pressure-test
              design decisions against real user needs and business constraints.
            </BodyText>
            <SoftDivider />
            <BodyText centered>
              Worked within an established design system, identifying gaps and refining components
              to elevate the visual quality without disrupting consistency.
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
          <SectionHeader eyebrow="The Problems" title="What Was Slowing Users Down" />
        </RevealItem>
        <RevealItem index={2}>
          <BodyText centered style={{ maxWidth: 592 }}>
            Users faced friction at nearly every stage of the broadcast workflow, not just when
            creating a broadcast itself. Instant and scheduled broadcasts lived on separate pages,
            forcing constant back-and-forth navigation. Setting up contact groups required
            manually creating variables like email, phone number, and other custom fields, an
            unnecessarily complex process that slowed teams down. Channel reports, meanwhile,
            lacked the detail teams needed for proper performance evaluation.
          </BodyText>
        </RevealItem>
        <RevealItem index={3}>
          <img
            src={imgProblemsPreview}
            alt="Problems Preview"
            className="mt-10 w-full rounded-2xl"
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
          <SectionHeader eyebrow="The Solution" title="Simpler Tool, Faster Teams" />
        </RevealItem>
        <RevealItem index={2}>
          <BodyText centered style={{ maxWidth: 592 }}>
            Ops teams and clients were spending more time managing the tool than actually running
            broadcasts. The revamp addressed that by simplifying the creation flow, improving
            asset management, and expanding reporting, so users could move faster and make better
            decisions with less effort.
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

      <Divider />

      {/* Process */}
      <AnimatedSection>
        <RevealItem index={0}>
          <SectionIcon src={imgProcess} alt="" />
        </RevealItem>
        <RevealItem index={1}>
          <SectionHeader eyebrow="The Process" title="From Pain Points to Polished Product" />
        </RevealItem>
        <RevealItem index={2} style={{ width: '100%', maxWidth: 592 }}>
          <ProcessBlock
            title="Mapping the Pain Points"
            body="Reviewed the existing dashboard to understand where the workflow was breaking down. Fragmented flows, complex inputs, and limited visibility were the clearest friction points."
          >
            <img src={imgPainPointPreview} alt="pain point Preview" className="mt-10 w-full rounded-2xl" />
          </ProcessBlock>
        </RevealItem>
        <RevealItem index={3} style={{ width: '100%', maxWidth: 592 }}>
          <SoftDivider />
        </RevealItem>
        <RevealItem index={4}style={{ width: '100%', maxWidth: 592 }} >
          <ProcessBlock
            title="Defining the Scope"
            body="Plotted every potential improvement on an effort vs. user value matrix to prioritize what to tackle first. High-value, low-effort items, like simplifying broadcast creation and contact group setup, became the immediate focus. Lower-priority items, like deeper channel analytics, were scoped for later."
          >
            <img src={imgScopePreview} alt="scope Preview" className="mt-10 w-full rounded-2xl" />
          </ProcessBlock>
        </RevealItem>
        <RevealItem index={5} style={{ width: '100%', maxWidth: 592 }}>
          <SoftDivider />
        </RevealItem>
        <RevealItem index={6} style={{ width: '100%', maxWidth: 592 }}>
          <ProcessBlock
            title="Iterating with the Team"
            body="Worked through each section in Figma alongside the UX Lead and Product Owner, refining decisions at every stage over three months, from initial flows to final handoff."
          >
            <img src={imgIteratePreview} alt="Collaborative design iteration" className="mt-10 w-full rounded-2xl" />
          </ProcessBlock>
        </RevealItem>
      </AnimatedSection>

      <Divider />

      {/* Goals */}
      <AnimatedSection>
        <RevealItem index={0}>
          <SectionIcon src={imgGoals} alt="" />
        </RevealItem>
        <RevealItem index={1}>
          <SectionHeader eyebrow="Goals" title="Where User Needs Meet Business Needs" />
        </RevealItem>
        <RevealItem index={2} style={{ width: '100%', maxWidth: 592 }}>
          <GoalGroup
            label="User Goals"
            items={[
              {
                title: 'Send broadcasts efficiently',
                body: 'Create and schedule broadcasts without unnecessary steps or page switching.',
              },
              {
                title: 'Manage contacts with ease',
                body: 'Set up contact variables quickly without a complicated process.',
              },
            ]}
          />
        </RevealItem>
        <RevealItem index={3} style={{ width: '100%', maxWidth: 592 }}>
          <GoalGroup
            label="Business Goals"
            items={[
              {
                title: 'Reduce rework in broadcast creation',
                body: "Preserve user input when switching between broadcast types, so ops teams don't lose progress or redo work mid-task.",
              },
              {
                title: 'Support operational teams',
                body: 'Make the dashboard simple enough that internal teams can work faster and with less confusion.',
              },
            ]}
          />
        </RevealItem>
      </AnimatedSection>

      <Divider />

      {/* Design */}
      <AnimatedSection>
        <RevealItem index={0}>
          <SectionIcon src={imgDesign} alt="" />
        </RevealItem>
        <RevealItem index={1} >
          <SectionHeader eyebrow="Design" title="From Concept to Interface" />
        </RevealItem>
        <RevealItem index={2}>
          <DesignBlock
            title="Unifying Broadcast Creation"
            body="Instant and scheduled broadcasts previously lived on separate pages. If a user started filling an instant broadcast form and decided to schedule it instead, they had to leave the page, open a new one, and rebuild the form from scratch. Consolidating both types into a single page with a mode toggle, while preserving whatever the user had already entered, cut the flow from 6 steps to 4 and reduced duplicate form entry by 50%."
            imageWidth={880}
            textWidth={592}
            images={[{ src: imgBroadcast, alt: 'Unified broadcast creation/', aspectRatio: '16 / 12' }]}
          />
        </RevealItem>
        <RevealItem index={3} style={{ width: '100%', maxWidth: 592 }}>
          <SoftDivider />
        </RevealItem>
        <RevealItem index={4}>
          <DesignBlock
            title="Validating Contact Data"
            body={`Contact input previously offered three methods, including copy-paste, which created ambiguity about formatting and often led to mismatched data. I removed the copy-paste option and added a Match Data confirmation step: each column is checked against existing variables, and any unmatched or empty fields are flagged with a clear "Unmatch" status. Users can fix mismatches inline, either mapping to an existing variable or creating a new one, before completing the group.`}
            imageWidth={880}
            textWidth={592}
            images={[
              { src: imgContact1, alt: 'Contact data validation', aspectRatio: 'cover' },
              { src: imgContact2, alt: 'Match data confirmation', aspectRatio: 'cover' },
            ]}
          />
        </RevealItem>
        <RevealItem index={5} style={{ width: '100%', maxWidth: 592 }}>
          <SoftDivider />
        </RevealItem>
        <RevealItem index={6}>
          <DesignBlock
            title="Refreshing File Management"
            body={`Beyond a visual refresh, I added a storage usage bar broken down by file type, document, image, video, and more, so teams can see exactly what's taking up space instead of just a total number. File type filters also make it easier to find specific assets as the library grows.`}
            imageWidth={880}
            textWidth={592}
            images={[
              { src: imgFiles1, alt: 'File management storage breakdown', aspectRatio: 'cover' },
              { src: imgFiles2, alt: 'File type filters', aspectRatio: 'cover' },
            ]}
          />
        </RevealItem>
        <RevealItem index={7} style={{ width: '100%', maxWidth: 592 }}>
          <SoftDivider />
        </RevealItem>
        <RevealItem index={8}>
          <DesignBlock
            title="Expanding Channel Reporting"
            body="Reporting previously showed only totals, not enough for teams to understand performance per broadcast. I added a per-broadcast delivery table across all channels, showing sent, delivered, read, and failed counts. For WhatsApp specifically, I also added a template category breakdown (Marketing, Utility, Free), since cost and delivery rules differ by category, giving teams the detail they need to understand both performance and cost."
            imageWidth={880}
            textWidth={592}
            images={[{ src: imgReport, alt: 'Channel reporting detail', aspectRatio: 'cover' }]}
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
          <SectionHeader eyebrow="Outcomes" title="Measurable Impact" />
        </RevealItem>
        <RevealItem index={2} style={{ width: '100%', maxWidth: 592 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <SubHeading>33% Fewer Steps in Broadcast Creation</SubHeading>
            <BodyText>
              Consolidating instant and scheduled broadcasts into a single flow reduced the
              process from 6 steps to 4.
            </BodyText>
          </div>
        </RevealItem>
        <RevealItem index={3} style={{ width: '100%', maxWidth: 592 }}>
          <SoftDivider />
        </RevealItem>
        <RevealItem index={4} style={{ width: '100%', maxWidth: 592 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <SubHeading>50% Less Duplicate Form Entry</SubHeading>
            <BodyText>
              Preserving user input when switching between broadcast types eliminated the need
              to redo work already completed.
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
          <SectionHeader eyebrow="Learnings" title="What I'd Carry Forward" />
        </RevealItem>
        <RevealItem index={2} style={{ width: '100%', maxWidth: 592 }}>
          <LearningItem
            title="Simplicity Over Separation"
            body={`Whether merging two broadcast flows into one page or cutting redundant options in contact setup, the pattern was the same: less isn't just fewer elements, it's fewer decisions the user has to make. The answer was almost always in reducing choice, not adding structure.`}
          />
        </RevealItem>
        <RevealItem index={3} style={{ width: '100%', maxWidth: 592 }}>
          <LearningItem
            title="Designing for Two Audiences"
            body={`OCA Blast is used directly by business clients and supported by OCA's internal operational team. Every design decision had to work for both, simple enough for end users to navigate independently, and clear enough for ops teams to troubleshoot quickly.`}
          />
        </RevealItem>
        <RevealItem index={4} style={{ width: '100%', maxWidth: 592 }}>
          <LearningItem
            title="Collaborative Design in a Product Team"
            body="Working closely with a UX Lead and Product Owner meant design decisions were always grounded in both user needs and business priorities, making the work stronger and easier to ship."
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
