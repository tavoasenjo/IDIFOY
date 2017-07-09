import React from 'react';
import body_style from '../Styles/Body.scss';

import Timing from './Timing';

class Body extends React.Component{
	render(){
		return(
			<div className="body_main">
				<h1>Body</h1>
				<Timing propTiming="This is the timing" />
			</div>
		)
	}
}

export default Body;