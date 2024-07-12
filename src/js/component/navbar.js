import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css"
import { string } from "prop-types";

export const Navbar = () => {

	const [search, setSearch] = useState("")
	const { store, actions } = useContext(Context)

	const handleSearch = (e) => {
		e.preventDefault();
		// const query = e.target.search.value; // Obtén el término de búsqueda del formulario
		const respuesta = actions.searchCharacters(search)
		// console.log(respuesta);
	};

	return (

		<nav className="navbar bg-dark navbar-expand-lg d-flex align-items-center justify-content-between fixed-nav" data-bs-theme="dark">

			<Link to="/">
				<img className="Navbar-img" src="https://1000marcas.net/wp-content/uploads/2019/12/logo-StarWars.png" />
			</Link>
			{/* 
					<div clasName="collapse navbar-collapse" id="navbarSupportedContent"> */}
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item dropdown">
				</li>
				<li className="nav-item d-flex justify-content-between">
					<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Categories
					</a>
					<ul className="dropdown-menu bg-secundary" data-bs-theme="dark">
						<li><Link className="dropdown-item" to="/characters">Characters</Link></li>
						<li><Link className="dropdown-item" to="/species">Species</Link></li>
						<li><Link className="dropdown-item" to="/starships">Starships</Link></li>
						<li><Link className="dropdown-item" to="/planets">Planets</Link></li>
						{/* <li><hr className="dropdown-divider" /></li>
								<li><Link className="dropdown-item" to="/">Favorites</Link></li> */}
					</ul>
				</li>



			</ul>
			<form onSubmit={handleSearch} className="d-flex" role="search">
				<input onChange={(e) => setSearch(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
				
				<button className="btn btn-outline-success">Search</button>
			</form>

			<ul className="navbar-nav me-2 ms-2 mb-2 pe-2 mb-lg-0">


				<li className="nav-item dropdown me-5"></li>
				<li className="nav-item">
					<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favoritos.length}
					</a>
					<ul className="dropdown-menu bg-secundary" data-bs-theme="dark">
						{store.favoritos.map((item, index) => (
							<li className="d-flex justify-content-between ps-2 pe-2" key={index}>
								{item.name}
								<a onClick={() => actions.deleteFavs(item.id)}>
									<i className="fas fa-trash-alt right-icons"></i>
								</a>
							</li>
						))}
					</ul>
				</li>


			</ul>
		</nav >
	);
};

