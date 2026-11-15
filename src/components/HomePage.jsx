import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiFigma, FiMail, FiLinkedin, FiDownload } from 'react-icons/fi'
import {
  SiReact,
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPhp,
  SiSpringboot,
  SiChartdotjs,
  SiAdobecreativecloud,
  SiMysql,
  SiBlender,
} from 'react-icons/si'

const skills = [
  { name: 'React', icon: SiReact },
  { name: 'Angular', icon: SiAngular },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'PHP', icon: SiPhp },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Chart.js', icon: SiChartdotjs },
  { name: 'Adobe', icon: SiAdobecreativecloud },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Blender', icon: SiBlender },
  { name: 'Figma', icon: FiFigma },
]

function HomePage({ projects, onNavigate }) {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  return (
    <>
    <div className="home">
      <section id="hero" className="hero-section container">
        <div className="hero-content">
          <div className="hero-initials">YC</div>
          <h1 className="hero-title-large">
            {'YANNIS CAMELIN'.split('').map((char, idx) => (
              <span key={idx} className="hero-letter">
                {char}
              </span>
            ))}
          </h1>
          <p className="hero-subtitle">Développeur back-end · Spécialisé en API</p>
        </div>
      </section>

      <section id="about" className="section container">
        <div className="about-content">
          <p className="eyebrow">À propos</p>
          <h2>Développeur web back-end</h2>
          <p className="mt-3" style={{ textAlign: 'justify' }}>
            Jeune étudiant en 3ème année en BUT MMI basé à Meaux, je suis actuellement à la recherche d'un stage d'une durée de 8 semaines minimum à partir de novembre 2026. Rigoureux et motivé, je m'investis pleinement dans les missions qui me sont confiées et je fais preuve d'une grande capacité d'adaptation. Curieux et désireux d'apprendre, j'apprécie découvrir de nouveaux environnements de travail et développer continuellement mes compétences, tant sur le plan technique que professionnel.
          </p>
          <p className="text-muted mt-2" style={{ textAlign: 'justify' }}>
            Disponible pour des missions front React/Angular mais aussi des missions back-end (API, Base de données, Design).
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
            <div>
              <p className="eyebrow">Compétences</p>
              <h2>Des compétences diverses</h2>
            </div>
          </div>
        </div>
        <div className="skills-ribbon-wrapper">
          <div className="skills-ribbon">
            {[...skills, ...skills].map((skill, idx) => {
              const IconComponent = skill.icon
              return (
                <div key={`${skill.name}-${idx}`} className="skill-icon">
                  <IconComponent />
                  <span>{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="section container">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
          <div>
            <p className="eyebrow">Projets</p>
            <h2 className="mb-4">5 projets en détail</h2>
          </div>
        </div>
        <div className="project-stack">
          {projects.map((project, index) => (
            <article key={project.slug} className="mb-3 project-card row g-4 align-items-center">
              <div className="col-lg-6 order-lg-1 order-2">
                <p className="eyebrow">{project.tagline}</p>
                <h3>{project.title}</h3>
                <p className="text-muted mt-2">{project.summary}</p>
                <div className="d-flex gap-3 align-items-center mt-3">
                  <Link className="btn btn-primary" to={`/projects/${project.slug}`}>
                    Voir le détail
                  </Link>
                  <div className="d-flex gap-2">
                    {project.links.figma && (
                      <a className="icon-btn" href={project.links.figma} aria-label="Figma">
                        <FiFigma />
                      </a>
                    )}
                    {project.links.site && (
                      <a className="icon-btn" href={project.links.site} aria-label="Site">
                        <FiExternalLink />
                      </a>
                    )}
                    {project.links.github && (
                      <a className="icon-btn" href={project.links.github} aria-label="GitHub">
                        <FiGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div
                  className="project-visual"
                  style={{ background: project.mainImage }}
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section container contact-section">
        <div className="row g-4 align-items-center">
          <div className="col-lg-4">
            <p className="eyebrow">Contact</p>
            <h2>Me contacter</h2>
          </div>
          <div className="col-lg-8 d-flex flex-wrap gap-3">
            <a className="contact-chip" href="mailto:yannis.camelin@gmail.com">
              <FiMail /> yannis.camelin@gmail.com
            </a>
            <a className="contact-chip contact-cta" href="https://www.linkedin.com/in/yannis-camelin">
              <FiLinkedin /> LinkedIn
            </a>
            <a className="contact-chip contact-cta" href="https://github.com/YannisCam">
              <FiGithub /> GitHub
            </a>
            <a className="contact-chip contact-cta" href="/pdf/CamelinYannis_CV2026.pdf" download>
              <FiDownload /> CV
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

HomePage.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      tagline: PropTypes.string,
      summary: PropTypes.string,
      mainImage: PropTypes.string,
      links: PropTypes.object,
    }),
  ).isRequired,
  onNavigate: PropTypes.func.isRequired,
}

export default HomePage
