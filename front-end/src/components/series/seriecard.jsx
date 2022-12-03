import React from 'react';
import convertImage from '../../helpers/convertbyteimg';

function SerieCard(props) {

	return (

		<>
				
			<h1 class="text-white py-5 px-5 text-3xl">{props.genreTitle}</h1>	
			<div class="flex overflow-x-auto">
				{props.serieData.map(serie => (
					
						props.genreTitle === serie.serieGenre && <img class="w-96 h-64 border-2 mx-1" src={`data:image/${serie.serieFormatImage};base64,${convertImage(serie.serieLogo.data)}`}/> 
					
				))}
			
			</div>

		</>

	);

}

export default SerieCard;