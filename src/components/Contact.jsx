import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const linesRef = useRef([]);
  const emailRef = useRef(null);
  const socialRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(linesRef.current, {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Email
      gsap.from(emailRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Social buttons
      gsap.from(socialRef.current, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-bg text-text overflow-hidden"
    >
      {/* Glow (subtle, centered top) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,241,53,0.06),transparent_60%)] pointer-events-none" />

      {/* Label */}
      <p className="text-primary text-[10px] tracking-[0.35em] mb-10">
        // 04 — CONTACT
      </p>

      {/* Heading */}
      <div className="space-y-3 md:space-y-5">
        {["Let’s build", "something", "great."].map((text, i) => (
          <h1
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            className="font-sans font-bold tracking-tight leading-[1.05]
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            {text}
          </h1>
        ))}
      </div>

      {/* Subtext */}
      <p
        ref={(el) => (linesRef.current[3] = el)}
        className="text-muted mt-8 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed"
      >
        I'm currently open to frontend roles, freelance projects, and
        collaborations. Drop me a line!
      </p>

      {/* EMAIL (important part you wanted) */}
      <h2
        ref={emailRef}
        className="mt-12 text-primary font-sans font-bold tracking-tight
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:underline
        hover:opacity-80 transition"
      >
        hello@shivansh.dev
      </h2>

      {/* SOCIALS */}
      <div className="flex gap-5 mt-10">
        {["GH", "LI", "X", "CP"].map((item, i) => (
          <a
            key={i}
            ref={(el) => (socialRef.current[i] = el)}
            href="#"
            className="w-11 h-11 flex items-center justify-center
            border border-white text-muted
            hover:text-primary hover:border-primary
            transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;


