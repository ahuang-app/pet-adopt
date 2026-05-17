import { Link, useLocation } from 'react-router-dom'
import { PawPrint } from 'lucide-react'

const links = [
  { to: '/', label: '首页' },
  { to: '/pets', label: '毛小孩' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-warm-50/90 backdrop-blur-sm border-b-2 border-dashed border-warm-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-heading text-xl text-warm-600">
          <PawPrint className="w-6 h-6" />
          PetAdopt
        </Link>
        <div className="flex gap-6">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-body font-semibold text-sm transition-colors hover:text-warm-500 ${
                location.pathname === to ? 'text-warm-500 underline underline-offset-4 decoration-dashed decoration-warm-300' : 'text-warm-700'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
