import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 bg-white/70 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">MS</span>
          <span className="ml-2">Michellea Sera</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:scale-105 active:scale-95 transition"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-purple-500" />
            )}
          </button>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 dark:border-white/10"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                {l.label}
              </a>
            ))}
            <button
              aria-label="Toggle theme"
              onClick={() => {
                onToggleTheme()
                setOpen(false)
              }}
              className="mt-1 inline-flex h-10 w-full items-center justify-center rounded-md border border-black/10 dark:border-white/10"
            >
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
