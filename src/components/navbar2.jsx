import { NavLink } from "react-router-dom";
import "../styling/navbar.css";

export default function Navbar2 () {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand brand" to="/">
           Placeholder childcare
        </NavLink>

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

            {/* Nav Links */}
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link nav-pill active-pill" : "nav-link nav-pill"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-pill active-pill" : "nav-link nav-pill"
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/locations"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-pill active-pill" : "nav-link nav-pill"
                }
              >
                Locations
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-pill active-pill" : "nav-link nav-pill"
                }
              >
                Pricing
              </NavLink>
            </li>

            {/* Auth Buttons */}
                <li className="nav-item dropdown ms-3">
                    <button
                        className="btn signup-btn dropdown-toggle"
                        id="authDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Get Started
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="authDropdown">
                        <li>
                        <NavLink className="dropdown-item" to="/login">
                            Login
                        </NavLink>
                        </li>
                        <li>
                        <NavLink className="dropdown-item" to="/signup">
                            Enroll Now
                        </NavLink>
                        </li>
                        <li>
                        <NavLink className="dropdown-item" to="/contact">
                            Contact Us
                        </NavLink>
                        </li>
                    </ul>
                </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
