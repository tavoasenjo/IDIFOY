import React from 'react';
import {render} from 'react-dom';
import style from './Styles/App.scss';

// Import Component
import SocialMedia from './Components/SocialMedia';
import Banner from './Components/Banner';
import Menu from './Components/Menu';
import Body from './Components/Body';

const Root = function(){
	return(
		<div className="body_container">
			<SocialMedia />
			<Banner />
			<Menu />
			<Body />
		</div>
	)
}


render(<Root />, document.querySelector('#root'));