import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

const SpeciesSelected = (props) => {


    const { store } = useContext(Context);
    const {theid} = useParams()

    const [details, setDetails]= useState({})

    const searchSpecies= ()=>{
        let specieses = store.species 
        .find((item) => item._id === theid)
        setDetails(specieses)
    }

    useEffect(()=>{searchSpecies()},[])



    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={`https://starwars-visualguide.com/assets/img/species/${details?.uid}.jpg`} className="card-img-top" alt="id" />
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
                    <h6>Classification</h6>
                    <p className="text-bs-light-text">{details?.properties?.classification}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Designation</h6>
                    <p className="text-bs-light-text">{details?.properties?.designation}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Average Lifespan</h6>
                    <p className="text-bs-light-text">{details?.properties?.average_lifespan}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Skin Colors</h6>
                    <p className="text-bs-light-text">{details?.properties?.skin_colors}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Average Height</h6>
                    <p className="text-bs-light-text">{details?.properties?.average_height}</p>
                </div>
            </div>
        </div>
    )


}

export default SpeciesSelected