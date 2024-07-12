import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const ShipsCard = (props) => {


    const { actions } = useContext(Context);


    return (
        <div key={props.id} className="card m-3 " style={{ width: "15rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/starships/${props.uid}.jpg`} className="card-img-top" style={{ height: "14rem" }} alt="id" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>

                <p className="card-text">Lenght: {props.length}</p>
                <p className="card-text"> Crew:{props.crew}</p>
                <p className="card-text">Passengers: {props.passengers}</p>
            </div>
            <div className="mb-3 d-flex justify-content-between">
                <Link to={`/starships/${props.id}`} class="btn btn-primary">Learn more!</Link>  

                <btn onClick={()=>{actions.addFavs(props.name)}} class="btn btn-outline-warning fav-btn"><i class="far fa-star"></i></btn>
            </div>
        </div>
            
        
    )
}

export default ShipsCard