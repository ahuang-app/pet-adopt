import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PetListPage from './pages/PetListPage'
import PetDetailPage from './pages/PetDetailPage'
import StoryDetailPage from './pages/StoryDetailPage'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pets" element={<PetListPage />} />
          <Route path="/pets/:id" element={<PetDetailPage />} />
          <Route path="/stories/:id" element={<StoryDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
