import { Link } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Container, Section, GlassCard, Tag, Eyebrow, Button } from "../components/primitives"
import { SectionHeading } from "../components/SectionHeading"
import { SocialLinks } from "../components/SocialLinks"
import { PageTransition } from "../components/PageTransition"
import { ArrowRight, ArrowUpRight, MapPin, MailIcon } from "../components/Icons"
import { fadeUp, stagger, viewport } from "../utils/motion"
import { profile } from "../data/profile"
import { skillGroups } from "../data/skills"
import { education, certifications } from "../data/education"
import { experience } from "../data/experience"
import { projects } from "../data/projects"

const Hero = styled(Section)`
  padding-top: 72px;
  @media (max-width: 768px) {
    padding-top: 40px;
  }
`

const HeroGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

const Status = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12.5px;
  color: ${({ theme }) => theme.colors.textMuted};
  padding: 7px 14px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};

  span.pulse {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.6);
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.5); }
    70% { box-shadow: 0 0 0 8px rgba(74, 222, 128, 0); }
    100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
  }
`

const Title = styled(motion.h1)`
  font-size: clamp(2.6rem, 6.4vw, 4.6rem);
  margin: 22px 0 18px;

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.accent};
  }
`

const Lead = styled(motion.p)`
  font-size: clamp(1.05rem, 2.2vw, 1.22rem);
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 54ch;
  margin-bottom: 30px;
`

const Actions = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.textFaint};
  font-size: 14px;

  a, span {
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

const HeroCard = styled(GlassCard)`
  padding: 26px;
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 6px;

  .stat {
    padding: 16px;
    border-radius: ${({ theme }) => theme.radii.md};
    background: ${({ theme }) => theme.colors.surfaceStrong};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
  .stat .v {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.accent};
  }
  .stat .l {
    font-size: 12.5px;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-top: 4px;
  }
`

const FocusList = styled.ul`
  list-style: none;
  margin-top: 20px;
  display: grid;
  gap: 10px;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14.5px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
  li::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
  }
`

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`

const SkillCard = styled(GlassCard)`
  padding: 22px;
  h4 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textFaint};
    margin-bottom: 16px;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const InfoCard = styled(GlassCard)`
  h4 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textFaint};
    margin-bottom: 18px;
  }
  .row {
    padding: 14px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
  .row:first-of-type {
    border-top: none;
    padding-top: 0;
  }
  .row .t {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.05rem;
    margin-bottom: 4px;
  }
  .row .s {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 14px;
  }
  .row .d {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.accent};
    margin-top: 6px;
  }
`

const Preview = styled(motion.div)`
  display: grid;
  gap: 16px;
`

const PreviewRow = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 22px 24px;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  transition: border-color 0.3s ${({ theme }) => theme.transition},
    transform 0.3s ${({ theme }) => theme.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateX(4px);
  }
  .left .k {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textFaint};
    margin-bottom: 6px;
  }
  .left .v {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.4rem;
  }
  .left .m {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 14px;
    margin-top: 4px;
  }
  .arrow {
    color: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
  }
`

export function Home() {
  return (
    <PageTransition>
      <Container>
        <Hero>
          <HeroGrid variants={stagger} initial="hidden" animate="show">
            <div>
              <Status variants={fadeUp}>
                <span className="pulse" aria-hidden />
                {profile.available ? "Open to opportunities" : "Currently heads-down"}
              </Status>

              <Title variants={fadeUp}>
                Hey, I&apos;m <em>{profile.name}</em>.
                <br />
         
              </Title>

              <Lead variants={fadeUp}>
                Hands on experience in backend development.
              </Lead>

              <Actions variants={fadeUp}>
                <Button as={Link} to="/projects" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                  See what I&apos;ve built <ArrowRight size={17} />
                </Button>
                <Button as={Link} to="/experience" $variant="ghost" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                  Where I&apos;ve worked
                </Button>
              </Actions>

              <Meta>
                <span>
                  <MapPin size={15} /> {profile.location}
                </span>
                <a href={`mailto:${profile.email}`}>
                  <MailIcon size={15} /> {profile.email}
                </a>
              </Meta>
            </div>

            <motion.div variants={fadeUp}>
              <HeroCard whileHover={{ y: -4 }}>
                <Eyebrow>At a glance</Eyebrow>
                <Stats>
                  {profile.highlights.map((h) => (
                    <div className="stat" key={h.label}>
                      <div className="v">{h.value}</div>
                      <div className="l">{h.label}</div>
                    </div>
                  ))}
                </Stats>
                <FocusList>
                  {profile.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </FocusList>
                <div style={{ marginTop: 24 }}>
                  <SocialLinks />
                </div>
              </HeroCard>
            </motion.div>
          </HeroGrid>
        </Hero>

        <Section>
          <SectionHeading
            eyebrow="Toolkit"
            title="Skills & technologies"
            description="The stack I reach for when designing and shipping backend services."
          />
          <SkillsGrid variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
            {skillGroups.map((group) => (
              <SkillCard key={group.id} variants={fadeUp} whileHover={{ y: -4 }}>
                <h4>{group.label}</h4>
                <div className="items">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </SkillCard>
            ))}
          </SkillsGrid>
        </Section>

        <Section $tight>
          <SectionHeading
            eyebrow="Background"
            title="Education & certifications"
          />
          <TwoCol>
            <InfoCard whileHover={{ y: -4 }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.6 }}>
              <h4>Education</h4>
              {education.map((ed) => (
                <div className="row" key={ed.id}>
                  <div className="t">{ed.degree}</div>
                  <div className="s">
                    {ed.school} · {ed.location}
                  </div>
                  <div className="d">
                    {ed.start} – {ed.end} · {ed.detail}
                  </div>
                </div>
              ))}
            </InfoCard>

            <InfoCard whileHover={{ y: -4 }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.6, delay: 0.08 }}>
              <h4>Certifications</h4>
              {certifications.map((c) => (
                <div className="row" key={c.id}>
                  <div className="t">{c.name}</div>
                  <div className="s">{c.issuer}</div>
                  <div className="d">{c.date}</div>
                </div>
              ))}
            </InfoCard>
          </TwoCol>
        </Section>

        <Section $tight>
          <SectionHeading
            eyebrow="Explore"
            title="Where to go next"
            description="Dig into the roles I've held and the systems I've built."
          />
          <Preview variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
            <motion.div variants={fadeUp}>
              <PreviewRow to="/experience">
                <div className="left">
                  <div className="k">01 — Experience</div>
                  <div className="v">{experience.length} roles, backend-focused</div>
                  <div className="m">
                    {experience[0].role} at {experience[0].company}
                  </div>
                </div>
                <span className="arrow">
                  <ArrowUpRight size={22} />
                </span>
              </PreviewRow>
            </motion.div>
            <motion.div variants={fadeUp}>
              <PreviewRow to="/projects">
                <div className="left">
                  <div className="k">02 — Projects</div>
                  <div className="v">{projects.length} shipped builds</div>
                  <div className="m">
                    {projects.map((p) => p.name).join(" · ")}
                  </div>
                </div>
                <span className="arrow">
                  <ArrowUpRight size={22} />
                </span>
              </PreviewRow>
            </motion.div>
          </Preview>
        </Section>
      </Container>
    </PageTransition>
  )
}
