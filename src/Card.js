import React from 'react';

const Card = (props) => {
	
		return (
			<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
				<img src={`http://robohash.org/${props.id}?100X100`} alt="Monvi" />
				<div>
					<h1>{props.name}</h1>
					<p>{props.email}</p>
				</div>
			</div>
		);
}

export default Card;