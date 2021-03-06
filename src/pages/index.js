import React, { useState } from "react"
import "../styles/index.scss"
import NavBar from "../components/NavBar"
import MainSection from "../components/MainSection"
import SquareSection from "../components/SquareSection"
import AboutSection from "../components/AboutSection"
import FooterSection from "../components/FooterSection"
import ContactSection from "../components/ContactSection"
import Seo from "../components/Seo"

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false)
  return (
    <main>
      <Seo page="Home" />
      <NavBar setContactOpen={setContactOpen} />
      <MainSection />
      <SquareSection />
      <AboutSection contactOpen={contactOpen} setContactOpen={setContactOpen} />
      <ContactSection contactOpen={contactOpen} />
      <FooterSection />
    </main>
  )
}
