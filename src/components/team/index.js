import "./style.scss"
import Ellie from "resources/team/Ellie.png"
import Jay from "resources/team/Jay.png"
import Dmitrii from "resources/team/Dmitrii.png"

const generateTeam = () => <div></div>

const TeamMembers = () => (
  <div className="team">
    <div className="team-wrapper flex flex-column">
      <div className="team-title">Team</div>

      <div className="team-members flex">
      <div className="flex flex-column">
        <img className="hof" src={Ellie} alt="hof" />
        <span>Ellie <br/> Co-founder</span>
      </div>
      <div className="flex flex-column">
        <img className="gold" src={Jay} alt="gold" />
        <span>Jay <br/> Founder</span>
      </div>
      <div className="flex flex-column">
        <img className="mastercard" src={Dmitrii} alt="mastercard" />
        <span>Dmitrii <br/>Developer</span>
      </div>
    </div>


    </div>
  </div>
)

export default TeamMembers
