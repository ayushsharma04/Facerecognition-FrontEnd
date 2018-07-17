import React from 'react';
import './recognition.css';
const Recognition=({ image, box })=>{
	return(
		<div className="justify ma">
			<div className="mt2 absolute">
				<img id="inputimage" src={image} alt='' width="500" height="auto"/>
				<div className='boundingbox' style={{ top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}></div>
			</div>
		</div>
		);
}
export default Recognition;