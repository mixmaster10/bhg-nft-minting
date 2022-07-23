import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll"
import "./style.scss"

import LOGO from "resources/Logo.png"

const Navbar = ({ onClickExpand }) => (
  <div className="navbar flex">
    <div className="navbar-wrapper flex">
      <div className="navbar-logo flex">
        <img src={LOGO} alt="logo" className="navbar-logo" />
        <span>
          Sad <span>Pugs</span>
        </span>
      </div>
      <div className="navbar-links flex">
        <Link
          className="navbar-anchor-link"
          activeClass="active"
          to={"learn"}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Learn
        </Link>
        <Link
          className="navbar-anchor-link"
          activeClass="active"
          to={"rarity"}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Rarity
        </Link>
        <Link
          className="navbar-anchor-link"
          activeClass="active"
          to={"roadmap"}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Roadmap
        </Link>
        <Link
          className="navbar-anchor-link"
          activeClass="active"
          to={"faqs"}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          FAQs
        </Link>
      </div>
      <div className="navbar-expand">
        <FontAwesomeIcon icon={faBars} onClick={onClickExpand} />
      </div>
    </div>
  </div>
)

export default Navbar
