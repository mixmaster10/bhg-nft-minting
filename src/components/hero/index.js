import "./style.scss"

import Ticker from "./ticker"
import BANNER from "resources/Banner_Image.png"

const Hero = ({
  maxSupply,
  soldOutCounts,
  walletAddress,
  onConnectWalletHandler,
}) => {
  return (
    <>
      <div className="hero flex flex-column">
        <div className="flex">
          <img src={BANNER} alt="banner" />
        </div>
        <div className="hero-wallet flex flex-column">
          <Ticker
            maxSupply={maxSupply}
            soldOutCounts={soldOutCounts}
            walletAddress={walletAddress}
            onConnectWalletHandler={onConnectWalletHandler}
          />
        </div>
      </div>
    </>
  )
}

export default Hero
