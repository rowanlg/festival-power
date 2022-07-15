import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/NavBar.scss"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

const NavBar = ({ setContactOpen }) => {
  return (
    <nav>
      <Link to="/">
        <StaticImage
          src="../assets/Main-Logo.png"
          alt="Festival Power Logo"
          placeholder="tracedSVG"
          height={140}
        />
      </Link>
      <div>
        <ul>
          <li onClick={() => scrollTo("#home-section")}>HOME</li>
          <li onClick={() => scrollTo("#about-section")}>ABOUT</li>
          <li
            onClick={() => {
              // setContactOpen(true)
              scrollTo("#contact-section")
            }}
          >
            CONTACT
          </li>
          {/* <li>BLOG</li> */}
        </ul>
      </div>
      <div className="burger">
        <div />
        <div />
        <div />
      </div>
    </nav>
  )
}

export default NavBar
