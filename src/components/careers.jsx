import { motion } from "motion/react";
import { jobs } from "../data/careersData";
import "../styling/careers.css";
import { useRef } from "react"; //to navigate within page section

export default function Careers () {
    
    const jobsRef = useRef(null);

    const scrollToJobs = () => {
        jobsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div>
                <section className="py-5 bg-light text-center">
                    <div className="container">
                        <h1 className="fw-bold">Join Our Mission</h1>
                        <p className="lead">
                            Help us provide a safe, reliable, and nurturing childcare for families.
                        </p>

                        <button className="btn btn-primary btn-lg mt-3" onClick={scrollToJobs}>
                           View Open Positions
                        </button>
                    </div>
                </section>

                {/**benefits section */}
                <section className="py-5">
                    <div className="container">
                        <div className="row text-center">
                            {[
                                { icon: "bi bi-people", title: "Supportive Team", desc: "Work with caring professionals" },
                                { icon: "bi bi-clock", title: "Flexible Hours", desc: "Work-life balance matters" },
                                { icon: "bi bi-shield-check", title: "Safe Environment", desc: "Child safety is our priority" },
                                { icon: "bi bi-graph-up", title: "Career Growth", desc: "Grow with our organization" }
                            ].map((item, index) => (
                                <div className="col-md-3 mb-4" key={index}>
                                    <div className="p-4 rounded h-100 benefit-card">
                                        <i className={`${item.icon} fs-1 mb-3`}></i>
                                        <h5>{item.title}</h5>
                                        <p className="text-muted">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/**Job listings */}
                <section className="py-5 bg-light" ref={jobsRef}>
                    <div className="container">
                        <h2 className="text-center mb-5">Open Positions</h2>
                        <div className="row">
                            {jobs.map((job) => (
                                <div className="col-md-4 mb-4" key={job.id}>
                                    <motion.div
                                        className="card h-100 shadow-sm job-card"
                                        whileHover={{ scale: 1.03 }}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="card-body">
                                            <h5 className="card-title">{job.title}</h5>
                                            <p className="text-muted mb-1">{job.location}</p>
                                            <p className="text-muted mb-2">{job.type}</p>
                                            <p className="card-text">{job.description}</p>
                                        </div>

                                        <div className="card-footer bg-transparent border-0">
                                            <button className="btn btn-outline-primary w-100">
                                                Apply Now
                                            </button>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/**Call-To-Action section */}
                <section className="py-5 text-center">
                    <div className="container">
                        <h3>Don't see a role that fits?</h3>
                        <p className="text-muted">
                            Send your application anyways, and we'll reach out when something opens up.
                        </p>
                        <button className="btn btn-secondary">Submit Application</button>
                    </div>
                </section>
            </div>
        </>
    );
}