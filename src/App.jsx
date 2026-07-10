import React, { useState, useEffect } from 'react';

import Loader from './components/Loader.jsx';
import Cursor from './components/Cursor.jsx';
import CanvasBackground from './components/CanvasBackground.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Timeline from './components/Timeline.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Initialize Lenis Smooth Scrolling once App mounts
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Sync Lenis with GSAP ScrollTrigger
        gsap.ticker.add((time)=>{
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(lenis.raf);
            lenis.destroy();
        };
    }, []);

    const handleLoaderComplete = () => {
        setIsLoading(false);
        document.body.classList.remove('loading');
    };

    return (
        <React.Fragment>
            {isLoading && <Loader onComplete={handleLoaderComplete} />}
            
            <Cursor />
            <CanvasBackground />
            <Navbar />

            <main id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Pass loading state so Hero can trigger animations when done */}
                    <Hero isAppLoaded={!isLoading} />
                    <About />
                    <Skills />
                    <Projects />
                    <Timeline />
                    <Contact />
                    <Footer />
                </div>
            </main>
        </React.Fragment>
    );
}



export default App;
