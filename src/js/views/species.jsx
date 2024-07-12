import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext.js";
import SpeciesCard from "../component/speciescard.jsx";


export const Species = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="row" style={{ overflowY: "hidden scroll", flexWrap: "nowrap" }}>

                {store.species.map((item, index) =>

                    <SpeciesCard key={item.url}

                        id={item._id}
                        uid={item.uid}
                        name={item.properties.name}
                        classification={item.properties.classification}
                        designation={item.properties.designation}
                        average_lifespan={item.properties.average_lifespan}

                        

                    />)}
            </div>
        </div>
    );
};
