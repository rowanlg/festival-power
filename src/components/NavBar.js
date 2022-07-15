import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/NavBar.scss"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

const NavBar = ({ setContactOpen }) => {
  const [toggleNav, setToggleNav] = useState(false)
  console.log(toggleNav)
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
      <div className="desktop-nav">
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
      <div
        className="burger"
        onClick={() => {
          setToggleNav(!toggleNav)
        }}
      >
        <div
          style={
            toggleNav
              ? {
                  transform: "rotate(45deg) translate(0px, 13px)",
                  width: "35px",
                }
              : { transform: "rotate(0)" }
          }
        />
        <div
          style={
            toggleNav
              ? { opacity: "0", transform: "translate(75px, 0px)" }
              : { opacity: "1" }
          }
        />
        <div
          style={
            toggleNav
              ? {
                  transform: "rotate(-45deg)",
                  width: "35px",
                }
              : { transform: "rotate(0)" }
          }
        />
      </div>
      <div
        className="hidden-menu"
        style={
          toggleNav
            ? { transform: "translate(0, 0)" }
            : { transform: "translate(-150vw, 0)" }
        }
        onClick={() => {
          setToggleNav(!toggleNav)
        }}
      >
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
    </nav>
  )
}

export default NavBar
