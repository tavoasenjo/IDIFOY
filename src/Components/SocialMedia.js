import React from 'react';
import Social from '../Styles/Social.scss'


class SocialMedia extends React.Component{
	render(){
		return(
			<div className="social_main">
				<ul class="social_tech">
					<li><a href="https://www.facebook.com/tavoasenjo" target="_blank" id="facebook">Facebook</a></li>
					<li><a href="https://www.twitter.com/tavoasenjo" target="_blank"  id="twitter">Twitter</a></li>
				</ul>
			</div>
			
		)
	}
};

export default SocialMedia;

