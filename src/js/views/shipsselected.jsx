import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const StarshipSelected = (props) => {


    const { store } = useContext(Context);
    const {theid} = useParams()

    const [details, setDetails]= useState({})

    const searchShip= ()=>{
        let Shipies = store.starships 
        .find((item) => item._id === theid)
        setDetails(Shipies)
    }

    useEffect(()=>{searchShip()},[])



    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${details?.uid}.jpg`} className="card-img-top" alt="id" />
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
                    <h6>Lenght</h6>
                    <p className="text-bs-light-text">{details?.properties?.lenght}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Crew</h6>
                    <p className="text-bs-light-text">{details?.properties?.crew}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Passengers</h6>
                    <p className="text-bs-light-text">{details?.properties?.passengers}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Manufacturer</h6>
                    <p className="text-bs-light-text">{details?.properties?.manufacturer}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Cargo Capacity</h6>
                    <p className="text-bs-light-text">{details?.properties?.cargo_capacity}</p>
                </div>
            </div>
        </div>
    )


}

export default StarshipSelected