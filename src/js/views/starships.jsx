import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext.js";
import ShipsCard from "../component/shipscard.jsx";


export const Starships = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="row" style={{ overflowY: "hidden scroll", flexWrap: "nowrap" }}>

                {store.starships.map((item, index) =>

                    <ShipsCard key={item.url}

                        id={item._id}
                        uid={item.uid}
                        name={item.properties.name}
                        length={item.properties.length}
                        crew={item.properties.crew}
                        passengers={item.properties.passengers}

                        

                    />)}
            </div>
        </div>
    );
};
