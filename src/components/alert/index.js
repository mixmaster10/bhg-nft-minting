import "./style.scss"

const Alert = ({ error, onClickHandler }) => (
  <div className={`alert flex${error !== "" ? " show-alert" : ""}`}>
    <div className="alert-wrapper flex flex-column">
      <div className="alert-header flex">Error</div>
      <div className="alert-body flex">{error}</div>
      <div className="alert-controls flex">
        <button onClick={onClickHandler}>Okay</button>
      </div>
    </div>
  </div>
)

export default Alert
