import React, { useEffect, useRef } from 'react';

function Hero({ isAppLoaded }) {
    const typedRef = useRef(null);
    const tiltRef = useRef(null);

    useEffect(() => {
        if (!isAppLoaded) return;

        // Initialize Typed.js
        if (typedRef.current) {
            new Typed(typedRef.current, {
                strings: ['Digital Experiences.', 'Brand Identities.', 'Interactive UIs.', 'Modern Websites.'],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }

        // Hero Text & Image Reveal Timeline
        const tl = gsap.timeline();
        
        tl.fromTo('.reveal-text', 
            { y: 50, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 1, 
                stagger: 0.2, 
                ease: "power3.out" 
            }
        ).fromTo('.reveal-image',
            { scale: 0.8, opacity: 0, rotation: 5, y: 50 },
            {
                scale: 1,
                opacity: 1,
                rotation: 0,
                y: 0,
                duration: 1.2,
                ease: "power3.out"
            },
            "-=0.6"
        );

        // Vanilla Tilt initialization for 3D effect
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 15,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
                scale: 1.05
            });
        }
    }, [isAppLoaded]);

    return (
        <section id="home" className="hero">
            <div className="hero-container grid-2">
                <div className="hero-content">
                    <p className="hero-subtitle reveal-text">Hello, I am Praveen</p>
                    <h1 className="hero-title reveal-text">
                        I create <br />
                        <span className="text-gradient typed-text" ref={typedRef}></span>
                    </h1>
                    <p className="hero-desc reveal-text">
                        Bridging the gap between stunning visual design and flawless frontend development to build immersive digital experiences.
                    </p>
                    <div className="hero-cta reveal-text">
                        <a href="#projects" className="btn-primary magnetic">
                            <span className="btn-text">View My Work</span>
                            <i className="ri-arrow-right-up-line"></i>
                        </a>
                        <a href="#contact" className="btn-secondary magnetic">
                            <span className="btn-text">Contact Me</span>
                        </a>
                    </div>
                </div>
                <div className="hero-image-wrapper reveal-image">
                    <div className="hero-image-inner" ref={tiltRef}>
                        <img className="hero-img" src="images/ChatGPT Image Jun 13, 2026, 10_32_47 AM.png" alt="Praveen - Creative Developer" />
                        <div className="glow-effect"></div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Scroll to explore</p>
            </div>
        </section>
    );
}

export default Hero;
