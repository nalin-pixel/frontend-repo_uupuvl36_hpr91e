import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      const progress = document.getElementById('scroll-progress')
      if (!progress) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const width = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      progress.style.width = `${width}%`
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white transition-colors">
      <div id="scroll-progress" className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 z-50" style={{ width: 0 }} />

      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      <main>
        <Hero />
        <Skills />
        {/* Sections like About, Projects, Contact can be added next iterations */}
      </main>

      <Footer />

      <div className="fixed inset-0 pointer-events-none mix-blend-soft-light">
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(168,139,250,0.12),transparent_40%)]" />
      </div>
    </div>
  )
}

export default App
