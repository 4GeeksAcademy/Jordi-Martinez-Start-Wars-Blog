import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import PlanetsCard from "../component/planetscard.jsx";


export const Planets = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="row" style={{ overflowY: "hidden scroll", flexWrap: "nowrap" }}>

                {store.planets.map((item, index) =>

                    <PlanetsCard key={item.url}

                        id={item._id}
                        uid={item.uid}
                        name={item.properties.name}
                        population={item.properties.population}
                        terrain={item.properties.terrain}
                        climate={item.properties.climate}

                        

                    />)}
            </div>
        </div>
    );
};
