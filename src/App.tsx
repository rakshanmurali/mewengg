import './styles/sections.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import MissionVision from './components/MissionVision'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Growth from './components/Growth'
import Projects from './components/Projects'
import Clients from './components/Clients'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import EngineeringMotion from './components/EngineeringMotion'
import ScrollEffects from './components/ScrollEffects'

function App() {
  return (
    <>
      <EngineeringMotion />
      <ScrollEffects />
      <Header />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <WhyChooseUs />
        <Services />
        <Growth />
        <Projects />
        <Clients />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
