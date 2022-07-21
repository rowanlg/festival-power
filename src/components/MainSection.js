import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import useWindowSize from "../utils/useWindowSize"
import "../styles/MainSection.scss"

const MainSection = () => {
  // const innerheight = useWindowSize().height
  return (
    <div className="main-container" id="home-section">
      {/* <div className="logo"> */}
      <StaticImage
        src="../assets/background-image.jpg"
        alt="Festival Power Main Page Banner"
        placeholder="blurred"
        layout="constrained"
        className="background"
      />
      <div className="centre-graphic">
        <StaticImage
          src="../assets/full-logo.png"
          alt="Festival Power Full Logo"
          placeholder="tracedSVG"
          layout="constrained"
          className="logo-centre"
        />
        {/* <div className="line" />
        <h2>POWERING CREATIVITY, ADVENTURE & PASSION</h2> */}
      </div>
      {/* </div> */}
      <div className="left-side">
        <StaticImage
          src="../assets/left-side.png"
          alt="Left Triangle"
          placeholder="blurred"
          layout="constrained"
          width={250}
        />
      </div>
      <div className="right-side">
        <StaticImage
          src="../assets/right-side.png"
          alt="Right Triangle"
          placeholder="blurred"
          layout="constrained"
          width={250}
        />
      </div>
    </div>
  )
}

export default MainSection
