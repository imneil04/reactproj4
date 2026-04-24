//import { Navbar, Nav, Container } from "bootstrap";
import { Link } from "react-router-dom";
import "../styling/navbar.css";

export default function Navbar () {
    return (
        <>
           <nav className="navbar navbar-expand-lg custom-navbar sticky-top shadow-sm">
                <div className="container">
                    <Link className="navbar-brand brand" to="/">
                        Placeholder childcare
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center">
                        
                            {/* Main Links */}
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/locations">Locations</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li>

                            {/* Auth Buttons */}
                            <li className="nav-item ms-3">
                            <Link className="btn btn-outline-dark login-btn" to="/login">
                                Login
                            </Link>
                            </li>

                            <li className="nav-item ms-2">
                            <Link className="btn signup-btn" to="/signup">
                                Sign Up
                            </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}