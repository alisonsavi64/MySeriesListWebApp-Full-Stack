import React from 'react';

function SerieBanner(props){

	return(

		<>

			<div class="text-white bg-gradient-to-r from-gray-900 w-screen h-96 absolute pl-10">
				
				<h1 class="pt-4 text-6xl right-0 pr-44">{props.title}</h1>
				<p class="pt-5 right-0 w-96">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

			</div>
			<img class="w-screen h-96 " src={`data:image/${props.format};base64,${props.image}`}/>
			<div class="w-screen text-white h-auto">
				
				<div class="bg-gray-800 h-96 shadow-2xl shadow-gray-800">

					<p>Episódios: {props.episodes}</p>

				</div>

				<div class="text-black h-96" >
					
					<p>Temporadas: {props.seasons}</p>

				</div>

			</div>
		</>

	);
}

export default SerieBanner;