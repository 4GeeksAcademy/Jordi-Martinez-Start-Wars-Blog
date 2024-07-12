import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<>
		<div id="carouselExampleCaptions" className="carousel slide">
			<div className="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
			</div>
			<div className="carousel-inner">
				<Link to="/characters" className="carousel-item active">
					<img src="https://lumiere-a.akamaihd.net/v1/images/cassian-andor-main_d583d3b2.jpeg?region=415%2C17%2C1217%2C683" className="d-block w-100" alt="Andor" />
					<div className="carousel-caption d-none d-md-block">
						<h5>Characters</h5>
						<p>From the iconic Skywalker family to the enigmatic bounty hunters, our extensive character profiles reveal their origins, affiliations, and quirks. Want to know more about the wise Yoda, the formidable Darth Vader, or the charming scoundrel Han Solo? Look no further!</p>
					</div>
				</Link>
				<Link to="/species" className="carousel-item">
					<img src="https://lumiere-a.akamaihd.net/v1/images/databank_ewok_01_169_747db03a.jpeg?region=0%2C0%2C1560%2C878" className="d-block w-100" alt="X-wing" />
					<div className="carousel-caption d-none d-md-block">
						<h5>Species</h5>
						<p>Unearth ancient prophecies, forgotten civilizations, and the enigmatic Force. Dive into the rich tapestry of Star Wars mythology, where destiny intertwines with choice.</p>
					</div>
				</Link>
				<Link to="/starships" className="carousel-item">
					<img src="https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg?region=0%2C1%2C1536%2C864" className="d-block w-100" alt="X-wing" />
					<div className="carousel-caption d-none d-md-block">
						<h5>Ships</h5>
						<p>Hop aboard the Millennium Falcon, ride a speeder bike through the forests of Naboo, or command an Imperial Star Destroyer. Our detailed ship and vehicle entries will satisfy your inner starship enthusiast.</p>
					</div>

				</Link>

				<Link to="/planets" className="carousel-item">
					<img src="https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878" className="d-block w-100" alt="Naboo" />
					<div className="carousel-caption d-none d-md-block">
						<h5>Planets</h5>
						<p>Discover the diverse worlds that dot the cosmos: from the desert sands of Tatooine to the lush forests of Endor. Each planet has its own story, culture, and inhabitants. Explore their secrets and hidden treasures!</p>
					</div>
				</Link>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
		<div className="d-flex justify-content-center m-3">
			<h6 className="col-10 d-flex justify-content-center">
				“A long time ago, in a galaxy far, far away…”
				<br />
				Welcome, intrepid travelers, to the Galactic Databank, your ultimate resource for unraveling the mysteries of the Star Wars universe! Whether you’re a Jedi Knight, a scruffy-looking nerf herder, or just a curious moisture farmer, we’ve got you covered.
			</h6>
		</div>
	</>

);
