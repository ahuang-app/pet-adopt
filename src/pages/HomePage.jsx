import HeroSection from '../sections/HeroSection'
import SuccessStories from '../sections/SuccessStories'
import PetCardsSection from '../sections/PetCardsSection'
import ShelterPartners from '../sections/ShelterPartners'
import HowItWorks from '../sections/HowItWorks'
import FinalCTA from '../sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SuccessStories />
      <PetCardsSection />
      <ShelterPartners />
      <HowItWorks />
      <FinalCTA />
    </>
  )
}
