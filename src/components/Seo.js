import React from "react"
import { Helmet } from "react-helmet"
import ImageCard from "../../static/site-image.jpg"

const Seo = ({ page }) => {
  return (
    <Helmet>
      <title>Festival Power | {page}</title>
      <html lang="en" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Powering Creativity, Adventure & Passion - From small outdoor weddings to large scale music festivals we provide generators, temporary electrical installations and site lighting."
      />
      <meta name="image" content={ImageCard} />
      <meta property="og:url" content="festivalpower.netlify.app" />
      <meta property="og:site_name" content="Festival Power" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://festivalpower.netlify.app" />
    </Helmet>
  )
}

export default Seo
