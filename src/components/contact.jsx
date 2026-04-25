import { React, useState } from "react";
import beachpic from "../images/beachpic.jpg";
import { motion } from "motion/react";

export default function Contact () {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.targe.value });
    };

    return (
        <>
            <div className="login-bg d-flex align-items-center justify-content-center min-vh-100">
                <motion.div
                    className="container"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="glass-card row overflow-hidden">
                                {/**left form */}
                                <div className="col-md-6 p-5">
                                    <motion.h2
                                    className="fw-bold mb-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}>
                                    
                                    <h2 className="mb-4">We'd love hear from you! 📣</h2> 
                                </motion.h2>

                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Full Name</label>
                                            <input type="text" 
                                                className="form-control" 
                                                placeholder="Enter full name..." 
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fccontact">Email</label>
                                            <input type="email" 
                                                className="form-control" 
                                                placeholder="Enter email..." 
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Phone #</label>
                                            <input type="tel" 
                                                className="form-control" 
                                                placeholder="Enter contact #..." 
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Message Us</label>
                                            <textarea
                                                className="form-control"
                                                rows="4"
                                                placeholder="Please enter feedback message here..."
                                                onChange={handleChange}
                                                required>
                                                    
                                            </textarea>
                                        </div>

                                        <button className="btn w-100 btnContact">
                                            Send Message
                                        </button>
                                    </form>
                                </div>

                                {/**right container */}
                                <div className="col-md-6 d-none d-md-block p-0">
                                    <motion.div
                                         initial={{ opacity: 0, x: 40 }}
                                         animate={{ opacity: 1, x: 0 }}
                                         transition={{ delay: 0.3 }}
                                    >
                                        <img src={beachpic} 
                                        alt="contact"
                                        className="img-fluid h-100 w-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}