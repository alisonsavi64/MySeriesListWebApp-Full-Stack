import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/home';
import SeriePage from './pages/seriedetails/seriepage';

function AppRoutes() {

	return (

		<Router>

			<Routes>

				<Route path="/" element={<Home/>}/>
				<Route path="/serie/:id" element={<SeriePage/>}/>

			</Routes>

		</Router>

	);

}

export default AppRoutes;