import React,{ Component } from 'react';
class Navigation extends Component{
	render(props){
		return(
			<div style={{display:'flex' ,justifyContent:'flex-End'}} className='pa2 mh2'>
				<h2 onClick={this.props.click} className='pointer link f3 black dim'>Sign Out</h2>
			</div>
		);
	}
}
export default Navigation;