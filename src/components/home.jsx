import { react } from "react";
//images
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import { useNavigate } from "react-router-dom";
import "../styling/home.css";

export default function Home () {

    const navigate = useNavigate();

    return (
        <>
          <div>
                <section className="bg-light py-5">
                    <div className="container">
                        
                        <div className="row align-items-center">

                            {/**left-side text */}
                            <div className="row justify-content-center">
                                <div className="col-md-6 text-center mb-4 mb-md-5">
                                    <h1 className="display-5 fw-bold">Childcare Placeholder</h1>

                                    <p className="lead">
                                        Verified childcare directors. Safe, reliable, and flexible.
                                    </p>

                                    <button className="btn btn-lg mt-3 btnHomeGS" onClick={() => navigate("/contact")}>
                                        Get Started
                                    </button>
                                </div>
                            </div>

                            {/**right-side carousel */}
                            <div className="cold-md-6">
                                <div id="heroCarousel" className="carousel slide carousel-fade" 
                                        data-bs-ride="carousel" 
                                        data-bs-interval="3000">
                                    <div className="carousel-inner rounded shadow">
                                        <div className="carousel-item active">
                                            <img src={pic1} className="d-block w-100" alt="carousel_pic_1" />
                                        </div>

                                         <div className="carousel-item">
                                            <img src={pic2} className="d-block w-100" alt="carousel_pic_2" />
                                        </div>

                                        <div className="carousel-item">
                                            <img src={pic3} className="d-block w-100" alt="carousel_pic_3" />
                                        </div>

                                        <div className="carousel-item">
                                            <img src={pic4} className="d-block w-100" alt="carousel_pic_4" />
                                        </div>
                                    </div>

                                    {/**Controls */}
                                    <button className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#heroCarousel"
                                            data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                    </button>

                                    <button className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#heroCarousel"
                                            data-bs-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </button>

                                    {/**indicators */}
                                    <div className="carousel-indicators">
                                        <button type="button"
                                                data-bs-target="#heroCarousel"
                                                data-bs-slide-to="0"
                                                className="active">
                                        </button>

                                        <button type="button"
                                                data-bs-target="#heroCarousel"
                                                data-bs-slide-to="1"
                                                className="active">
                                        </button>

                                        <button type="button"
                                                data-bs-target="#heroCarousel"
                                                data-bs-slide-to="2"
                                                className="active">
                                        </button>

                                        <button type="button"
                                                data-bs-target="#heroCarousel"
                                                data-bs-slide-to="3"
                                                className="active">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 

                {/**trust section */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="mb-4">Why Parents Trust Us</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <h5>✅ Background checked</h5>
                                <p>All childcare directors are verified and screened.</p>
                            </div>

                            <div className="col-md-4">
                                <h5>✅ Secure registration and processes</h5>
                                <p>Safe and reliable enrollment system with real human support.</p>
                            </div>

                             <div className="col-md-4">
                                <h5>✅ Real reviews</h5>
                                <p>Honest ratings from parents.</p>
                            </div>
                        </div>
                    </div>
                </section> 

                {/**call-to-action section */}
                <section className="text-white text-center py-5 bgHome">
                    <div className="container">
                        <h2>Ready to Get Started?</h2>
                        <p>Join us Today.</p>

                        <button className="btn btn-lg btnHomeGS" onClick={() => navigate("/signup")}>
                            Sign up for free
                        </button>
                    </div>
                </section>
          </div>      
        </>
    );
}