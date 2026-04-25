import { motion } from "motion/react";
import { reviews } from "../data/previewsData";
import "../styling/reviews.css";

export default function Reviews () {

    const renderStarsRating = (rating) => {
        const stars = [];
    
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<i key={i} className="bi bi-star-fill text-warning me-1"></i>);
            }
            else if (rating >= (i) - 0.5) {
                stars.push(<i key={i} className="bi bi-star-half text-warning me-1"></i>);
            }
            else {
                stars.push(<i key={i} className="bi bi-star text-warning me-1"></i>);
            }
        }
        return stars;
    };

    return (
        <>
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="mb-2">What Parents are Saying <i className="bi bi-cursor"></i></h2>
                    <p className="text-muted">
                        Real experiences from families who trust our platform (placeholder)
                    </p>
                </div>

                <div className="row g-4">
                    {reviews.map((review, index) => (
                        <div className="col-md-5 col-lg-4" key={index}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="border-0 shadow-sm h-100 p-4 review-card"
                                >
                                    <div className="d-flex align-items-center mb-3">
                                        <i className={`bi ${review.icon} fs-1 text-secondary me-3`}></i>
                                        <div>
                                            <h6 className="mb-0 fw-semibold">{review.name}</h6>
                                            <small className="text-muted">{review.role}</small>
                                            {/**star ratings */}
                                            <div className="mt-2">
                                                {renderStarsRating(review.rating)}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-muted mb-0">
                                        "{review.feedback}"
                                    </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};