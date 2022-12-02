import React from 'react';

function SerieCard(props) {

	return (

		<>

	
				<div class="text-center text-white mx-1 mt-10 w-auto h-auto border-2 border-white-800">

					<h1>{props.title}</h1>
					<img src={`data:image/${props.format};base64,${props.image}`}/>

				</div>

			

		</>

	);

}

export default SerieCard;