import { React } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Signup () {
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
                                        
                                        Create an account ✅
                                    </motion.h2>

                                     <p className="text-muted mb-4">
                                        Join and start booking in a trusted childcare
                                    </p>

                                    <form>
                                        {/* full Name */}
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" placeholder="Full Name" />
                                            <label>Full Name</label>
                                        </div>

                                        {/* email */}
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" placeholder="Email" />
                                            <label>Email address</label>
                                        </div>

                                        {/* phone */}
                                        <div className="form-floating mb-3">
                                            <input type="tel" className="form-control" placeholder="Phone #" />
                                            <label>Phone Number</label>
                                        </div>

                                        {/* location */}
                                        <div className="form-floating mb-3">
                                            <select className="form-select">
                                            <option>Calgary</option>
                                            <option>Edmonton</option>
                                            </select>
                                            <label>City</label>
                                        </div>

                                        {/* password */}
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" placeholder="Enter password" />
                                            <label>Password</label>
                                        </div>

                                        {/* Confirm password */}
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" placeholder="Confirm password" />
                                            <label>Confirm Password</label>
                                        </div>

                                        {/* terms */}
                                        <div className="mb-3 small">
                                            <input type="checkbox" id="terms" />
                                            <label className="ms-2">

                                            I agree to the <Link to="/terms">Terms</Link> & {" "}
                                            <Link to="/privacy">Privacy Policy</Link>
                                            </label>
                                        </div>

                                        {/* Signup Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="btn w-100 mb-3 btnSignup">
                                            Sign Up Now
                                        </motion.button>

                                        {/* divider */}
                                        <div className="text-center text-muted mb-3">or</div>

                                        {/* social */}
                                        <button className="btn btn-outline-dark w-100 mb-2">
                                            Continue with Google
                                        </button>

                                        {/* Login redirect */}
                                        <p className="mt-4 text-center">
                                            Already have an account? <Link to="/login">Login</Link>
                                        </p>
                                    </form>
                                </div>

                                {/* right side */}
                                <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center text-white glass-side">
                                    <motion.div
                                    className="text-center px-4"
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    >
                                    <h3 className="fw-bold">Start Your Journey</h3>
                                    <p className="mt-3">
                                        Find trusted childcare in minutes across Calgary & Edmonton.
                                    </p>
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