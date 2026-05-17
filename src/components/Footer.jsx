import { Heart, PawPrint } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-warm-100 border-t-2 border-dashed border-warm-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center gap-2 font-heading text-lg text-warm-600 mb-2">
          <PawPrint className="w-5 h-5" />
          PetAdopt
        </div>
        <p className="text-sm text-warm-700/60 flex items-center justify-center gap-1">
          Made with <Heart className="w-3.5 h-3.5 text-warm-500 fill-warm-500" /> for every furry friend
        </p>
        <p className="text-xs text-warm-700/40 mt-1">© 2026 PetAdopt. All rights reserved.</p>
      </div>
    </footer>
  )
}
