import React from 'react';

class Timing extends React.Component{
	render(){
		return(
			<div className="timing">
				<h1>{this.props.propTiming}</h1>
			</div>
		)
	}
}

export default Timing;