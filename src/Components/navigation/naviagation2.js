import React from 'react';
const Navigation2=({click2,click1})=>{
		return(
			<div style={{display:'flex' ,justifyContent:'flex-End'}} className='pa2 mh2'>
				<h2 onClick={click1} style={{marginRight:'20px'}} className='pointer link f3 black dim'>Sign In</h2>
				<h2 onClick={click2} style={{float:'left'}} className='pointer link f3 black dim'>Register</h2>
			</div>
		);
	}
export default Navigation2;