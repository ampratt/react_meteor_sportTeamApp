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

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			players: []
		}
	}

	renderPlayers() {
		return this.props.players.map((player) => (
			<TeamList 
				key={player._id} 
				player={player}
			/>
		))
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="container">
					<AppBar 
						title="Football Application"
						iconClassNameRight="muidocs-icon-navigation-expand-more"
						showMenuIconButton={false}>
						<AccountsWrapper />
					</AppBar>

					<div className="row">
						<div className='col s12 m7'>
							<Player />
						</div>
						<div className='col s12 m5'>
							<h2>Team List</h2>
								<Link to="/newPlayer" 
									  className="waves-effect waves-light btn">Add player</Link>
							<Divider />
							<List>
								{this.renderPlayers()}
							</List>
							<Divider />
						</div>
						<div className='col s12 m5'>
							<TeamStats />
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

	return {
		players: Players.find({ owner: user }, {sort: {name: 1 }}).fetch(),	// Players.find({name: "Manny"})
	}
}, App)