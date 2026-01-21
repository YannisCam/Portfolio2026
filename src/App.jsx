import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import { projects } from './data/projects'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ProjectDetail from './pages/ProjectDetail'

function ScrollHandler() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash) {
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [location])

  return null
}

function App() {
  const navigate = useNavigate()

  const handleNav = (section) => {
    navigate('/', { state: { scrollTo: section } })
  }

  return (
    <div className="app-shell">
      <Header onNavigate={handleNav} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage projects={projects} onNavigate={handleNav} />}
          />
          <Route
            path="/projects/:slug"
            element={<ProjectDetail projects={projects} />}
          />
        </Routes>
      </main>
      <Footer />
      <ScrollHandler />
    </div>
  )
}

export default App
