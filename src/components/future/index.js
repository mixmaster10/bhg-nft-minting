import "./style.scss"

import ARTWORK from "resources/artworks/Learn_Banner_Transparent.png"

const FuturePlans = () => (
  <div className="futureplans flex">
    <div className="flex">
      <img src={ARTWORK} alt="future" />
    </div>
    <p className="flex flex-column">
      <span>Future Plans</span>
      Crypto Athletes are aiming to be the largest sports community in the
      industry. We have already started early development on an arcade game for
      Crypto Athlete holders. What's next? Our team plans on expanding the brand
      to all other sports, ultimately creating a trading economy within our
      community. Discord members will receive early access and news for the
      future drops. We also plan on giving away exciting experiences such as
      tickets to live events, signed merchandise and ethereum back to our
      community every week!
    </p>
  </div>
)

export default FuturePlans
