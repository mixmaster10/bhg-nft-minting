import "./style.scss"

import IMAGE from "resources/artworks/Learn_Banner_Transparent.png"

const Learn = () => (
  <div id="learn" className="learn">
    <div className="learn-wrapper flex">
      <div className="learn-wrapper-comments flex flex-column">
        <div className="learn-wrapper-comments-title">What are Sad Pugs?</div>
        <div className="learn-wrapper-comments-content">
          Sad Pugs is a collection of 10,000 randomly generated NFTs living on
          the Ethereum Blockchain. Recently released from the pound, these pugs
          need a place to call home. Adopt a pug today and show them the love
          they deserve. Welcome to The Pack!
        </div>
      </div>
      <div className="learn-wrapper-img">
        <img src={IMAGE} alt="demo" />
      </div>
    </div>
  </div>
)

export default Learn
