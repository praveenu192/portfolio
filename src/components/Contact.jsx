import React, { useState, useEffect, useRef } from 'react';

function Contact() {
    const sectionRef = useRef(null);
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // Replace with your Web3Forms Access Key
        formData.append("access_key", "a9c7a3df-d852-41a3-96db-1b9280f34f76");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            // Check if the response is actually JSON before parsing
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                const data = await response.json();

                if (data.success) {
                    setResult("Message Sent Successfully!");
                    event.target.reset();
                } else {
                    console.log("Error", data);
                    setResult(data.message);
                }
            } else {
                // If it's not JSON, it's likely an HTML error page (e.g., due to an invalid access key)
                console.error("Received non-JSON response");
                setResult("Error: Invalid API Key or Server Error. Please check your Web3Forms Access Key.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setResult("An error occurred while sending the message.");
        }
    };

    useEffect(() => {
        if (!sectionRef.current) return;

        const cards = sectionRef.current.querySelectorAll('.reveal-card');

        if (cards.length > 0) {
            gsap.fromTo(cards,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    }, []);

    return (
        <section id="contact" className="contact section-padding" ref={sectionRef}>
            <div className="container">
                <div className="contact-wrapper glass-panel reveal-card">
                    <div className="contact-info">
                        <h2 className="section-title">Let's <span className="text-gradient">Talk</span></h2>
                        <p>Have a project in mind or just want to say hi? Feel free to reach out.</p>

                        <ul className="contact-list">
                            <li>
                                <i className="ri-mail-line"></i>
                                <a href="mailto:praveenu2005@gamil.com" className="link-hover">praveenu2005@gmail.com</a>
                            </li>
                            <li>
                                <i className="ri-map-pin-line"></i>
                                <span>India</span>
                            </li>
                        </ul>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/praveen9944" className="magnetic"><i className="ri-linkedin-fill"></i></a>
                            <a href="https://github.com/PRAVEENU192" className="magnetic"><i className="ri-github-fill"></i></a>
                            <a href="https://instagram.com/gulpi__007" className="magnetic"><i className="ri-instagram-line"></i></a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={onSubmit}>
                        <div className="input-group">
                            <input type="text" name="name" id="name" required placeholder=" " />
                            <label htmlFor="name">Your Name</label>
                        </div>
                        <div className="input-group">
                            <input type="email" name="email" id="email" required placeholder=" " />
                            <label htmlFor="email">Your Email</label>
                        </div>
                        <div className="input-group">
                            <textarea name="message" id="message" rows="4" required placeholder=" "></textarea>
                            <label htmlFor="message">Your Message</label>
                        </div>
                        <button type="submit" className="btn-primary magnetic w-full">
                            <span className="btn-text">Send Message</span>
                            <i className="ri-send-plane-fill"></i>
                        </button>
                        {result && <p style={{ marginTop: '1rem', textAlign: 'center', color: 'var(--text-color)' }}>{result}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
