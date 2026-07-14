import styled from "styled-components"
import { motion } from "framer-motion"
import { Container, Section, Tag } from "../components/primitives"
import { SectionHeading } from "../components/SectionHeading"
import { PageTransition } from "../components/PageTransition"
import { fadeUp, stagger, viewport } from "../utils/motion"
import { experience } from "../data/experience"

const Timeline = styled(motion.div)`
  position: relative;
  display: grid;
  gap: 28px;
  padding-left: 34px;

  &::before {
    content: "";
    position: absolute;
    left: 7px;
    top: 6px;
    bottom: 6px;
    width: 1px;
    background: ${({ theme }) => theme.colors.border};
  }

  @media (max-width: 560px) {
    padding-left: 26px;
  }
`

const Node = styled(motion.article)`
  position: relative;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  -webkit-backdrop-filter: ${({ theme }) => theme.glassBlur};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: 28px;
  transition: border-color 0.3s ${({ theme }) => theme.transition},
    transform 0.3s ${({ theme }) => theme.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderStrong};
    transform: translateY(-3px);
  }

  &::before {
    content: "";
    position: absolute;
    left: -34px;
    top: 30px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${({ theme, $current }) =>
      $current ? theme.colors.accent : theme.colors.bg};
    border: 2px solid ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 5px ${({ theme }) => theme.colors.accentSoft};
  }

  @media (max-width: 560px) {
    padding: 22px;
    &::before {
      left: -26px;
      top: 26px;
      width: 12px;
      height: 12px;
    }
  }
`

const Head = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 6px;

  h3 {
    font-size: 1.4rem;
  }
`

const Company = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 16px;
`

const Period = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12.5px;
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surfaceStrong};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 6px 13px;
  white-space: nowrap;

  .live {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4ade80;
  }
`

const Summary = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 18px;
`

const Points = styled.ul`
  list-style: none;
  display: grid;
  gap: 11px;
  margin-bottom: 22px;

  li {
    position: relative;
    padding-left: 22px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 15px;
    line-height: 1.6;
  }
  li::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
  }
`

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export function Experience() {
  return (
    <PageTransition>
      <Container>
        <Section>
          <SectionHeading
            eyebrow="Career"
            title="Experience"
            description="Roles where I've designed APIs, shipped features, and helped deliver scalable applications."
          />

          <Timeline variants={stagger} initial="hidden" animate="show">
            {experience.map((job) => (
              <Node key={job.id} variants={fadeUp} $current={job.current}>
                <Head>
                  <div>
                    <h3>{job.role}</h3>
                  </div>
                  <Period>
                    {job.current && <span className="live" aria-hidden />}
                    {job.start} – {job.end}
                  </Period>
                </Head>
                <Company>
                  {job.company} · {job.location}
                </Company>
                <Summary>{job.summary}</Summary>
                <Points>
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </Points>
                <Stack>
                  {job.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </Stack>
              </Node>
            ))}
          </Timeline>
        </Section>
      </Container>
    </PageTransition>
  )
}
