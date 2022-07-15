import React from "react"
import "../styles/FooterSection.scss"

const FooterSection = () => {
  return (
    <div className="footer-container" id="contact-section">
      <div className="footer-flex">
        <h2>POWERING CREATIVITY, ADVENTURE & PASSION</h2>
        <div className="line" />
        <div className="address-box">
          <h4>WHERE TO FIND US</h4>
          <p>
            Festival Power Ltd <br />
            Unit 5 Parkway Trading Estate <br />
            St Werburghs Bristol <br />
            BS2 9PG
          </p>
        </div>
      </div>
      <p className="footer-text">
        Designed by{" "}
        <a href="https://aidybrooks.co.uk" target="_blank" rel="noreferrer">
          Aidy & Co
        </a>
        &nbsp;© {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default FooterSection
