import React from "react"
import useWindowSize from "../utils/useWindowSize"
import "../styles/index.scss"
import NavBar from "../components/NavBar"
import MainSection from "../components/MainSection"
import SquareSection from "../components/SquareSection"
import AboutSection from "../components/AboutSection"
import FooterSection from "../components/FooterSection"

export default function Home() {
  const innerheight = useWindowSize().height
  return (
    <main style={{ minHeight: innerheight }}>
      <NavBar />
      <MainSection />
      <SquareSection />
      <AboutSection />
      <FooterSection />
    </main>
  )
}
