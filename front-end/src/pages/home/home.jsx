import React from 'react';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/navbar/nav';
import SerieCard from '../../components/series/seriecard';
import Slider from '../../components/slider/slider';
import convertImage from '../../helpers/convertbyteimg';
import Footer from '../../components/footer/footer';

function Home() {

	const [series, setSeries] = useState([]);

	useEffect(() => {

		axios.get("http://localhost:8000/api/series").then((response) => {

			setSeries(response.data)

		}).catch((err) => {

		console.log(err);
	
	})

	}, []);

	return (

		<>
			<div class="bg-gray-800">
				<NavBar/>
				<Slider/>
				<div class="flex flex-wrap justify-center pb-44">
					{series.map(serie => (
						
						<Link to={`/serie/${serie.serieId}`}>

							<SerieCard format={serie.serieFormatImage} image={convertImage(serie.serieLogo.data)}/>
						
						</Link>
						)
					)}
					</div>
			<Footer/>
			</div>
		</>

	);

}

export default Home;