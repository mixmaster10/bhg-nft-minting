import { useState, useEffect } from "react"
import { calculateTimeLeft } from "helpers/timer"

import "./style.scss"

import Button from "components/button"

const generateNFTDatas = (metadatas) => {
  return metadatas.map((data, index) => {
    return (
      <div key={index} className="minter-gallery-show-item flex flex-column">
        <img src={data.image || ""} alt="nft" loading="lazy" />
        <div className="minter-gallery-show-item-info flex felx-column">
          <p className="name">{data.name}</p>
        </div>
      </div>
    )
  })
}

const Minter = ({
  maxMint,
  mintCount,
  metadatas,
  maxSupply,
  mintLoading,
  soldOutCounts,
  walletAddress,
  onMintHandler,
  onMintCountChangeHandler,
}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])

  return (
    <div className="minter">
      {Object.keys(timeLeft).length === 0 ? (
        walletAddress !== "" && (
          <>
            <div className="minter-wrapper flex">
              {soldOutCounts === maxSupply ? (
                "SOLD OUT | WOW !!!"
              ) : (
                <>
                  <input
                    type="number"
                    min={1}
                    max={maxMint}
                    defaultValue={mintCount}
                    onChange={onMintCountChangeHandler}
                  />
                  <Button
                    children="Mint Sad Pug for 0.013 ETH"
                    mintLoading={mintLoading}
                    onMintHandler={onMintHandler}
                    onClick={() => {
                      if (!mintLoading) {
                        return onMintHandler()
                      }
                    }}
                  />
                </>
              )}
            </div>
            {metadatas.length !== 0 && (
              <div className="minter-gallery flex flex-column">
                <span>Your Gallery</span>
                <div className="minter-gallery-show flex">
                  {generateNFTDatas(metadatas)}
                </div>
              </div>
            )}
          </>
        )
      ) : (
        <div className="minter-timer flex">
          <div className="mint-timer-item flex flex-column">
            {timeLeft.days}
            <span>Days</span>
          </div>
          <div className="mint-timer-item flex flex-column">
            {timeLeft.hours}
            <span>Hours</span>
          </div>
          <div className="mint-timer-item flex flex-column">
            {timeLeft.minutes}
            <span>Minutes</span>
          </div>
          <div className="mint-timer-item flex flex-column">
            {timeLeft.seconds}
            <span>Seconds</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Minter
