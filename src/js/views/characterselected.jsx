import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Navigate, Link, useParams } from "react-router-dom";

const CharacterSelected = (props) => {


    const { store } = useContext(Context);
    const {theid} = useParams()

    const [details, setDetails]= useState({})

    const searchChar= ()=>{
        let characts = store.characters 
        .find((item) => item._id === theid)
        setDetails(characts)
    }

    useEffect(()=>{searchChar()},[])



    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${details?.uid}.jpg`} className="card-img-top" alt="id" />
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
                    <h6>Birth Year</h6>
                    <p className="text-bs-light-text">{details?.properties?.birth_year}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Gender</h6>
                    <p className="text-bs-light-text">{details?.properties?.gender}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Height</h6>
                    <p className="text-bs-light-text">{details?.properties?.height}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Skin Color</h6>
                    <p className="text-bs-light-text">{details?.properties?.skin_color}</p>
                </div>
                
                <div className="col-2 text-warning-emphasis border border-warning border-top-0">
                    <h6>Eye Color</h6>
                    <p className="text-bs-light-text">{details?.properties?.eye_color}</p>
                </div>
            </div>
        </div>
    )


}

export default CharacterSelected