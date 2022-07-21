import React from "react"
import "../styles/AboutSection.scss"
import { StaticImage } from "gatsby-plugin-image"

const AboutSection = ({ contactOpen, setContactOpen }) => {
  return (
    <div className="about-container" id="about-section">
      <h1 className="title">
        Experts in <br />
        Temporary Power <br />
        Solutions
      </h1>
      <p className="text-1">
        Festival Power was founded in 2021. Having worked in events for over 15
        years, the team behind Festival Power are enthusiastic to join the ever
        growing industry and to use their experience to provide an excellent
        service to their clients. From small outdoor weddings to large scale
        music festivals we can provide generators, temporary electrical
        installations and site lighting. Festival Power will incorporate our
        fresh ideas and creativity into designing the right package for your
        event.
      </p>
      <p className="text-2">
        We have launched the company with a large stock of distribution boards,
        cabling and lighting options. We have already built key relationships
        with some of the UKs biggest generator suppliers to guarantee a reliable
        power supply for your event. Get in touch today to discuss creating a
        unique and special experience for your event.
      </p>
      <StaticImage
        src="../assets/festival-image1.jpg"
        alt="Festival Photo"
        placeholder="blurred"
        layout="constrained"
        className="image-1"
      />
      <StaticImage
        src="../assets/festival-image2.jpg"
        alt="Festival Photo 2"
        placeholder="blurred"
        layout="constrained"
        className="image-2"
      />
      <button
        className="contact-us"
        onClick={() => {
          setContactOpen(!contactOpen)
        }}
      >
        CONTACT US
      </button>
    </div>
  )
}

export default AboutSection
