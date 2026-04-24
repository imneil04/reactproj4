import { React, useState } from "react";
import playgroundpic from "../images/playgroundpic.jpg";

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
            <div>
                <div className="container py-5">
                    <div className="row w-100 shadow-lg rounded overflow-hidden">

                        {/**left form */}
                        <div className="col-md-6 p-5 bg-white">
                            <h2 className="mb-4">Contact Us <i className="bi bi-megaphone-fill"></i></h2> 

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
                                    <label className="form-label">Email</label>
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
                                    <label className="form-label">Feedback</label>
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        placeholder="Please enter feedback message here..."
                                        onChange={handleChange}
                                        required>
                                            
                                    </textarea>
                                </div>

                                <button className="btn btn-primary w-100">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/**right */}

                        <div className="col-md-6 d-none d-md-block p-0">
                            <img src={playgroundpic} 
                                 alt="contact"
                                 className="img-fluid h-100 w-100"
                                 style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}