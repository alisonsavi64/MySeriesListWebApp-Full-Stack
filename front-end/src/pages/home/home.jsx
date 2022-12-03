import React from 'react';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/navbar/nav';
import SerieCard from '../../components/series/seriecard';
import Slider from '../../components/slider/slider';
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
				

				<div class="w-screen justify-center pb-44">

							<SerieCard genreTitle="Horror" serieData={series}/>
							<SerieCard genreTitle="Adventure" serieData={series}/>
							<SerieCard genreTitle="Fantasy" serieData={series}/>
							<SerieCard genreTitle="Action" serieData={series}/>
				
					</div>
			<Footer/>
			</div>
		</>

	);

}

export default Home;