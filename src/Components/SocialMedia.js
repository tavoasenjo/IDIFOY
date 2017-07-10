import React from 'react';
import Social from '../Styles/Social.scss'
import {Motion, spring} from 'react-motion';


class SocialMedia extends React.Component{
	render(){
		return(
			<div className="social_main">
				
				<ul className="social_tech">
					<li>
						<Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
						  {value => <div className="animatest">{value.x}</div>}
						</Motion>
					</li>
					<li id="facebook"><a href="https://www.facebook.com/tavoasenjo" target="_blank" id="facebook">Facebook</a></li>
					<li id="twitter"><a href="https://www.twitter.com/tavoasenjo" target="_blank"  id="twitter">Twitter</a></li>
				</ul>
			</div>
			
		)
	}
};

export default SocialMedia;

