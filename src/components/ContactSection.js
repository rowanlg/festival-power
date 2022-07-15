import React from "react"
import "../styles/ContactSection.scss"

const ContactSection = ({ contactOpen }) => {
  return (
    <div
      className="contact-container"
      style={
        contactOpen
          ? { height: "500px", opacity: "1" }
          : { height: "0", opacity: 0 }
      }
    >
      <div></div>
    </div>
  )
}

export default ContactSection
