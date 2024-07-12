import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const CharacterCard = (props) => {


    const { actions } = useContext(Context);


    return (
        <div key={props.id} className="card m-3 " style={{ width: "15rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top" style={{ height: "14rem" }} alt="id" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>

                <p className="card-text">Gender: {props.gender}</p>
                <p className="card-text"> Hair color:{props.hair_color}</p>
                <p className="card-text">Eye color: {props.eye_color}</p>
            </div>
            <div className="mb-3 d-flex justify-content-between">
                <Link to={`/characters/${props.id}`} class="btn btn-primary">Learn more!</Link>  

                <btn onClick={()=>{actions.addFavs(props.name)}} class="btn btn-outline-warning fav-btn"><i class="far fa-star"></i></btn>
            </div>
        </div>
            
        
    )
}

export default CharacterCard