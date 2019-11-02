import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Professional" />
    <h1>Hi professional</h1>
    <Link to="/professional/">Professional</Link>
  </Layout>
)

export default IndexPage
