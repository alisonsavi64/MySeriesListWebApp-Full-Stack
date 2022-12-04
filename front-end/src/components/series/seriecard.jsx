import React from 'react';
import {Link} from 'react-router-dom';
import convertImage from '../../helpers/convertbyteimg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SerieCard(props) {

	const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1
    };

	return (

		<>
				
			<h1 class="text-white py-5 px-5 text-3xl">{props.genreTitle}</h1>	
			<Slider {...settings}>
				
					{props.serieData.map(serie => (
							props.genreTitle === serie.serieGenre &&  

							<Link class="p-1" to={`/serie/${serie.serieId}`}> 

										
									<img class="w-full h-44 rounded-lg"src={`data:image/${serie.serieFormatImage};base64,${convertImage(serie.serieLogo.data)}`}/>
										
								
							</Link>
						))}
				
			</Slider>
			

			

		</>

	);

}

export default SerieCard;