import styled from "styled-components"
import { Link } from "react-router-dom"
import { Container } from "./primitives"
import { SocialLinks } from "./SocialLinks"
import { profile } from "../data/profile"
import { MailIcon } from "./Icons"

const Wrap = styled.footer`
  margin-top: auto;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 56px 0 40px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

const Word = styled.div`
  h3 {
    font-size: 1.6rem;
    margin-bottom: 12px;
  }
  p {
    color: ${({ theme }) => theme.colors.textMuted};
    max-width: 40ch;
    margin-bottom: 20px;
  }
`

const MailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderStrong};
  padding-bottom: 3px;
  transition: color 0.25s ${({ theme }) => theme.transition},
    border-color 0.25s ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 15px;
    width: fit-content;
    transition: color 0.25s ${({ theme }) => theme.transition};
  }
  a:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const Label = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textFaint};
  margin-bottom: 6px;
`

const Bottom = styled.div`
  margin-top: 48px;
  padding-top: 22px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.textFaint};
  font-size: 13px;
`

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <Wrap>
      <Container>
        <Grid>
          <Word>
            <h3>Let&apos;s build something reliable.</h3>
            <p>
              Open to backend and full-stack roles. The fastest way to reach me is email —
              I read everything.
            </p>
            <MailLink href={`mailto:${profile.email}`}>
              <MailIcon size={16} />
              {profile.email}
            </MailLink>
            <div style={{ marginTop: 24 }}>
              <SocialLinks />
            </div>
          </Word>

          <Nav aria-label="Footer">
            <Label>Pages</Label>
            <Link to="/">Home</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
          </Nav>
        </Grid>

        <Bottom>
          <span>
            &copy; {year} {profile.name}. Built with React, Vite &amp; styled-components.
          </span>
          <span>{profile.location}</span>
        </Bottom>
      </Container>
    </Wrap>
  )
}
