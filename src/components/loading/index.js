import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import "./style.scss"

const Loading = () => (
  <div className="loading flex flex-column">
    <FontAwesomeIcon icon={faSpinner} />
    <span>Loading...</span>
  </div>
)

export default Loading
