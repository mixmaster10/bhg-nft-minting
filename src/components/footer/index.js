import { Link } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons"
import "./style.scss"

import LOGO from "resources/Logo.png"

const Footer = () => (
  <div className="footer flex">
    <div className="footer-logo">
      <ScrollLink
        className="navbar-anchor-link"
        activeClass="active"
        to={"navbar"}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        {/* <img src={LOGO} alt="footer logo" /> */}
      </ScrollLink>
    </div>
    <div className="footer-contacts flex">
      <Link
        to={{ pathname: "https://www.instagram.com/sadpugsnft/" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link
        to={{ pathname: "https://twitter.com/SadPugsNFT" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link to={{ pathname: "https://discord.gg/" }} target="_blank">
        <FontAwesomeIcon icon={faDiscord} />
      </Link>
    </div>
    <div className="footer-email flex">
      {/* <a href="mailto:cryptoathletesteam@gmail.com">
        cryptoathletesteam@gmail.com
      </a> */}
    </div>
  </div>
)

export default Footer
