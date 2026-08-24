import { useRef, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Projects from "./components/Projects";
import gsap from "gsap";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Needs from "./components/Needs";

const App = () => {
  const cursor = useRef(null);
  const cursorRing = useRef(null);

  useEffect(() => {
    // Faster GSAP setters (VERY important for performance)
    const xTo = gsap.quickTo(cursor.current, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor.current, "y", { duration: 0.2, ease: "power3" });

    const ringX = gsap.quickTo(cursorRing.current, "x", { duration: 0.5, ease: "power3" });
    const ringY = gsap.quickTo(cursorRing.current, "y", { duration: 0.5, ease: "power3" });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);

      ringX(e.clientX);
      ringY(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    // Hover effect
    const hoverElements = document.querySelectorAll(" a, button");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor.current, { scale: 2 });
        gsap.to(cursorRing.current, { scale: 1.5 });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(cursor.current, { scale: 1 });
        gsap.to(cursorRing.current, { scale: 1 });
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="w-full h-full">
      {/* Main Cursor */}
      <div
        ref={cursor}
        className="w-3 h-3 bg-primary rounded-full fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      ></div>

      {/* Cursor Ring */}
      <div
        ref={cursorRing}
        className="w-9 h-9 border border-primary rounded-full fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-60"
      ></div>

      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      {/* <Needs /> */}
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default App;