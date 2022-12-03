import React from 'react';
import {Link} from 'react-router-dom';
import convertImage from '../../helpers/convertbyteimg';

function SerieCard(props) {

	return (

		<>
				
			<h1 class="text-white py-5 px-5 text-3xl">{props.genreTitle}</h1>	
			<div class="flex overflow-x-auto">
				{props.serieData.map(serie => (
						props.genreTitle === serie.serieGenre &&  <Link class="p-1" to={`/serie/${serie.serieId}`}><img class="w-3xl h-64 border-2 p-1 mx-1" src={`data:image/${serie.serieFormatImage};base64,${convertImage(serie.serieLogo.data)}`}/> </Link>
				))}
			</div>

		</>

	);

}

export default SerieCard;