import React from 'react';

function SerieBanner(props){

	return(

		<>

			<div class="text-white bg-gradient-to-r from-gray-900 w-screen h-96 absolute pl-10">
				
				<h1 class="pt-4 text-6xl right-0 pr-44">{props.title}</h1>
				<p class="pt-5 right-0 w-96">Bob Esponja e seu amigo Patrick, uma estrela do mar, embarcam em uma missão para limpar o nome do Sr. Sirigueijo, o proprietário do restaurante Siri Cascudo, que foi acusado de roubar a coroa do rei Netuno. Saindo dos limites familiares, Bob Esponja e Patrick aventuram-se para procurar a coroa de Netuno, mas encontrarão vários obstáculos no caminho.</p>

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