import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/NavBar.scss"
import { Link } from "gatsby"

const NavBar = () => {
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
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
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
