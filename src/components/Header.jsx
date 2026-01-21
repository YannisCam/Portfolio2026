import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { label: 'Accueil', target: 'hero' },
  { label: 'A propos', target: 'about' },
  { label: 'Compétences', target: 'skills' },
  { label: 'Projets', target: 'projects' },
  { label: 'Contact', target: 'contact' },
]

function Header({ onNavigate }) {
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setHidden(currentY > lastY && currentY > 80)
      setLastY(currentY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  const handleNavClick = (target) => {
    onNavigate(target)
    setMenuOpen(false)
  }

  return (
    <header className={`main-header ${hidden ? 'hidden' : ''}`}>
      <div className="header-shell container d-flex justify-content-between align-items-center">
        <nav className="nav-desktop d-none d-lg-flex gap-2 gap-md-3">
          {navItems.map((item) => (
            <button
              key={item.target}
              className="nav-link-btn"
              onClick={() => handleNavClick(item.target)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <button 
          className="nav-toggle d-lg-none"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      
      {menuOpen && (
        <nav className="nav-mobile d-lg-none">
          {navItems.map((item) => (
            <button
              key={item.target}
              className="nav-mobile-link"
              onClick={() => handleNavClick(item.target)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}

Header.propTypes = {
  onNavigate: PropTypes.func.isRequired,
}

export default Header
