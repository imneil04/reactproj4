import { Link } from "react-router-dom";
import { motion } from "motion/react";
import lpic1 from "../images/mttpic.jpg";

export default function LoginAnimation () {
    return (
        <>
            <div className="login-bg d-flex align-items-center justify-content-center min-vh-100">
                 <motion.div
                        className="container"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}>

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
                                            
                                            Welcome 🎉
                                        </motion.h2>

                                         <p className="text-muted mb-4">
                                            Log in to manage your account
                                        </p>

                                        {/**login form */}
                                        <form>
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" placeholder="Enter Email" required />
                                                <label>Email address</label>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <input type="password" className="form-control" placeholder="Enter Password" required />
                                                <label>Password</label>
                                            </div>

                                            <div className="d-flex justify-content-between mb-3 small">
                                                <div>
                                                    <input type="checkbox" id="remember" />
                                                    <label className="ms-2">Remember Me</label>
                                                </div>
                                                    <Link to="#">Forgot Password?</Link>
                                            </div>
                                            {/**login buttons */}
                                            <motion.button
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.97 }}
                                                    className="btn btn-primary w-100 mb-3">
                                                    Login
                                            </motion.button>

                                            <div className="text-center text-muted mb-3">or</div>

                                            <button className="btn btn-outline-dark w-100 mb-2">
                                                    Continue with Google
                                            </button>

                                            <p className="mt-4 text-center">
                                                    Don’t have an account? <Link to="/signup">Sign up</Link>
                                            </p>
                                        </form>
                                    </div>

                                    {/**right-side image / branding */}
                                    <div className="col-md-6 d-none d-md-block p-0 glass-side">
                                        <motion.div
                                            initial={{ opacity: 0, x: 40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-center px-4">
                                            
                                        </motion.div>
                                        <img src={lpic1} 
                                            alt="loginr"
                                            className="img-fluid h-100 w-100"
                                            style={{ objectFit: "cover" }}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>     
                </motion.div>
            </div>
        </>
    );
}