import { useEffect } from "react";
import { faqs } from "../data/faqsData.js";
import "../styling/faqs.css";

export default function FAQ () {

    return (
        <>
            <div className="container py-5">
                <div>
                    <h2 className="text-center mb-3">Frequently Asked Questions <i className="bi bi-patch-question"></i></h2>
                    <p className="text-muted text-center mt-2">Quick answers to most well-known questions. (placeholder)</p>
                </div>
                
                <div className="accordion" id="faqsAccordion">
                    {faqs.map((faq, index) => (
                        <div className="accordion-item shadow-sm mb-3 rounded" key={index}>
                            <h2 className="accordion-header">
                                <button 
                                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#faq-${index}`}
                                    aria-expanded={index === 0 ? "true" : "false"}
                                    aria-controls={`faq-${index}`}>
                                    {faq.question}
                                </button>
                            </h2>

                            <div id={`faq-${index}`}
                                 className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                 data-bs-parent="#faqsAccordion">
                                <div className="accordion-body">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}