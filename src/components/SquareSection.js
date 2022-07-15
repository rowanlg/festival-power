import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/SquareSection.scss"

const SquareSection = () => {
  return (
    <div className="container">
      <div className="square-box">
        <StaticImage
          src="../assets/square.png"
          alt="Square 1"
          placeholder="blurred"
          layout="constrained"
          width={50}
        />
        <p>We Listen</p>
      </div>
      <div className="square-box">
        <StaticImage
          src="../assets/square.png"
          alt="Square 2"
          placeholder="blurred"
          layout="constrained"
          width={50}
        />
        <p>We Hire</p>
      </div>
      <div className="square-box">
        <StaticImage
          src="../assets/square.png"
          alt="Square 3"
          placeholder="blurred"
          layout="constrained"
          width={50}
        />
        <p>We Install</p>
      </div>
    </div>
  )
}

export default SquareSection
