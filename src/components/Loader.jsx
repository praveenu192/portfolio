import React, { useEffect, useRef, useState } from 'react';

function Loader({ onComplete }) {
    const loaderRef = useRef(null);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            gsap.to(loaderRef.current, {
                yPercent: -100,
                duration: 1,
                ease: "power4.inOut",
                onComplete: () => {
                    if (onComplete) onComplete();
                }
            });
        }, 2000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="loader" ref={loaderRef}>
            <div className="loader-text">PRAVEEN</div>
            <div className="loader-progress"></div>
        </div>
    );
}

export default Loader;
