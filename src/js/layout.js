import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Characters } from "./views/characters.js";
import CharacterSelected from "./views/characterselected.jsx";
import { Species } from "./views/species.jsx";
import SpeciesSelected from "./views/specieseleted.jsx";
import { Starships } from "./views/starships.jsx";
import StarshipSelected from "./views/shipsselected.jsx";
import { Planets } from "./views/planets.jsx";
import PlanetSelected from "./views/planetselected.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import Sidebar from "./component/sidebar.jsx";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<br />
					<br />
					<br />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/species" element={<Species />} />
						<Route path="/starships" element={<Starships />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/characters/:theid" element={<CharacterSelected />} />
						<Route path="/planets/:theid" element={<PlanetSelected />} />						
						<Route path="/species/:theid" element={<SpeciesSelected />} />					
						<Route path="/starships/:theid" element={<StarshipSelected />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
