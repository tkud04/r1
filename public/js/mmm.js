'use strict';

//Babel CLI command for JSX: npx babel --watch src --out-dir public/components --presets react-app/prod

import LikeButton from '../components/like_button.js';
import LB from '../components/lb.js';


$(document).ready(() => {
	
	ReactRender([
	{c: LikeButton, e: '#like_button_container'},
	{c: LB, e: '#lb_container'}
	]);
});