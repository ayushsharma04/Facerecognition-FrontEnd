import React from 'react';
const Rank=({name,entries})=>{
	return(
		<div>
			<div className="white f3 justify">
				{`${name},your number of entries are....`}
			</div>
			<div className="white f1 justify">
				{entries}
			</div>
		</div>
		);
}
export default Rank;