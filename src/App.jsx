import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ScrollToTop } from "./components/ScrollToTop"
import { Home } from "./pages/Home"
import { Experience } from "./pages/Experience"
import { Projects } from "./pages/Projects"

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
