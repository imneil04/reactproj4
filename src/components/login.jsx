import { React } from "react";
import { Link } from "react-router-dom";
import lpic1 from "../images/mttpic.jpg";
import "../styling/login.css";

export default function Login () {
    return (
        <>
            <div className="container vh-100 d-flex align-items-center">
                <div className="row w-100 shadow rounded overflow-hidden">

                    {/**left side - form */}
                    <div className="col-md-6 p-5 bg-white">
                        <h2 className="mb-4 fw-bold">Welcome 🎉</h2>
                        <p className="text-muted mb-4">
                            Login to manage account
                        </p>

                        <form>
                            <div className="form-floating mb-3">
                                <input type="email" 
                                       className="form-control"
                                       id="email"
                                       placeholder="name@example.com"
                                />
                                <label htmlFor="email">Email Address</label>
                            </div>

                            {/**Password */}
                            <div className="form-floating mb-3">
                                <input type="password" 
                                       className="form-control"
                                       id="password"
                                       placeholder="Password..."
                                />
                                <label htmlFor="password">Password</label>
                            </div>

                            {/**options */}
                            <div className="d-flex justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" id="remember" 
                                    />
                                    <label htmlFor="remember" className="ms-2">
                                        Remember Me
                                    </label>
                                </div>
                                    <Link to="#" className="text-decoration-none">
                                        Forgot Password?
                                    </Link>
                            </div>

                                {/**login button */}
                                <button className="btn btn-primary w-100 mb-3">
                                    Login
                                </button>

                                {/**divider */}
                                <div className="text-center mb-3 text-muted">or</div>

                                {/**Social login */}
                                <button className="btn btn-outline-dark w-100 mb-2">
                                    Continue with Google
                                </button>

                                <button className="btn btn-outline-primary w-100">
                                    Continue with Facebook
                                </button>

                                {/**Sign up */}
                                <p className="mt-4 text-center">
                                    <Link to="/signup">Sign up</Link>
                                </p>
                        </form>
                    </div>

                    {/**right-side image / branding */}
                    <div className="col-md-6 d-none d-md-block p-0">
                        <img src={lpic1} 
                            alt="loginr"
                            className="img-fluid h-100 w-100"
                            style={{ objectFit: "cover" }}
                    />
                    </div>
                </div>
            </div>
        </>
    );
}