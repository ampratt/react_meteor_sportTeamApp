import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Players } from '../api/players'

const styles = {
  	button: {
  		margin: 8,
  	}
}

export default class NewPlayer extends Component {

	cancelSubmit() {
		console.log("Player NOT ADDED!")
		browserHistory.push('/')	
	}
	submitPlayer(event) {
		event.preventDefault()

		let player = {
			name: this.refs.name.value,
			team: this.refs.team.value,
			speed: this.refs.speed.value,
			ballSkills: this.refs.ballSkills.value,
			passingSkills: this.refs.passingSkills.value,
			xFactor: this.refs.xFactor.value,
			strength: this.refs.strength.value,
			gameStrategy: this.refs.gameStrategy.value,
			teamPlayer: this.refs.teamPlayer.value,
			tackling: this.refs.tackling.value,
			notes: this.refs.notes.value,
			createdAt: new Date(),
			owner: Meteor.userId(),
		}

		Meteor.call('insertPlayer', player, (error) => {
			if (error) {
				alert("Oops, something went wrong: " + error.reason)
			} else {
				console.log("Player Added", player)
				browserHistory.push('/')
			}
		})

		// console.log("Success - player submitted!")
	}

	render() {
		return (
			<div className="row">
				<form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
					<h3>Add a new player</h3>

					<div className="row">
						<div className="input-field col s6">
							<input placeholder="Name" ref="name" type="text" className="validate" />		
						</div>	
						<div className="input-field col s6">
							<input placeholder="Team" ref="team" type="text" className="validate" />		
						</div>	
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Speed</h5>
							<select className="browser-default" ref="speed">
								<option value="0">0 - Hasn't demonstrated skills</option>
								<option value="1">1 - Needs improvement</option>
								<option value="2">2 - Acceptable skills</option>
								<option value="3">3 - Great skills</option>
								<option value="4">4 - Exceptional/leader skills</option>
							</select>
						</div>	
						<div className="input-field col s6">
							<h5>Ball Skills</h5>
							<select className="browser-default" ref="ballSkills">
								<option value="0">0 - Hasn't demonstrated skills</option>
								<option value="1">1 - Needs improvement</option>
								<option value="2">2 - Acceptable skills</option>
								<option value="3">3 - Great skills</option>
								<option value="4">4 - Exceptional/leader skills</option>
							</select>
						</div>	
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Passing Skills</h5>
							<select className="browser-default" ref="passingSkills">
								<option value="0">0 - Hasn't demonstrated skills</option>
								<option value="1">1 - Needs improvement</option>
								<option value="2">2 - Acceptable skills</option>
								<option value="3">3 - Great skills</option>
								<option value="4">4 - Exceptional/leader skills</option>
							</select>
						</div>	
						<div className="input-field col s6">
							<h5>X Factor</h5>
							<select className="browser-default" ref="xFactor">
								<option value="0">0 - Hasn't demonstrated skills</option>
								<option value="1">1 - Needs improvement</option>
								<option value="2">2 - Acceptable skills</option>
								<option value="3">3 - Great skills</option>
								<option value="4">4 - Exceptional/leader skills</option>
							</select>
						</div>	
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Strength</h5>
							<select className="browser-default" ref="strength">
								<option value="0">0 - Hasn't demonstrated skills</option>
								<option value="1">1 - Needs improvement</option>
								<option value="2">2 - Acceptable skills</option>
								<option value="3">3 - Great skills</option>
								<option value="4">4 - Exceptional/leader skills</option>
							</select>
						</div>	
						<div className="input-field col s6">
							<h5>Game Strategy</h5>
							<select className="browser-default" ref="gameStrategy">
								<option value="0">0 - Hasn't demonstrated skills</option>
								<option value="1">1 - Needs improvement</option>
								<option value="2">2 - Acceptable skills</option>
								<option value="3">3 - Great skills</option>
								<option value="4">4 - Exceptional/leader skills</option>
							</select>
						</div>	
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Team Player</h5>
							<select className="browser-default" ref="teamPlayer">
								<option value="0">0 - Hasn't demonstrated skills</option>
								<option value="1">1 - Needs improvement</option>
								<option value="2">2 - Acceptable skills</option>
								<option value="3">3 - Great skills</option>
								<option value="4">4 - Exceptional/leader skills</option>
							</select>
						</div>	
						<div className="input-field col s6">
							<h5>Tackling</h5>
							<select className="browser-default" ref="tackling">
								<option value="0">0 - Hasn't demonstrated skills</option>
								<option value="1">1 - Needs improvement</option>
								<option value="2">2 - Acceptable skills</option>
								<option value="3">3 - Great skills</option>
								<option value="4">4 - Exceptional/leader skills</option>
							</select>
						</div>	
					</div>

					<div className="row">
						<div className="input-field col s6">
							<textarea placeholder="Notes" ref="notes" className="materialize-textarea"/>
						</div>	
						<div className="input-field col s6">
							<button className="btn waves-effect waves-light light-blue darken-3" style={styles.button} type="submit" name="action">
								Submit<i className="material-icons right">send</i>
							</button>
							<button className="btn waves-effect waves-light grey lighten-2 grey-text text-darken-4" style={styles.button}
									onClick={this.cancelSubmit.bind(this)}>
						      	Cancel
							</button>
						</div>	
					</div>


				</form>
			</div>
		)
	} // Render
}