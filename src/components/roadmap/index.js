import "./style.scss"

import { Roadmaps } from "constants/index"
import ARTWORK_ROADMAP_3 from "resources/artworks/Artwork_Roadmap_3.png"

const generateRoadmap = () =>
  Roadmaps.map((data, index) => (
    <div key={index} className="roadmap-item flex flex-column">
      <div className="roadmap-item-percentage">{`${data.percentage}%`}</div>
      <div className="roadmap-item-comment">
        {data.comment} {data.url && <a href={data.url}>join the Discord.</a>}
      </div>
    </div>
  ))

const Roadmap = () => (
  <div className="roadmap flex flex-column">
    <div className="roadmap-decoration flex">
      <img src={ARTWORK_ROADMAP_3} alt="artwork roadmap" />
    </div>
    <span>Roadmap</span>
    {generateRoadmap()}
  </div>
)

export default Roadmap
