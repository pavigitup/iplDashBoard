import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamCard} = this.props
    // console.log(teamCard)

    const {id, name, teamImageUrl} = teamCard

    return (
      <Link to={`/team-matches/${id}`} className="team-card">
        <div className="ipl-img">
          <img src={teamImageUrl} alt={name} className="team-img" />
        </div>
        <div className="header">
          <h1>{name}</h1>
        </div>
      </Link>
    )
  }
}

export default TeamCard
