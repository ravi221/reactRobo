import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	const CardComponent = robots.map((user, i) => {
		console.log("cardList" + JSON.stringify(user).length);
		if(JSON.stringify(user)){
			return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>	
		} else {
			return <p>No records</p>;
		}
		
	})
	/*let test;
	if(JSON.stringify(robots)) {
      test = CardComponent;
    }else{
      test = <p>No recors found!</p>;
    }*/

	return (
		<div>
			{CardComponent}
		</div>
	);
}

export default CardList;