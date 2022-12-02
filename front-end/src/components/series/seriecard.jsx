import React from 'react';

function SerieCard(props) {

	return (

		<>

	
				<div class="text-center rounded-lg text-white mx-1 mt-10 w-auto h-auto border-2 border-white-800">

					<img class="w-96 h-48 rounded-lg" src={`data:image/${props.format};base64,${props.image}`}/>

				</div>

			

		</>

	);

}

export default SerieCard;