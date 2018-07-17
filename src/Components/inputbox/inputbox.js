import React from 'react';
import './input.css'
const InputBox=({OnChange,OnSubmit})=>{
	return(
		<div className="justify">
			<div className="pa3 shadow-5 br3 form justify">
				<input type="text" className="w-70 justify f3 pa2"  onChange={OnChange}/>
				<button className="w-30 pv2 ph3 f4 dib link grow" onClick={OnSubmit}>Detect</button>
			</div>
		</div>
		);
}
export default InputBox;