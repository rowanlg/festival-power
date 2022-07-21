import React from "react"
import "../styles/ContactSection.scss"
import { StaticImage } from "gatsby-plugin-image"

const ContactSection = ({ contactOpen }) => {
  return (
    <div
      className="contact-container"
      style={
        contactOpen
          ? { height: "600px", opacity: "1" }
          : { height: "0", opacity: 0 }
      }
    >
      <StaticImage
        src="../assets/contact-background-image.jpg"
        alt="Festival Power Crowd"
        placeholder="blurred"
        layout="constrained"
        className="background"
      />
      <div
        className="content"
        style={contactOpen ? { opacity: "1" } : { opacity: "0" }}
      >
        <div className="text">
          <h3>GET IN TOUCH</h3>
          <p>
            <a
              href="mailto:info@festivalpower.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@festivalpower.co.uk
            </a>
          </p>
        </div>
        <form
          className="form"
          name="contact"
          method="POST"
          data-netlify="true"
          style={contactOpen ? { display: "block" } : { display: "none" }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              <input type="text" name="name" placeholder="NAME" required />
            </label>
          </p>
          <p>
            <label>
              <input type="email" name="email" placeholder="EMAIL" required />
            </label>
          </p>
          <p>
            <label>
              <textarea
                name="message"
                placeholder="MESSAGE"
                required
              ></textarea>
            </label>
          </p>
          <p>
            <button type="submit">SEND</button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default ContactSection
