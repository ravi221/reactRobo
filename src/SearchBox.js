import React from 'react';

const SearchBox = ({searchfield, searchchange}) => {
	return (
		<div className="pa2">
			<input
				type="search"
				className="pa3 ba b--green bg-lightest-blue"
				placeholder="Search Robos"
				onChange={searchchange}
			/>

		</div>
	)
}

export default SearchBox;