import { React, use, useState } from "react";
import { pricingData } from "../data/pricingData";
//import { perks } from "../data/faqsData";

export default function Pricing () {

    const [location, setLocation] = useState("Calgary");

    return (
        <>
        {/**Hero */}
         <div className="bg-light text-center py-5">
            <h1 className="fw-bold">Simple, Transparent Rates</h1>
            <p className="text-muted">
                Quality childcare with flexible plans that fit your familiy's needs
            </p>

            <button className="btn btn-primary mt-3">Book a Tour</button>
         </div>

         {/**Location toggle */}
         <div className="text-center my-4">
            <div className="btn-group">
                {Object.keys(pricingData).map((city) => (
                    <button key={city}
                            className={`btn ${
                                location === city ? "btn-primary" : "btn-outline-primary"
                            }`}
                            onClick={() => setLocation(city)}>
                            {city}
                    </button>
                ))}
            </div>
         </div>

         {/**Pricing cards */}
         <div className="container py-4">
            <div className="row">
                {pricingData[location].map((plan, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className={`card h-100 shadow-sm ${
                            plan.highlight ? "border-primary" : ""
                            }`}>
                            <div className="card-body text-center">
                                {plan.highlight && (
                                    <span className="badge bg-primary mb-2">
                                        Most Popular
                                    </span>
                                )}
                                <h4 className="fw-bold">{plan.title}</h4>
                                <p className="text-muted">{plan.age}</p>
                                <h3 className="my-3">{plan.price}</h3>

                                <ul className="list-unstyled">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="mb-2">
                                            ✅ {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="btn btn-outline-primary mt-3">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>

         {/**What's included */}
         <div className="bg-light py-5">
            <div className="container text-center">
                <h2 className="fw-bold mb-4">What's included</h2>
                <div className="row">
                    {[
                        "Certified caregivers",
                        "Daily learning activities",
                        "Healthy meals & snacks",
                        "Secure and safe facilities",
                        "Parent app updates",
                        "Low child-to-staff ratio",
                    ].map((item, i) => (
                        <div className="col-md-4 mb-3" key={i}>
                            <div className="p-3 border rounded bg-white shadow-sm">
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
         </div>

         {/**CTA */}
         <div className="text-center py-5 bg-secondary text-white">
            <h2 className="fw-bold">Ready to Get Started?</h2>
            <p>Secure your child's spot today (placeholder)</p>
            <button className="btn btn-light">Enroll Now</button>
         </div>
        </>
    );
}