import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import NavBar from '../../components/navbar/nav'
import SerieCard from '../../components/series/seriecard'
import Slider from '../../components/slider/slider'

function Home() {

	const [series, setSeries] = useState([]);

	useEffect(() => {

		axios.get("http://localhost:8000/api/series").then((response) => {

			setSeries(response.data)

		}).catch((err) => {

		console.log(err);
	
	})

	}, []);

	function convertImage(img){

		const base64String = btoa(String.fromCharCode(...new Uint8Array(img)));
		return base64String

	}


	return (

		<>

			<NavBar/>
			<Slider/>
			<div class="flex flex-wrap justify-center">
				{series.map(serie => (
					
					<SerieCard title={serie.serieTitle} format={serie.serieFormatImage} image={convertImage(serie.serieLogo.data)}/>

					)
				)}
				</div>
			
		</>

	);

}

export default Home;