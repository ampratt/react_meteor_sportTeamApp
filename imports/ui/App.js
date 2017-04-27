import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'

// db - collection
import { Players } from '../api/players'

import Player from './Player'
import TeamList from './Team-list'
import TeamStats from './Team-stats'
import AccountsWrapper from './AccountsWrapper'
import Edit from './EditPlayer'

const tempPlayer = {
	name: "Temp Player",
	team: "Lynda",
	speed: 2,
	ballSkills: 3,
	passingSkills: 2,
	xFactor: 0,
	strength: 0,
	gameStrategy: 1,
	teamPlayer: 1,
	tackling: 0,
	notes: "this player is only temporary",
}

const styles = {
	list: {
		height: 400,
		overflowY: 'auto',
	}
}

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			//players: []
			currentPlayer: tempPlayer,
			showEditPlayer: false,
		}
		this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this)
		this.showEditForm = this.showEditForm.bind(this)
		this.showTeamStats = this.showTeamStats.bind(this)
	}

	renderPlayers() {
		return this.props.players.map((player) => (
			<TeamList 
				key={player._id} 
				player={player}
				updateCurrentPlayer={this.updateCurrentPlayer}
			/>
		))
	}

	updateCurrentPlayer(player) {
		this.setState({
			currentPlayer: player,
		})
	}

	showEditForm() {
		this.setState({
			showEditPlayer: true
		})
	}

	showTeamStats() {
		this.setState({
			showEditPlayer: false
		})
	}

	showForm() {
		if (this.state.showEditPlayer) {
			return ( 
				<Edit currentPlayer={this.state.currentPlayer}
					  showTeamStats={this.showTeamStats}
				/>
			)
		} else {
			return ( <TeamStats players={this.props.players} /> )
		}
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="container">
					<AppBar 
						title="Football Application"
						iconClassNameRight="muidocs-icon-navigation-expand-more"
						showMenuIconButton={false}
						style={{backgroundColor: '#0277BD'}}>
						<AccountsWrapper />
					</AppBar>

					<div className="row">
						<div className='col s12 m7'>
							<Player 
								player={this.state.currentPlayer}
								showEditPlayer={this.state.showEditPlayer}
								showEditForm={this.showEditForm}
								showTeamStats={this.showTeamStats}
							/>
						</div>
						<div className='col s12 m5'>
							<h2>Team List</h2>
								<Link to="/newPlayer" 
									  className="waves-effect waves-light btn light-blue darken-3"><i className="material-icons left">add</i>Add player</Link>
							<Divider />
							<List style={styles.list}>
								{this.renderPlayers()}
							</List>
							<Divider />
						</div>
					</div>
					<div className="row">
						<div className='col s12'>
							<br/>
							<Divider />
							{this.showForm()}
							<Divider />
						</div>
					</div>	
				</div>
			</MuiThemeProvider>
		)
	} // Render
}

App.propTypes = {
	players: PropTypes.array.isRequired,
}

export default createContainer( () => {
	Meteor.subscribe('players')

	const user = Meteor.userId()

	// setting the players in state
	return {
		players: Players.find({ owner: user }, {sort: {name: 1 }}).fetch(),	// Players.find({name: "Manny"})
	}
}, App)