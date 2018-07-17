import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain1.png';
import './logo.css';
const Logo=()=>{
	return(
		<div className="ma4 mt0">
			<Tilt className="Tilt br-2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
	 			<div className="Tilt-inner pa5"> <img  style={{paddingTop:'5px'}} src={brain} alt="brain" width="100px"/> </div>
			</Tilt>
		</div>
	);
}
export default Logo;