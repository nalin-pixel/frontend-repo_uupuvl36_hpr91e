import { Github, Linkedin, Instagram, Dribbble, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Michellea Sera. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          <a href="https://github.com" aria-label="GitHub" className="hover:text-purple-500 transition"><Github className="h-5 w-5" /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-purple-500 transition"><Linkedin className="h-5 w-5" /></a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-purple-500 transition"><Instagram className="h-5 w-5" /></a>
          <a href="https://dribbble.com" aria-label="Dribbble" className="hover:text-purple-500 transition"><Dribbble className="h-5 w-5" /></a>
        </div>
        <a href="#home" className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-300 hover:translate-y-[-2px] transition">
          <ArrowUp className="h-4 w-4" /> Back to top
        </a>
      </div>
    </footer>
  )
}
