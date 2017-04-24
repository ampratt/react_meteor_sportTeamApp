import React, { Component } from 'react'
import { Card, CardActions, CardMedia, CardTitle, CardText } 
	from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import { blue200, blue900 } from 'material-ui/styles/colors'

const styles = {
	chip: {
		margin: 4,
	},
	wrapper: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	button: {
		margin: 12,
	},
}

export default class Player extends Component {
	render() {
		const player = this.props.player
		const defense = player.tackling + player.speed + player.strength + player.gameStrategy
		const offense = player.speed + player.ballSkills + player.passingSkills + player.xFactor + player.gameStrategy + player.teamPlayer
		const total = player.speed + player.ballSkills + player.passingSkills + player.xFactor + player.gameStrategy + player.teamPlayer + player.strength + player.tackling

		return (
			<Card>
				<CardMedia
				  overlay={
				  	<CardTitle 
				  		title={player.name} 
				  		subtitle={`Offense: ${offense} - Defense: ${defense} - Total: ${total}`} 
			  		/>
			  	  }
				>
				  <img src="americanFootball_player1.jpg" />
				</CardMedia>
				<CardText>
					<div style={styles.wrapper}>

				        <Chip
				          backgroundColor={blue200}
				          style={styles.chip}
				        >
				          <Avatar 
				          	size={32} 
				          	color={blue200} 
				          	backgroundColor={blue900}>
				            {player.speed}
				          </Avatar>
				          Speed
				        </Chip>

				        <Chip
				          backgroundColor={blue200}
				          style={styles.chip}
				        >
				          <Avatar 
				          	size={32} 
				          	color={blue200} 
				          	backgroundColor={blue900}>
				            {player.ballSkills}
				          </Avatar>
				          Ball skills
				        </Chip>

				        <Chip
				          backgroundColor={blue200}
				          style={styles.chip}
				        >
				          <Avatar 
				          	size={32} 
				          	color={blue200} 
				          	backgroundColor={blue900}>
				            {player.passingSkills}
				          </Avatar>
				          Passing skills
				        </Chip>

				        <Chip
				          backgroundColor={blue200}
				          style={styles.chip}
				        >
				          <Avatar 
				          	size={32} 
				          	color={blue200} 
				          	backgroundColor={blue900}>
				            {player.xFactor}
				          </Avatar>
				          X factor
				        </Chip>	

				        <Chip
				          backgroundColor={blue200}
				          style={styles.chip}
				        >
				          <Avatar 
				          	size={32} 
				          	color={blue200} 
				          	backgroundColor={blue900}>
				            {player.strength}
				          </Avatar>
				          Strength
				        </Chip>	

				        <Chip
				          backgroundColor={blue200}
				          style={styles.chip}
				        >
				          <Avatar 
				          	size={32} 
				          	color={blue200} 
				          	backgroundColor={blue900}>
				            {player.gameStrategy}
				          </Avatar>
				          Game strategy
				        </Chip>	

				        <Chip
				          backgroundColor={blue200}
				          style={styles.chip}
				        >
				          <Avatar 
				          	size={32} 
				          	color={blue200} 
				          	backgroundColor={blue900}>
				            {player.teamPlayer}
				          </Avatar>
				          Team player
				        </Chip>	
				        <Chip
				          backgroundColor={blue200}
				          style={styles.chip}
				        >
				          <Avatar 
				          	size={32} 
				          	color={blue200} 
				          	backgroundColor={blue900}>
				            {player.tackling}
				          </Avatar>
				          Tackling
				        </Chip>	
					</div>
		        </CardText>
				<CardActions>

				</CardActions>
			</Card>
		)
	} // Render
}