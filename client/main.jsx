import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Router, Route, browserHistory } from 'react-router'

import App from '../imports/ui/App'
import NewPlayer from '../imports/ui/NewPlayer'
import Lost404 from '../imports/ui/Lost404'

injectTapEventPlugin()


// runs files into either client or server, depending on setup
Meteor.startup(() => {
	render( (
		<Router history={browserHistory}>
			<Route path='/' component={App} />
			<Route path='/newPlayer' component={NewPlayer} />
			<Route path='*' component={Lost404} />
		</Router>
		),
		document.getElementById('render-target')
	)
})