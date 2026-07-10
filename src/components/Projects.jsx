import React, { useEffect, useRef, useState } from 'react';

function Projects() {
    const sectionRef = useRef(null);
    const [filter, setFilter] = useState('all');
    const [previewImage, setPreviewImage] = useState(null);

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

        if (typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(sectionRef.current.querySelectorAll(".tilt-element"), {
                max: 10,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
            });
        }
    }, []);

    const handleFilter = (type) => {
        setFilter(type);
        const cards = sectionRef.current.querySelectorAll('.project-card');

        cards.forEach(card => {
            if (type === 'all' || card.classList.contains(`item-${type}`)) {
                card.style.display = 'block';
                gsap.to(card, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
            } else {
                gsap.to(card, {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => { card.style.display = 'none'; }
                });
            }
        });

        setTimeout(() => {
            if (window.ScrollTrigger) ScrollTrigger.refresh();
        }, 600);
    };

    const handlePreview = (e, imgSrc) => {
        e.preventDefault();
        setPreviewImage(imgSrc);
    };

    return (
        <section id="projects" className="projects section-padding" ref={sectionRef}>
            <div className="container">
                <div className="projects-header">
                    <h2 className="section-title">Featured <span className="text-gradient">Works</span></h2>
                    <div className="filter-btns">
                        <button className={`filter-btn magnetic ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilter('all')}>All</button>
                        <button className={`filter-btn magnetic ${filter === 'design' ? 'active' : ''}`} onClick={() => handleFilter('design')}>Graphic Design</button>
                        <button className={`filter-btn magnetic ${filter === 'web' ? 'active' : ''}`} onClick={() => handleFilter('web')}>Web Dev</button>
                        <button className={`filter-btn magnetic ${filter === 'ui' ? 'active' : ''}`} onClick={() => handleFilter('ui')}>UI/UX</button>
                    </div>
                </div>

                <div className="projects-grid">
                    <div className="project-card tilt-element item-design item-ui reveal-card">
                        <div className="project-img">
                            <img src="images/defender.jpg" alt="Defender Brand" />
                            <div className="project-overlay">
                                <a href="#" className="view-btn magnetic" onClick={(e) => handlePreview(e, "images/defender.jpg")}><i className="ri-eye-line"></i></a>
                            </div>
                        </div>
                        <div className="project-content">
                            <span className="project-category">Brand Identity</span>
                            <h3 className="project-title">Defender Brand</h3>
                        </div>
                    </div>

                    <div className="project-card tilt-element item-web reveal-card">
                        <div className="project-img">
                            <img src="images/earbuds.jpg" alt="Web Development" />
                            <div className="project-overlay">
                                <a href="#" className="view-btn magnetic" onClick={(e) => handlePreview(e, "images/earbuds.jpg")}><i className="ri-eye-line"></i></a>
                            </div>
                        </div>
                        <div className="project-content">
                            <span className="project-category">Frontend & UI</span>
                            <h3 className="project-title">Earbuds Poster</h3>
                        </div>
                    </div>

                    <div className="project-card tilt-element item-design reveal-card">
                        <div className="project-img">
                            <img src="images/ELECTRIC BIKE.jpg" alt="Social Media" />
                            <div className="project-overlay">
                                <a href="#" className="view-btn magnetic" onClick={(e) => handlePreview(e, "images/ELECTRIC BIKE.jpg")}><i className="ri-eye-line"></i></a>
                            </div>
                        </div>
                        <div className="project-content">
                            <span className="project-category">Social Media</span>
                            <h3 className="project-title">bike Poster</h3>
                        </div>
                    </div>

                    <div className="project-card tilt-element item-ui item-web reveal-card">
                        <div className="project-img">
                            <img src="images/save earth.jpg" alt="Mobile App" />
                            <div className="project-overlay">
                                <a href="#" className="view-btn magnetic" onClick={(e) => handlePreview(e, "images/save earth.jpg")}><i className="ri-eye-line"></i></a>
                            </div>
                        </div>
                        <div className="project-content">
                            <span className="project-category">UI/UX & Web</span>
                            <h3 className="project-title">earth </h3>
                        </div>
                    </div>

                    <div className="project-card tilt-element item-design item-ui reveal-card">
                        <div className="project-img">
                            <img src="ui design/Screenshot 2026-07-10 181319.png" alt="UI Design" />
                            <div className="project-overlay">
                                <a href="#" className="view-btn magnetic" onClick={(e) => handlePreview(e, "ui design/Screenshot 2026-07-10 181319.png")}><i className="ri-eye-line"></i></a>
                            </div>
                        </div>
                        <div className="project-content">
                            <span className="project-category">UI/UX Design</span>
                            <h3 className="project-title">UI Design Screenshot</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Preview Modal */}
            {previewImage && (
                <div className="image-preview-modal" onClick={() => setPreviewImage(null)}>
                    <div className="preview-content zoom-bounce-anim" onClick={(e) => e.stopPropagation()}>
                        <img src={previewImage} alt="Preview" />
                        <button className="close-preview" onClick={() => setPreviewImage(null)}>
                            <i className="ri-close-line"></i>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;
