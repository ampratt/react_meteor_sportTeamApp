import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Template } from 'meteor/templating'
import { Blaze } from 'meteor/blaze'

export default class AccountsWrapper extends Component {
	componentDidMount() {
		// render buttons from user account into component
		this.view = Blaze.render(Template.loginButtons,
			ReactDOM.findDOMNode(this.refs.container))
	}


	componentWillUnMount() {
		Blaze.remove(this.view)
	}

	render() {
		return <span ref="container"/>
	}
}