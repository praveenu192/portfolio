import React, { useEffect, useRef } from 'react';

function Skills() {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        // Reveal Cards
        const cards = sectionRef.current.querySelectorAll('.reveal-card');
        if (cards.length > 0) {
            gsap.fromTo(cards,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Progress Bars Animation
        const progressBars = sectionRef.current.querySelectorAll('.progress');
        progressBars.forEach((bar) => {
            const targetWidth = bar.getAttribute('data-width');
            gsap.fromTo(bar,
                { width: "0%" },
                {
                    width: targetWidth,
                    duration: 1.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: bar.closest('.skill-category'),
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        if (typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(sectionRef.current.querySelectorAll(".tilt-element"), {
                max: 10,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
            });
        }
    }, []);

    return (
        <section id="skills" className="skills section-padding" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title text-center about-reveal" style={{marginBottom: "3rem"}}>My <span className="text-gradient">Arsenal</span></h2>
                
                <div className="skills-wrapper">
                    <div className="skill-category glass-panel tilt-element reveal-card">
                        <h3>Design</h3>
                        <div className="skill-list">
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>Adobe Photoshop</span>
                                    <span>95%</span>
                                </div>
                                <div className="progress-bar"><div className="progress" data-width="95%"></div></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>Illustrator</span>
                                    <span>90%</span>
                                </div>
                                <div className="progress-bar"><div className="progress" data-width="90%"></div></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>Figma</span>
                                    <span>95%</span>
                                </div>
                                <div className="progress-bar"><div className="progress" data-width="95%"></div></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>UI/UX Design</span>
                                    <span>90%</span>
                                </div>
                                <div className="progress-bar"><div className="progress" data-width="90%"></div></div>
                            </div>
                        </div>
                    </div>

                    <div className="skill-category glass-panel tilt-element reveal-card">
                        <h3>Development</h3>
                        <div className="skill-list">
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>HTML & CSS</span>
                                    <span>95%</span>
                                </div>
                                <div className="progress-bar"><div className="progress" data-width="95%"></div></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>JavaScript</span>
                                    <span>85%</span>
                                </div>
                                <div className="progress-bar"><div className="progress" data-width="85%"></div></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>React.js</span>
                                    <span>80%</span>
                                </div>
                                <div className="progress-bar"><div className="progress" data-width="80%"></div></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>Animation (GSAP)</span>
                                    <span>85%</span>
                                </div>
                                <div className="progress-bar"><div className="progress" data-width="85%"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
