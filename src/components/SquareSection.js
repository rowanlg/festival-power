import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/SquareSection.scss"

const SquareSection = () => {
  return (
    <div className="container">
      <div className="square-box">
        {/* <StaticImage
          src="../assets/square.png"
          alt="Square 1"
          placeholder="blurred"
          layout="constrained"
          width={50}
        /> */}
        <svg
          width="248"
          height="247"
          viewBox="0 0 248 247"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.969482"
            y="123.5"
            width="174.323"
            height="174.323"
            transform="rotate(-45 0.969482 123.5)"
            fill="url(#paint0_linear_10_23)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10_23"
              x1="1.42048"
              y1="123.101"
              x2="175.692"
              y2="297.372"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.475664" stop-color="#00B9C3" />
              <stop offset="0.5" stop-color="#00B9C3" />
              <stop offset="0.5001" stop-color="#DC4D64" />
            </linearGradient>
          </defs>
        </svg>
        <p>We Create</p>
      </div>
      <div className="square-box">
        {/* <StaticImage
          src="../assets/square.png"
          alt="Square 2"
          placeholder="blurred"
          layout="constrained"
          width={50}
        /> */}
        <svg
          width="248"
          height="247"
          viewBox="0 0 248 247"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.969482"
            y="123.5"
            width="174.323"
            height="174.323"
            transform="rotate(-45 0.969482 123.5)"
            fill="url(#paint0_linear_10_23)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10_23"
              x1="1.42048"
              y1="123.101"
              x2="175.692"
              y2="297.372"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.475664" stop-color="#00B9C3" />
              <stop offset="0.5" stop-color="#00B9C3" />
              <stop offset="0.5001" stop-color="#DC4D64" />
            </linearGradient>
          </defs>
        </svg>
        <p>We Install</p>
      </div>
      <div className="square-box">
        {/* <StaticImage
          src="../assets/square.png"
          alt="Square 3"
          placeholder="blurred"
          layout="constrained"
          width={50}
        /> */}
        <svg
          width="248"
          height="247"
          viewBox="0 0 248 247"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.969482"
            y="123.5"
            width="174.323"
            height="174.323"
            transform="rotate(-45 0.969482 123.5)"
            fill="url(#paint0_linear_10_23)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10_23"
              x1="1.42048"
              y1="123.101"
              x2="175.692"
              y2="297.372"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.475664" stop-color="#00B9C3" />
              <stop offset="0.5" stop-color="#00B9C3" />
              <stop offset="0.5001" stop-color="#DC4D64" />
            </linearGradient>
          </defs>
        </svg>
        <p>We Deliver</p>
      </div>
    </div>
  )
}

export default SquareSection
