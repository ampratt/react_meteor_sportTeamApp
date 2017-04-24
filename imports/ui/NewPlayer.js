import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Players } from '../api/players'

export default class NewPlayer extends Component {
	submitPlayer(event) {
		event.preventDefault()

		Players.insert({
			name: this.refs.name.value,
			team: this.refs.team.value,
			speed: this.refs.speed.value,
			ballSkills: this.refs.ballSkills.value,
			passingSkills: this.refs.passingSkills.value,
			xFactor: this.refs.xFactor.value,
			strength: this.refs.strength.value,
			gameStrategy: this.refs.gameStrategy.value,
			teamPlayer: this.refs.teamPlayer.value,
			instincts: this.refs.instincts.value,
			notes: this.refs.notes.value,
			createdAt: new Date(),
			owner: Meteor.userId(),
		});

		console.log("Success - player submitted!")

		// route back to main page
		browserHistory.push('/')
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
							<h5>Instincts</h5>
							<select className="browser-default" ref="instincts">
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
							<button className="btn waves-effect waves-light" type="submit" name="action">
								Submit<i className="material-icons right">send</i>
							</button>
						</div>	
					</div>


				</form>
			</div>
		)
	} // Render
}