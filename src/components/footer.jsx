import { React } from "react";
import { Link } from "react-router-dom";

export default function Footer () {
    return (
        <>

            <footer className="bg-dark text-light pt-5 pb-3 mt-5">
                <div className="container">

                    <div className="row">

                        {/**brand */}
                        <div className="col-md-3 mb-4">
                            <h5 className="fw-bold">Childcare app</h5>
                            <p className="small">
                                Helping parents find a safe, and reliable childcare home.
                            </p>
                        </div>

                        {/**quick links */}
                        <div className="col-md-3 mb-4">
                            <h6 className="fw-bold">Quick Links</h6>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
                                <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
                                <li><Link to="/locations" className="text-light text-decoration-none">Locations</Link></li>
                                <li><Link to="/pricing" className="text-light text-decoration-none">Rates</Link></li>
                                
                            </ul>
                        </div>

                        {/**company */}
                        <div className="col-md-3 mb-4">
                            <h6 className="fw-bold">Company</h6>
                            <ul className="list-unstyled">
                                <li><Link to="/careers" className="text-light text-decoration-none">Careers</Link></li>
                                <li><Link to="/reviews" className="text-light text-decoration-none">Parent Reviews</Link></li>
                                <li><Link to="/faq" className="text-light text-decoration-none">FAQs</Link></li>
                                <li><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}