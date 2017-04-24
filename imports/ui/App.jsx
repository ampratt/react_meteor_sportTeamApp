import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import { List } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'



import Player from './Player'
import TeamList from './Team-list'
import TeamStats from './Team-stats'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			players: []
		}
	}

	componentWillMount() {
		this.setState({
			players: [			
				{
					_id: 1,
					name: "Aaron Pratt",
					speed: 3,
					ballSkills: 3,
					passingSkills: 2,
					xFactor: 3,
					strength: 1,
					gameStrategy: 2,
					teamPlayer: 2,
				},
				{
					_id: 2,
					name: "Joe Shmoe",
					speed: 3,
					ballSkills: 3,
					passingSkills: 2,
					xFactor: 3,
					strength: 1,
					gameStrategy: 2,
					teamPlayer: 2,
				},
				{
					_id: 3,
					name: "Tim Brown",
					speed: 3,
					ballSkills: 3,
					passingSkills: 2,
					xFactor: 3,
					strength: 1,
					gameStrategy: 2,
					teamPlayer: 2,
				}
			]
		}) // setState
	}


	renderPlayers() {
		return this.state.players.map((player) => (
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
						showMenuIconButton={false}
					/>
					<div className="row">
						<div className='col s12 m7'>
							<Player />
						</div>
						<div className='col s12 m5'>
							<h2>Team List</h2>
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