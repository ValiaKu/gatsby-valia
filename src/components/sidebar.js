import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTableCellsLarge,
  faArrowRightFromBracket,
  faBuilding,
  faFingerprint,
  faFileLines,
  faCircleUser,
  faBug,
} from "@fortawesome/free-solid-svg-icons"

import "./sidebar.scss"

const Sidebar = ({ siteTitle }) => (
  <aside class="side-box shadow">
    <div style={{ margin: `0 auto` }}>
      <StaticImage
        src="../images/logo.png"
        class="logo-img"
        alt="Company Main Page"
      />
    </div>

    <section class="user-box">
      <div style={{ margin: `0 auto` }}>
        <StaticImage
          src="../images/girl.png"
          alt="User avatar"
          class="avatar-img"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <span class="greeting-text">Hello, Rusalba Ruiz</span>
      <span class="welcome-text">Welcome back to your insurance portal</span>

      <span class="plan-box">
        You plan:
        <strong class="status-free">Free</strong>
      </span>

      <button class="btn btn-primary btn-lg">
        <span>Create new plan</span>
        <i>+</i>
      </button>
    </section>

    <nav class="navbar navbar-expand ">
      <ul class="user-menu">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faTableCellsLarge} size="2x" />
            <span>Overview</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faFingerprint} size="2x" />
            <span>Policy</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faBug} size="2x" />
            <span>Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faBuilding} size="2x" />
            <span>Company</span>
          </Link>
        </li>{" "}
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faCircleUser} size="2x" />
            <span>User Account</span>
          </Link>
        </li>{" "}
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faFileLines} size="2x" />
            <span>History</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" />
            <span>Log out</span>
          </Link>
        </li>
      </ul>
    </nav>
  </aside>
)

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
