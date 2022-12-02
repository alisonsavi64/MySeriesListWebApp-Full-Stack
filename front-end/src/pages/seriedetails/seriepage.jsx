import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios'; 
import convertImage from '../../helpers/convertbyteimg';
import SerieBanner from '../../components/series/seriebanner';
import NavBar from '../../components/navbar/nav';
import Footer from '../../components/footer/footer';

function SeriePage() {

	const [specificSerie, setSpecificSerie] = useState([]);

	const {id} = useParams();

	useEffect(() => {

		axios.get(`http://localhost:8000/api/series/${id}`).then((response) => {

			setSpecificSerie(response.data)

		}).catch((err) => {console.log(err)})

	}, []);

	return (

		<>
		<NavBar/>
		<div class="test-white w-screen h-auto ">
				
				{specificSerie.map(serie => (

						<SerieBanner seasons={serie.serieSeasons} episodes={serie.serieEpisodes} title={serie.serieTitle} format={serie.serieFormatImage} image={convertImage(serie.serieLogo.data)}/>
					
					)
				)}
		
		</div>

		<Footer/>

		</>

	);

}


export default SeriePage;