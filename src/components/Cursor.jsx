import React, { useEffect, useRef } from 'react';

function Cursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth <= 768) return;

        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            if (cursorRef.current) {
                cursorRef.current.style.left = mouseX + 'px';
                cursorRef.current.style.top = mouseY + 'px';
            }
        };

        window.addEventListener('mousemove', onMouseMove);

        const updateFollower = () => {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;
            if (followerRef.current) {
                followerRef.current.style.left = followerX + 'px';
                followerRef.current.style.top = followerY + 'px';
            }
        };

        gsap.ticker.add(updateFollower);

        // Manage hover states for magnetic elements dynamically
        const observer = new MutationObserver(() => {
            bindHoverEvents();
        });
        
        observer.observe(document.body, { childList: true, subtree: true });

        function bindHoverEvents() {
            const hoverElements = document.querySelectorAll('a, button, .magnetic, .skill-category, .project-card');
            
            hoverElements.forEach(el => {
                if (!el.hasAttribute('data-hover-bound')) {
                    el.setAttribute('data-hover-bound', 'true');
                    el.addEventListener('mouseenter', () => {
                        if (cursorRef.current) cursorRef.current.classList.add('active');
                        if (followerRef.current) followerRef.current.classList.add('active');
                    });
                    el.addEventListener('mouseleave', () => {
                        if (cursorRef.current) cursorRef.current.classList.remove('active');
                        if (followerRef.current) followerRef.current.classList.remove('active');
                    });
                }
            });
        }
        
        bindHoverEvents();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            gsap.ticker.remove(updateFollower);
            observer.disconnect();
        };
    }, []);

    return (
        <React.Fragment>
            <div className="cursor" ref={cursorRef}></div>
            <div className="cursor-follower" ref={followerRef}></div>
        </React.Fragment>
    );
}

export default Cursor;
