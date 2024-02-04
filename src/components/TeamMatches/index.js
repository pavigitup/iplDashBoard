import {Component} from 'react'

// import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  componentDidMount() {
    this.getBlogItemData()
  }

  // const {match} = this.props
  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
  }

  renderCardsItemDetails = () => {}

  render() {
    console.log('Route Params:', this.props)
    return (
      <>
        <div>{this.renderCardsItemDetails()}</div>
      </>
    )
  }
}

export default TeamMatches
