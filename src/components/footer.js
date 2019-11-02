import React from "react"

const Footer = () => (
  <footer>
    <div className="container-fluid text-center">
      <span className="text-muted">© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        {` `}
        by Jettro</span>
    </div>
  </footer>
)

export default Footer