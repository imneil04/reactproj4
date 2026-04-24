import { React } from "react";
import { Link } from "react-router-dom";
import "../styling/footer.css";

export default function Footer () {
    return (
        <>
            <footer className="bg-dark text-light pt-5 pb-3">
                <div className="container">
                    <div className="row">

                        {/**brand */}
                        <div className="col-md-3 mb-4">
                            <h5 className="fw-bold">Childcare app</h5>
                            <p className="small">
                                A safe, and reliable childcare home.
                            </p>
                        </div>

                        {/**quick links */}
                        <div className="col-md-3 mb-4 small">
                            <h6 className="fw-bold">Quick Links</h6>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
                                <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
                                <li><Link to="/locations" className="text-light text-decoration-none">Locations</Link></li>
                                <li><Link to="/pricing" className="text-light text-decoration-none">Rates</Link></li>
                                
                            </ul>
                        </div>

                        {/**company */}
                        <div className="col-md-3 mb-4 small">
                            <h6 className="fw-bold">Company</h6>
                            <ul className="list-unstyled">
                                <li><Link to="/careers" className="text-light text-decoration-none">Careers</Link></li>
                                <li><Link to="/reviews" className="text-light text-decoration-none">Parent Reviews</Link></li>
                                <li><Link to="/faqs" className="text-light text-decoration-none">FAQs</Link></li>
                                <li><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-4">
                            <h6 className="fw-bold">Get to Know Us More:</h6>
                            {/**social icons */}
                            <div className="d-flex gap-2 fs-6">
                                
                                <a href="#" className="text-light" target="_blank" rel="noreferrer">
                                    <i className="bi bi-facebook"></i>
                                </a>

                                <a href="#" className="text-light" target="_blank" rel="noreferrer">
                                    <i className="bi bi-instagram"></i>
                                </a>

                                <a href="#" className="text-light" target="_blank" rel="noreferrer">
                                    <i className="bi bi-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <hr className="border-secondary" />

                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3">

                        {/**bottom */}
                        <div className="text-center small mb-2 mb-md-0">
                            {new Date().getFullYear()} Childcare app. 
                            <p className="text-center small">Personal project of Mark del Rosario.</p>
                        </div>
                        
                        <div className="d-flex gap-3 small">
                            <Link to="/terms" className="text-light text-decoration-none">Terms</Link> 💠
                            <Link to="/privacy" className="text-light text-decoration-none">Privacy</Link> 💠
                            <Link to="/signup" className="text-light text-decoration-none">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}