import React, { Component } from 'react'
import { Radar } from 'react-chartjs-2';
import Divider from 'material-ui/Divider'



export default class TeamStats extends Component {
	render() {

		const players = this.props.players
		const numPlayers = players.length
		const potentialMax = (4 * numPlayers) // [max skill level] * numPlayers

		// get a team total for particular skill
		const teamSpeed = Math.round((players.reduce( (skill, player) => {
			return skill + player.speed
			}, 0) / potentialMax ) * 100 )

		const teamBallSkill = Math.round((players.reduce( (skill, player) => {
			return skill + player.ballSkills
			}, 0) / potentialMax ) * 100 )

		const teamPassingSkill = Math.round((players.reduce( (skill, player) => {
			return skill + player.passingSkills
			}, 0) / potentialMax ) * 100 )

		const teamXFactor = Math.round((players.reduce( (skill, player) => {
			return skill + player.xFactor
			}, 0) / potentialMax ) * 100 )

		const teamStrength = Math.round((players.reduce( (skill, player) => {
			return skill + player.strength
			}, 0) / potentialMax ) * 100 )

		const teamGameStrategy = Math.round((players.reduce( (skill, player) => {
			return skill + player.gameStrategy
			}, 0) / potentialMax ) * 100 )

		const teamTeamPlayer = Math.round((players.reduce( (skill, player) => {
			return skill + player.teamPlayer
			}, 0) / potentialMax ) * 100 )
	
		const teamTacklingSkill = Math.round((players.reduce( (skill, player) => {
			return skill + player.tackling
			}, 0) / potentialMax ) * 100 )

		// team stats on right side display
		const defense = Math.round(( teamSpeed + teamStrength + teamGameStrategy + 
				teamTacklingSkill) / 4 )
		const offense = Math.round(( teamSpeed + teamBallSkill + teamPassingSkill + 
				teamXFactor + teamGameStrategy + teamTeamPlayer ) / 6 )
		const total = Math.round(( teamSpeed + teamBallSkill + teamPassingSkill + teamXFactor + 
		      		teamStrength + teamGameStrategy + teamTeamPlayer + 
	      		 	teamTacklingSkill ) / 8 )


		// needs to be inside component for App component to have access
		const data = {
		  labels: ['Speed', 'Ball Skills', 'Passing Skills', 'xFactor', 'Strength', 'Game Strategy', 'Team Player', 'Tackling'],
		  datasets: [
		    {
		      label: 'In % of max possible',
		      backgroundColor: 'rgba(143, 202, 249, 0.2)',
		      borderColor: 'rgba(12, 71, 161, 1)',
		      pointBackgroundColor: 'rgba(12, 71, 161, 1)',
		      pointBorderColor: '#fff',
		      pointHoverBackgroundColor: '#fff',
		      pointHoverBorderColor: 'rgba(179,181,198,1)',
		      data: [teamSpeed, teamBallSkill, teamPassingSkill, teamXFactor, 
		      		 teamStrength, teamGameStrategy, teamTeamPlayer, teamTacklingSkill
		      		]
		    }
		  ]
		}

		return (
			<div>
				<h2>Team Stats</h2>
				<div className="row">
					<div className="col s12 m7">
						<Radar 
							data={data}
							width={500}
							height={500}
							option={{
								maintainAspectRatio: false
							}}
						/>
					</div>
					<div className="col s12 m5">
						<h4>Scores in % of max possible</h4>
						<Divider />
						<h4>Team offense: {offense}%</h4>
						<h4>Team defense: {defense}%</h4>
						<h4>Team total: {total}%</h4>
						<Divider />
						<h4>Number of players: {numPlayers}</h4>
					</div>
				</div>
			</div>
		)
	} // Render
}