import React, { useState } from "react"
import useWindowSize from "../utils/useWindowSize"
import "../styles/index.scss"
import NavBar from "../components/NavBar"
import MainSection from "../components/MainSection"
import SquareSection from "../components/SquareSection"
import AboutSection from "../components/AboutSection"
import FooterSection from "../components/FooterSection"
import ContactSection from "../components/ContactSection"

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false)
  const innerheight = useWindowSize().height
  // console.log(contactOpen)
  return (
    <main style={{ minHeight: innerheight }}>
      <NavBar setContactOpen={setContactOpen} />
      <MainSection />
      <SquareSection />
      <AboutSection contactOpen={contactOpen} setContactOpen={setContactOpen} />
      <ContactSection contactOpen={contactOpen} />
      <FooterSection />
    </main>
  )
}