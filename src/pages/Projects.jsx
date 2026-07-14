import styled from "styled-components"
import { motion } from "framer-motion"
import { Container, Section, Tag } from "../components/primitives"
import { SectionHeading } from "../components/SectionHeading"
import { PageTransition } from "../components/PageTransition"
import { GitHubIcon, ArrowUpRight } from "../components/Icons"
import { fadeUp, stagger, viewport } from "../utils/motion"
import { projects } from "../data/projects"

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled(motion.article)`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  -webkit-backdrop-filter: ${({ theme }) => theme.glassBlur};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: 30px;
  overflow: hidden;
  transition: border-color 0.35s ${({ theme }) => theme.transition},
    transform 0.35s ${({ theme }) => theme.transition},
    box-shadow 0.35s ${({ theme }) => theme.transition};

  &::after {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 3px;
    background: ${({ $accent }) => $accent};
    opacity: 0.85;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.borderStrong};
    box-shadow: ${({ theme }) => theme.shadows.lift};
  }
`

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;

  h3 {
    font-size: 1.7rem;
    margin-bottom: 6px;
  }
  .period {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textFaint};
  }
`

const RepoLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surfaceStrong};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: color 0.25s ${({ theme }) => theme.transition},
    border-color 0.25s ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

const Blurb = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.02rem;
  margin-bottom: 12px;
`

const Desc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14.5px;
  margin-bottom: 20px;
`

const Points = styled.ul`
  list-style: none;
  display: grid;
  gap: 10px;
  margin-bottom: 22px;

  li {
    position: relative;
    padding-left: 20px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 9px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ $accent }) => $accent};
  }
`

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`

const ViewLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 22px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  width: fit-content;

  svg {
    transition: transform 0.25s ${({ theme }) => theme.transition};
  }
  &:hover svg {
    transform: translate(2px, -2px);
  }
`

export function Projects() {
  return (
    <PageTransition>
      <Container>
        <Section>
          <SectionHeading
            eyebrow="Selected work"
            title="Projects"
            description="Backend-heavy builds focused on secure APIs, thoughtful data modeling, and performance."
          />

          <Grid variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
            {projects.map((project) => (
              <Card key={project.id} variants={fadeUp} $accent={project.accent}>
                <Top>
                  <div>
                    <h3>{project.name}</h3>
                    <span className="period">{project.period}</span>
                  </div>
                  <RepoLink
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} on GitHub`}
                    title="View source"
                  >
                    <GitHubIcon size={18} />
                  </RepoLink>
                </Top>

                <Blurb>{project.blurb}</Blurb>
                <Desc>{project.description}</Desc>

                <Points $accent={project.accent}>
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </Points>

                <Stack>
                  {project.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </Stack>

                <ViewLink href={project.repo} target="_blank" rel="noopener noreferrer">
                  View source <ArrowUpRight size={16} />
                </ViewLink>
              </Card>
            ))}
          </Grid>
        </Section>
      </Container>
    </PageTransition>
  )
}
