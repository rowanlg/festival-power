import React from "react"
import "../styles/ContactSection.scss"

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
      <div
        className="content"
        style={contactOpen ? { opacity: "1" } : { opacity: "0" }}
      >
        <h3>
          MESSAGE US
          <br /> FOR A QUOTE
        </h3>
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
