import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiExternalLink, FiFigma, FiGithub } from 'react-icons/fi'
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
  SiDocker,
  SiPostman,
  SiCanva,
} from 'react-icons/si'

const skillsIcons = {
  'React': SiReact,
  'Angular': SiAngular,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'Bootstrap': SiBootstrap,
  'PHP': SiPhp,
  'Spring Boot': SiSpringboot,
  'Chart.js': SiChartdotjs,
  'Adobe': SiAdobecreativecloud,
  'MySQL': SiMysql,
  'mysql': SiMysql,
  'Blender': SiBlender,
  'Figma': FiFigma,
  'API REST': FiExternalLink,
  'Tests UI': SiReact,
  'Performance': SiReact,
  'Tracking': SiReact,
  'Auth': SiReact,
  'Design System': SiReact,
  'Routing': SiReact,
  'Animation légère': SiReact,
  'SEO': SiReact,
  'Accessibilité': SiReact,
  'Docker': SiDocker,
  'Postman': SiPostman,
  'JsPDF': SiJavascript,
  'Stripe': SiReact,
  'Adobe Premiere Pro': SiAdobecreativecloud,
  'Journalisme': SiReact,
  'Outils audiovisuels': SiReact,
  'Canva': SiCanva,
}

function ProjectDetail({ projects }) {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null)
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="container section">
        <button className="btn btn-outline-light mb-3" type="button" onClick={() => navigate(-1)}>
          <FiArrowLeft /> Retour
        </button>
        <h2>Projet introuvable</h2>
        <p className="text-muted">Le projet demandé n’existe pas.</p>
      </div>
    )
  }

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
    <div className="project-detail">
      <section className="detail-hero">
        <div className="container d-flex flex-column gap-3">
          <button className="btn btn-outline-light align-self-start" type="button" onClick={() => navigate(-1)}>
            <FiArrowLeft /> Retour
          </button>
          <p className="eyebrow">{project.tagline}</p>
          <h1>{project.title}</h1>
          <p className="lead col-lg-7">{project.summary}</p>
          <div className="d-flex gap-2 flex-wrap">
            {project.links.figma && (
              <a className="btn btn-primary" href={project.links.figma}>
                <FiFigma /> Figma
              </a>
            )}
            {project.links.site && (
              <a className="btn btn-primary" href={project.links.site}>
                <FiExternalLink /> Site
              </a>
            )}
            {project.links.github && (
              <a className="btn btn-primary" href={project.links.github}>
                <FiGithub /> GitHub
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="row g-4">
          <div className="col-lg-7">
            <h3>Contexte</h3>
            <p className="text-muted mt-2" style={{ textAlign: 'justify' }}>{project.context}</p>
            <div className="mt-4">
              <h4>Problèmes</h4>
              <p className="text-muted mt-2" style={{ textAlign: 'justify' }}>{project.problems}</p>
            </div>
            <div className="mt-3">
              <h4>Résultats</h4>
              <p className="text-muted mt-2" style={{ textAlign: 'justify' }}>{project.results}</p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="detail-gallery">
              <div className="detail-main" style={{ background: project.mainImage }} aria-hidden="true" onClick={() => setSelectedImage(project.mainImage)} role="button" tabIndex="0" />
              <div className="detail-thumbs">
                {project.gallery.map((gradient, index) => (
                  <div key={index} className="thumb" style={{ background: gradient }} aria-hidden="true" onClick={() => setSelectedImage(gradient)} role="button" tabIndex="0" />
                ))}
              </div>
            </div>
            <div className="row g-3 mt-3">
              <div className="col-sm-6">
                <div className="info-chip">
                  <small className="text-muted">Durée</small>
                  <div>{project.duration}</div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="info-chip">
                  <small className="text-muted">Équipe</small>
                  <div>{project.team}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="mt-1">
          <h4>Compétences mobilisées</h4>
          <div className="skills-ribbon-wrapper">
            <div className="skills-ribbon">
              {[...project.skills, ...project.skills, ...project.skills].map((skill, idx) => {
                const IconComponent = skillsIcons[skill]
                return (
                  <div key={`${skill}-${idx}`} className="skill-icon">
                    {IconComponent ? <IconComponent /> : <span>●</span>}
                    <span>{skill}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container section" style={{ paddingTop: '30px' }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Autres projets</h3>
          <Link to="/" className="text-link">Retour à l’accueil</Link>
        </div>
        <div className="row g-4">
          {otherProjects.map((p) => (
            <div key={p.slug} className="col-md-4">
              <Link to={`/projects/${p.slug}`} className="other-card">
                <div className="other-visual" style={{ background: p.mainImage }} aria-hidden="true" />
                <div className="p-3">
                  <p className="eyebrow">{p.tagline}</p>
                  <h4 className="mb-1">{p.title}</h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>

    {selectedImage && (
      <div className="lightbox" onClick={() => setSelectedImage(null)}>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <div className="lightbox-image" style={{ background: selectedImage }} />
          <button className="lightbox-close" onClick={() => setSelectedImage(null)} type="button">
            ✕
          </button>
        </div>
      </div>
    )}
    </>
  )
}

ProjectDetail.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      tagline: PropTypes.string,
      summary: PropTypes.string,
      mainImage: PropTypes.string,
      gallery: PropTypes.arrayOf(PropTypes.string),
      context: PropTypes.string,
      duration: PropTypes.string,
      team: PropTypes.string,
      problems: PropTypes.string,
      results: PropTypes.string,
      skills: PropTypes.arrayOf(PropTypes.string),
      links: PropTypes.object,
    }),
  ).isRequired,
}

export default ProjectDetail
