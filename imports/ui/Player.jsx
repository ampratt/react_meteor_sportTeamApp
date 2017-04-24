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
		return (
			<Card>
				<CardMedia
				  overlay={
				  	<CardTitle 
				  		title="Aaron Pratt" 
				  		subtitle="Offense: 12 - Defense: 11" 
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
				            3
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
				            2
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
				            3
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
				            3
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
				            1
				          </Avatar>
				          Toughness
				        </Chip>	
				        <Chip
				          backgroundColor={blue200}
				          style={styles.chip}
				        >
				          <Avatar 
				          	size={32} 
				          	color={blue200} 
				          	backgroundColor={blue900}>
				            2
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
				            2
				          </Avatar>
				          Team player
				        </Chip>	
					</div>
		        </CardText>
				<CardActions>

				</CardActions>
			</Card>
		)
	} // Render
}