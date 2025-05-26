import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>M</span>
        <span>ihailo</span>
      </a>
      <div>
        <p>
          Coded in <img src={reactIcon} alt="React" /> with
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/mihailo-stojkovic/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/mihailokg95"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  )
}
