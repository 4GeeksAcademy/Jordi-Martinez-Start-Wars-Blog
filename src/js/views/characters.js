import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import CharacterCard from "../component/charactercard.jsx";


export const Characters = () => {
    const { store, actions } = useContext(Context);

    const localCharacters = () => {
        let localChar = localStorage.getItem("characters")
        return JSON.parse(localChar)
    }

    return (
        <div className="container">
            <div className="row" style={{ overflowY: "hidden scroll", flexWrap: "nowrap" }}>

                {localCharacters().map((item, index) =>

                    <CharacterCard key={item.url}

                        id={item._id}
                        uid={item.uid}
                        name={item.properties.name}
                        gender={item.properties.gender}
                        hair_color={item.properties.hair_color}
                        eye_color={item.properties.eye_color}



                    />)}
            </div>
        </div>
    );
};
