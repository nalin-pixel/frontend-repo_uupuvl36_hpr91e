import Spline from '@splinetool/react-spline'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white dark:from-black/70 dark:via-black/60 dark:to-black" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="">
          <p className="text-sm uppercase tracking-widest text-gray-700 dark:text-gray-300">Hello, I am</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-gray-900 dark:text-white">Michellea Sera</span>
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
            Web Developer & UI/UX and Graphic Designer
          </p>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-xl">
            Seorang siswi SMA yang passionate dalam menciptakan solusi digital inovatif.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 font-medium shadow-lg shadow-purple-500/25 transition-transform hover:translate-y-[-2px] active:translate-y-[0px]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 px-6 py-3 font-medium text-purple-600 dark:text-purple-300 hover:bg-purple-50/60 dark:hover:bg-white/5 transition"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>

        <div className="lg:justify-self-end">
          <div className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-full border-4 border-purple-400/70 shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-purple-200 to-indigo-200 dark:from-purple-900/40 dark:to-indigo-900/30 backdrop-blur flex items-center justify-center">
            <span className="text-5xl">🪄</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-purple-500/60 via-purple-400/60 to-indigo-500/60" />
    </section>
  )
}
