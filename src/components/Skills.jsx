import { useEffect, useRef } from 'react'

const skills = [
  { category: 'Frontend', items: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
  ]},
  { category: 'UI/UX', items: [
    { name: 'Figma', level: 85 },
    { name: 'Adobe XD', level: 75 },
  ]},
  { category: 'Graphic Design', items: [
    { name: 'Photoshop', level: 88 },
    { name: 'Illustrator', level: 70 },
  ]},
]

function useOnScreen(ref) {
  const observerRef = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.2 }
    )
    observerRef.current.observe(el)
    return () => observerRef.current?.disconnect()
  }, [ref])
}

export default function Skills() {
  const ref = useRef(null)
  useOnScreen(ref)

  return (
    <section id="skills" className="relative py-20 bg-white dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Skills</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Tools and technologies I work with</p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 transition duration-[1200ms]">
          {skills.map((group) => (
            <div key={group.category} className="rounded-2xl border border-black/5 dark:border-white/10 p-6 backdrop-blur bg-white/60 dark:bg-white/5">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{group.category}</h3>
              <div className="space-y-4">
                {group.items.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-gray-200/70 dark:bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-1000"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
