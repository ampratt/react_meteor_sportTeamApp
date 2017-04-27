import React, { Component } from 'react'
import { Card, CardActions, CardMedia, CardTitle, CardText } 
	from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import { blue200, lightBlue800, lightBlue50 } from 'material-ui/styles/colors'

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
	showEditForm() {
		this.props.showEditForm()
	}

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
				          	color={lightBlue50} 
				          	backgroundColor={lightBlue800}>
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
				          	color={lightBlue50} 
				          	backgroundColor={lightBlue800}>
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
				          	color={lightBlue50} 
				          	backgroundColor={lightBlue800}>
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
				          	color={lightBlue50} 
				          	backgroundColor={lightBlue800}>
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
				          	color={lightBlue50} 
				          	backgroundColor={lightBlue800}>
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
				          	color={lightBlue50} 
				          	backgroundColor={lightBlue800}>
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
				          	color={lightBlue50} 
				          	backgroundColor={lightBlue800}>
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
				          	color={lightBlue50} 
				          	backgroundColor={lightBlue800}>
				            {player.tackling}
				          </Avatar>
				          Tackling
				        </Chip>	
					</div>
		        </CardText>
				<CardActions>
					<RaisedButton 
						label="Edit player/stats"
						labelPosition="before"
						style={styles.button}
						onClick={this.showEditForm.bind(this)}
					/>
				</CardActions>
			</Card>
		)
	} // Render
}