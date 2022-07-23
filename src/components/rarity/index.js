import "./style.scss"

import { Raritys } from "constants/index"

import BRONZE from "resources/categories/1.png"
import SILVER from "resources/categories/2.png"
import GOLD from "resources/categories/5.png"
import HOF from "resources/categories/3.png"
import MASTERCARD from "resources/categories/4.png"

import ARTWORK_ROADMAP_2 from "resources/artworks/Learn_Banner_Transparent.png"

const generateRarity = () =>
  Raritys.map((data, index) => (
    <div key={index} className="rarity-diagram-item flex flex-column">
      <div className="rarity-diagram-item-progress flex flex-column">
        <div
          className={`rarity-diagram-item-progress-bar-${data.title.toLowerCase()}`}
        ></div>
        <div className="rarity-diagram-item-progress-comment">
          {data.comment}
        </div>
      </div>
      <span>{data.title}</span>
    </div>
  ))

const Rarity = () => (
  <div className="rarity flex flex-column">
    <div className="rarity-ranking flex flex-column">
      <span>Rarity</span>
 
    </div>
    <div className="rarity-classes flex">
      <div className="flex flex-column">
        <img className="bronze" src={BRONZE} alt="bronze" />
        <span>Kitty</span>
      </div>
      <div className="flex flex-column">
        <img className="silver" src={SILVER} alt="silver" />
        <span>Clooney</span>
      </div>
      <div className="flex flex-column">
        <img className="gold" src={GOLD} alt="gold" />
        <span>Matcha</span>
      </div>
      <div className="flex flex-column">
        <img className="hof" src={HOF} alt="hall of fame" />
        <span>Butters</span>
      </div>
      <div className="flex flex-column">
        <img className="mastercard" src={MASTERCARD} alt="mastercard" />
        <span>Gandalf</span>
      </div>
    </div>

    <div className="rarity-ranking-comment">
        $147,000 Total Available Prizes for minting these 5 rare Sad Pugs.
        <br/>
        <br/>
        Mint Kitty, Clooney, or Matcha:  receive $100 worth of ETH per month for 8 years totaling $1,200 worth of ETH per year, or $9,600 worth of ETH overall.
        <br/>
        <br/>
        Mint Butters:  receive $400 worth of ETH per month for 8 years totaling $4,800 worth of ETH per year, or $38,400 worth of ETH overall.
        <br/>
        <br/>
        Mint Gandalf:  receive $833.34 worth of ETH per month for 8 years totaling $10,000 worth of ETH per year, or $80,000.64 worth of ETH overall. 
    </div>
   
  </div>
)

export default Rarity
