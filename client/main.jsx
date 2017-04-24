import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from '../imports/ui/App'

injectTapEventPlugin()

// runs files into either client or server, depending on setup
Meteor.startup(() => {
	render(
		<App />,
		document.getElementById('render-target')
	)
})