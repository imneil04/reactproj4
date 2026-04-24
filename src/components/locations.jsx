import { React } from "react";
import { locations } from "../data/locations.js";

export default function Locations () {
    return (
        <>
         <div className="container py-5">
            <h1 className="text-center mb-3">Our Locations</h1>
            <p className="text-center text-muted mb-5">
                Find a childcare center near you.
            </p>

            <div className="row">
                {locations.map((loc) => (
                    <div className="col-md-6 mb-4" key={loc.id}>
                        <div className="card border-0 shadow-sm h-100">
                            <img src={loc.image} className="card-img-top h-100 p-3"/>
                            
                            <div className="card-body"> 
                                <h4 className="card-title">{loc.city}</h4>
                                <p><i className="fa-regular fa-address-book"></i> {loc.address}</p>
                                <p><i className="fa-regular fa-square-phone"></i> {loc.phone}</p>
                                <p><i className="fa-regular fa-clock"></i> {loc.hours}</p>
                                <p className="text-muted"><i className="fa-solid fa-note-sticky"></i> {loc.description}</p>

                                <button className="btn btn-primary">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
        </>
    );
}