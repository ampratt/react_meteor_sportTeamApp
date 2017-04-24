import { Meteor } from 'meteor/meteor'
import { Players } from '../imports/api/players'

Meteor.startup(() => {
	// code to run on server at startup
	Meteor.publish('players', () => {
		return Players.find({})
	})
});
