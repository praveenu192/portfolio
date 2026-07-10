import React, { useEffect, useRef } from 'react';

function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        // Text Reveal
        const textElements = sectionRef.current.querySelectorAll('.about-text-reveal');
        
        textElements.forEach((el) => {
            gsap.fromTo(el, 
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Image Reveal
        const imageWrap = sectionRef.current.querySelector('.about-image-reveal');
        if (imageWrap) {
            gsap.fromTo(imageWrap,
                { scale: 0.8, opacity: 0, rotation: -5, x: -50 },
                {
                    scale: 1,
                    opacity: 1,
                    rotation: 0,
                    x: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: imageWrap,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Initialize VanillaTilt if available
        if (typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(sectionRef.current.querySelectorAll(".tilt-element"), {
                max: 12,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
                scale: 1.05
            });
        }
    }, []);

    return (
        <section id="about" className="about section-padding" ref={sectionRef}>
            <div className="container grid-2">
                <div className="about-image-wrap about-image-reveal">
                    <div className="about-image glass-panel tilt-element">
                        <img src="images/ChatGPT Image May 26, 2026, 02_41_14 PM (2).png" alt="Praveen Workspace" />
                        <div className="glow-effect"></div>
                    </div>
                </div>
                <div className="about-content">
                    <h2 className="section-title about-text-reveal">About <span className="text-gradient">Me</span></h2>
                    <p className="lead about-text-reveal">
                        I am a Graphic Designer and Frontend Developer currently pursuing my B.E. in CSE at CIET Engineering College.
                    </p>
                    <p className="about-text-reveal">
                        With a strong eye for detail and freelance experience, I specialize in branding, social media creatives, UI design, and turning complex problems into elegant, intuitive, and highly performant interfaces. 
                    </p>
                    <div className="stats grid-3 about-text-reveal">
                        <div className="stat-item">
                            <h3 className="stat-num">50+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <h3 className="stat-num">3+</h3>
                            <p>Years Freelance</p>
                        </div>
                        <div className="stat-item">
                            <h3 className="stat-num">100%</h3>
                            <p>Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
