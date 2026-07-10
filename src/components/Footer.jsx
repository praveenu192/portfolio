import React, { useEffect } from 'react';

function Footer() {
    useEffect(() => {
        gsap.to(".footer-huge-text", {
            y: -100,
            scrollTrigger: {
                trigger: ".footer",
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1
            }
        });
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <footer className="footer">
            <div className="container">
                <h1 className="footer-huge-text reveal-text">PRAVEEN</h1>
                <div className="footer-bottom">
                    <p>&copy; 2026 Praveen. All rights reserved.</p>
                    <a href="#" className="link-hover" onClick={scrollToTop}>Back to Top <i className="ri-arrow-up-line"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
