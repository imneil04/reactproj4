import { React } from "react";
import { teamMembers } from "../data/team";
import { useNavigate } from "react-router-dom";
import "../styling/about.css";


export default function About () {

    const navigate = useNavigate();

    return (
        <>
            <div>
                <section className="bg-light text-center py-5">
                    <div className="container">
                        <h1 className="fw-bold">About Us</h1>
                        <p className="lead text-muted">
                            Caring for children. Supporting families. Building memorable futures. (placeholders)
                        </p>
                    </div>
                </section>

                {/**Mission and Vision */}
                <section className="py-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="p-4 shadow-sm rounded bg-white h-100">
                                    <h4 className="fw-bold">Our Mission</h4>
                                    <p className="text-muted">
                                        We provide safe, nurturing, and high-quality childcare that
                                        supports every child's growth while giving parents peace of mind. (placeholder)
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="p-4 shadow-sm rounded bg-white h-100">
                                    <h4 className="fw-bold">Our Vision</h4>
                                    <p className="text-muted">
                                        We aim to create a future where every family has access to 
                                        reliable, enriching childcare that empowers children to thrive. (placeholder)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/**Core values */}
                <section className="bg-light py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4">Our Core Values</h2>
                        <div className="row g-4">
                            {["Safety First", "Learning Through Play", "Inclusivity", "Parent Partnership"].map(
                                (value, index) => (
                                    <div className="col-md-3" key={index}>
                                        <div className="p-4 bg-white shadow-sm rounded h-100">
                                            <h5>{value}</h5>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>

                {/**Team */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-5">Meet Our Team</h2>
                        <div className="row g-4">
                            {teamMembers.map((member) => (
                                <div className="col-md-3" key={member.id} >
                                    <div className="card border-0 shadow-sm h-100">
                                        <img src={member.img} 
                                             className="card-img-top"
                                             alt={member.name}
                                        />

                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">{member.name}</h5>
                                            <p className="text-primary">{member.role}</p>
                                            <p className="text-muted small">{member.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/**Why choose us */}
                <section className="bg-light py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4">Why Choose Us?</h2>
                        <div className="row g-4">
                            {["Licensed & certified staff", "Safe & secure environment", "Flexible programs", "Trusted by families"]
                            .map((item, index) => (
                                <div className="col-md-3" key={index}>
                                    <div className="p-4 bg-white shadow-sm rounded h-100">
                                        <p className="mb-0">{item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/**CTA */}
                <section className="py-5 text-center">
                    <div className="container">
                        <h2 className="fw-bold">Join Us Now</h2>
                        <p className="text-muted mb-4">
                            Discover a childcare experience built around your family. (placeholder)
                        </p>
                        <button className="btn btn-primary px-4 me-2">Book a Tour</button>
                        <button className="btn btn-outline-primary px-4" 
                                onClick={() => navigate("/contact")}>Contact Us</button>
                    </div>
                </section>
            </div>
        </>
    );
};