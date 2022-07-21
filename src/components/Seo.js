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
        content="Experts in Temporary Power Solutions for small and large events around the UK"
      />
      <meta name="image" content={ImageCard} />
      <meta property="og:title" content={page} />
      <meta property="og:url" content="https://festivalpower.co.uk" />
      <meta property="og:image" content={ImageCard} />
      <meta property="og:site_name" content="Festival Power" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Experts in Temporary Power Solutions for small and large events around the UK"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image:alt"
        content="Festival Power - Powering Creativity, Adventure & Passion"
      />
      <link rel="canonical" href="https://festivalpower.netlify.app" />
    </Helmet>
  )
}

export default Seo
