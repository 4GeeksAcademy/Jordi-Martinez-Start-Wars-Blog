const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos: [],
			urlBaseAPI: "https://www.swapi.tech/api",
			urlBaseImg: "https://starwars-visualguide.com/assets/img/",
			characters: JSON.parse(localStorage.getItem("characters")) || [],   
			films: [],
			species: [],
			starships: JSON.parse(localStorage.getItem("starships")) || [],
			planets: [],
			search: [],


		},
		actions: {
			// Use getActions to call a function within a fuction

			addFavs(name) {
				const store = getStore()
				const favAdder = store.favoritos
				const newFav = [...favAdder, {
					name: name,
					id: favAdder.length
				}]
				setStore({ favoritos: newFav })
			},

			deleteFavs(id) {
				const store = getStore();
				const fav = store.favoritos;
				const favRevised = fav.filter((item) => item.id !== id);
				setStore({ favoritos: favRevised })
			},

			searchCharacters: async (query) => {
				console.log(query);
				
				let searchResult = getStore().characters.filter((item) => item.properties.name.toLowerCase().includes(query.toLowerCase()))
				console.log(searchResult)
				setStore({
					search: [...store.search, searchResult]
				})				
			},

			getAllCharacters: async () => {
				const store = getStore()
				try {
					let response = await fetch(`${getStore().urlBaseAPI}/people/`)
					let data = await response.json()

					for (let item of data.results) {
						let responseChar = await fetch(`${item.url}`)
						let dataChar = await responseChar.json()
						setStore({
							characters: [...store.characters, dataChar.result]
						})

					}
					localStorage.setItem("characters", JSON.stringify(store.characters));
				}
				catch (error) {
					console.log(error)
				}
			},



			getAllShips: async () => {
				const store = getStore()
				try {
					let response = await fetch(`${getStore().urlBaseAPI}/starships/`)
					let data = await response.json()

					for (let item of data.results) {
						let responseShip = await fetch(`${item.url}`)
						let dataShip = await responseShip.json()
						setStore({
							starships: [...store.starships, dataShip.result]
						})

					}
					
					localStorage.setItem("starships", JSON.stringify(store.starships));
				}
				catch (error) {
					console.log(error)
				}
			},



			getAllSpecies: async () => {
				const store = getStore()
				try {
					let response = await fetch(`${getStore().urlBaseAPI}/species/`)
					let data = await response.json()

					for (let item of data.results) {
						let responseSpecies = await fetch(`${item.url}`)
						let dataSpecies = await responseSpecies.json()
						setStore({

							species: [...store.species, dataSpecies.result]
						})

					}
				}
				catch (error) {
					console.log(error)
				}
			},

			getAllPlanets: async () => {
				const store = getStore()
				try {
					let response = await fetch(`${getStore().urlBaseAPI}/planets/`)
					let data = await response.json()

					for (let item of data.results) {
						let responsePlanets = await fetch(`${item.url}`)
						let dataPlanets = await responsePlanets.json()
						setStore({

							planets: [...store.planets, dataPlanets.result]
						})

					}
				}
				catch (error) {
					console.log(error)
				}
			},

			// getAllArrays: async () => {
			// 	const store = getStore()
			// 	try {
			// 		let allArrays = await (
			// 			getAllCharacters(),
			// 			getAllFilms(),
			// 			getAllPlanets(),
			// 			getAllShips(),
			// 			getAllSpecies(),
			// 			getAllVehicles()
			// 		)
			// 		return allArrays
			// 		} catch (error) {
			// 		console.log(error);
			// 	}
			// },

		}
	};
};

export default getState;
