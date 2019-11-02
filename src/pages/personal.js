import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Personal" />
    <h1>Hi personal</h1>
    <Link to="/professional/">Professional</Link>
  </Layout>
)

export default IndexPage
