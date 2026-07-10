import React, { useEffect, useRef } from 'react';

function Timeline() {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const revealElements = sectionRef.current.querySelectorAll('.reveal-text');
        
        revealElements.forEach((el) => {
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
    }, []);

    return (
        <section id="experience" className="timeline-section section-padding" ref={sectionRef}>
            <div className="container grid-2">
                <div className="timeline-column">
                    <h2 className="section-title reveal-text"><i className="ri-briefcase-4-line text-accent"></i> Experience</h2>
                    <div className="timeline">
                        <div className="timeline-item reveal-text">
                            <div className="timeline-dot"></div>
                            <span className="timeline-date">2025 - Present</span>
                            <h3 className="timeline-title">Freelance Designer</h3>
                            <p className="timeline-desc">Started working as a Freelance Designer, handling independent projects in graphic design and UI/UX design. Focused on creating creative visuals, social media designs, logos, posters, and user-friendly digital designs based on client requirements.</p>
                        </div>
                        <div className="timeline-item reveal-text">
                            <div className="timeline-dot"></div>
                            <span className="timeline-date">2022 - 2024</span>
                            <h3 className="timeline-title">Surya’s Studio</h3>
                            <p className="timeline-desc">Worked as a Designer at a creative studio for 2 years, where I gained experience in poster design, logo creation, photo editing, branding, and client-based creative projects. Collaborated with teams to create visually appealing and effective designs for different clients.</p>
                        </div>
                    </div>
                </div>
                <div className="timeline-column">
                    <h2 className="section-title reveal-text"><i className="ri-graduation-cap-line text-secondary"></i> Education</h2>
                    <div className="timeline">
                        <div className="timeline-item reveal-text">
                            <div className="timeline-dot"></div>
                            <span className="timeline-date">2023 - 2027</span>
                            <h3 className="timeline-title">BE. Computer Science and Engineering</h3>
                            <p className="timeline-desc">Currently pursuing my final semester of Bachelor's degree in BE. Computer Science And Engineering at Coimbatore Institute Of Engineering And Technology (CIET), with an expected graduation in 2027.</p>
                        </div>
                        <div className="timeline-item reveal-text">
                            <div className="timeline-dot"></div>
                            <span className="timeline-date">2022 - 2023</span>
                            <h3 className="timeline-title">Higher Secondary</h3>
                            <p className="timeline-desc">I completed my schooling at Dominic Savio Higher Secondary School, Tirupattur, securing 75% in my Higher Secondary examinations in 2023.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
