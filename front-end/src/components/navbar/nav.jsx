import React from 'react'

function NavBar(){

	return (
		<>
		<nav class="bg-yellow-800">
			<div class="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
				<div class="text-white flex h-16 py-3 text-lg justify-between">
					<div class="py-1">
						
						<span class="p-px">LOGO</span>

					</div>
					<div>
						<ul class="flex">
								
							<li class="p-1">A</li>
							<li class="p-1">B</li>
							<li class="p-1">C</li>

						</ul>


					</div>
					


				</div>	
			</div>
		</nav>
		</>
	);

}

export default NavBar;