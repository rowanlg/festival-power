import React from "react"
import { Link } from "gatsby"
// import "../styles/index.scss"
import NavBar from "../components/NavBar"
import FooterSection from "../components/FooterSection"
import Seo from "../components/Seo"

const ErrorPage = ({}) => {
  return (
    <main>
      <Seo page="404 page not found" />
      <NavBar />
      <h3 style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
        Uh oh - Looks like you've gone down the wrong road
      </h3>
      <p
        style={{
          maxWidth: "400px",
          margin: "auto auto 5rem",
          textAlign: "center",
        }}
      >
        Click{" "}
        <Link to="/" style={{ color: "#00b9c3" }}>
          here
        </Link>{" "}
        to get back to safety
      </p>
      <FooterSection />
    </main>
  )
}

export default ErrorPage
