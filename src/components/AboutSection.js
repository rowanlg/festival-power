import React from "react"
import "../styles/AboutSection.scss"
import { StaticImage } from "gatsby-plugin-image"

const AboutSection = ({ contactOpen, setContactOpen }) => {
  return (
    <div className="about-container" id="about-section">
      <h1 className="title">
        EXPERTS
        <br /> IN SMALL-SCALE
        <br /> POWER SOLUTIONS
      </h1>
      <p className="text-1">
        Festival Power was founded in 2021 from a need for a young, fresh
        company to join the ever growing industry. Having worked in events for
        over 15 years, the team behind Festival Power are in the perfect
        position to use their experience across so many parts of the industry to
        provide an excellent service to their clients. From small outdoor
        weddings to large scale music festivals we can provide generators,
        temporary electrical installations and site lighting.
      </p>
      <p className="text-2">
        We have a large stock of distribution boards, cabling and lighting and
        have relationships with some of the UKs biggest generator suppliers to
        ensure we have a reliable power supply at all times.
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
