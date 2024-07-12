import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

const PlanetSelected = (props) => {


    const { store, actions } = useContext(Context);
    const {theid} = useParams()

    const [details, setDetails]= useState({})

    const searchPlanet= ()=>{
        let planetes = store.planets 
        .find((item) => item._id === theid)
        setDetails(planetes)
    }

    useEffect(()=>{searchPlanet()},[])



    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${details?.uid}.jpg`} className="card-img-top" alt="id" />
                </div>
                <div className="col-6">
                    <h1 className="card-title text-bs-light-text" style={{ color:"white" }}>{details?.properties?.name}</h1>
                    <p className="bs-light-text" style={{ color:"white" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi delectus non consectetur veniam dolorem accusantium rem dolorum architecto! Omnis, neque magni? Laboriosam voluptates delectus facilis dignissimos debitis et non vitae!</p>
                </div>
            </div>
            <div className="row d-flex flex-nowrap "style={{ color:"white" }}>

                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Name</h6>
                    <p className="text-bs-light-text">{details?.properties?.name}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Climate</h6>
                    <p className="text-bs-light-text">{details?.properties?.climate}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Terrain</h6>
                    <p className="text-bs-light-text">{details?.properties?.terrain}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Population</h6>
                    <p className="text-bs-light-text">{details?.properties?.population}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Diameter</h6>
                    <p className="text-bs-light-text">{details?.properties?.diameter}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Gravity</h6>
                    <p className="text-bs-light-text">{details?.properties?.gravity}</p>
                </div>
            </div>
        </div>
    )


}

export default PlanetSelected