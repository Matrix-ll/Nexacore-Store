import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (href: string) => {
    setOpen(false)
    if (href === '/') {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else if (href.startsWith('/#')) {
      const id = href.slice(2)
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav data-component="src/components/Navbar.tsx" className="fixed top-0 inset-x-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
              <svg className="w-7 h-7 text-gray-950" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16 6l2 4 4.5 1-3 4 1 5-4.5-2.5L11.5 20l1-5-3-4 4.5-1 2-4z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">NexaCore</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNavClick(l.href)}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Login</Link>
            <button onClick={() => handleNavClick('/#pricing')} className="btn-primary text-xs px-5 py-2.5">Get Started</button>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-gray-400 hover:text-white" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-gray-800/50 mt-2 pt-4 flex flex-col gap-3">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNavClick(l.href)}
                className="text-sm text-gray-400 hover:text-white transition-colors py-1 text-left"
              >
                {l.label}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-gray-800/50">
              <Link to="/" className="text-sm text-gray-400 hover:text-white">Login</Link>
              <button onClick={() => handleNavClick('/#pricing')} className="btn-primary text-xs px-5 py-2.5">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
