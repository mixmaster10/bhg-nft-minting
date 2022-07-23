import "./style.scss"

import { FAQs } from "constants/index"
import ARTWORK_ROADMAP_1 from "resources/artworks/Artwork_Roadmap_1.png"

const generateFAQs = () =>
  FAQs.map((data, index) => (
    <div key={index} className="faqs-item">
      <div className="faqs-item-title">{data.question}</div>
      <div className="faqs-item-content">
        {data.answer} {data.url && <a href={data.url}>Opensea</a>}
      </div>
    </div>
  ))

const FAQ = () => (
  <div className="faqs flex flex-column">
    <span>FAQS</span>
    {generateFAQs()}
    <div className="faqs-decoration flex">
      <img src={ARTWORK_ROADMAP_1} alt="artwork" />
    </div>
  </div>
)

export default FAQ
