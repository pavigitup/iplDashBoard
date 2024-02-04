import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCards: []}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const dataBase = data.teams
    const updatedData = dataBase.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCards: updatedData})
    // console.log(updatedData)
  }

  render() {
    const {teamCards} = this.state

    return (
      <div className="bg-con">
        <div className="head-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="ipl logo"
          />
          <h1 className="h1">IPL Dashboard</h1>
        </div>
        <ul className="team-cards">
          {teamCards.map(eachItem => (
            <TeamCard teamCard={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
