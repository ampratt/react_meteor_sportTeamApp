import { Mongo } from 'meteor/mongo'

// Mongo collection ~= SQL table
export const Players = new Mongo.Collection('Players')

Players.allow({
	insert() { return false },
	update() { return false },
	remove() { return false }
})

Players.deny({
	insert() { return true },
	insert() { return true },
	insert() { return true }
})

// Schema to validate that the data is of correct type
const PlayerSchema = new SimpleSchema({
	name: { type: String},
	team: { type: String},
	speed: { type: Number, defaultValue: 0 },
	ballSkills: { type: Number, defaultValue: 0 },
	passingSkills: { type: Number, defaultValue: 0 },
	xFactor: { type: Number, defaultValue: 0 },
	strength: { type: Number, defaultValue: 0 },
	gameStrategy: { type: Number, defaultValue: 0 },
	teamPlayer: { type: Number, defaultValue: 0 },
	tackling: { type: Number, defaultValue: 0 },
	notes: { type: String, optional: true},
	owner: { type: String },
})

Players.attachSchema(PlayerSchema)