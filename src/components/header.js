import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header class="header-box">
    <nav class="navbar navbar-expand fixed-top shadow">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Overview
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Policy
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Reports
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
