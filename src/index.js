import React from 'react';
import {render} from 'react-dom';
import style from './Styles/App.scss';

// Import Component
import SocialMedia from './Components/SocialMedia';
import Banner from './Components/Banner';

const Root = function(){
	return(
		<div className="body_container">
			<SocialMedia />
			<Banner />
		</div>
	)
}


render(<Root />, document.querySelector('#root'));