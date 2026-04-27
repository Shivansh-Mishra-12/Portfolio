import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const linesRef = useRef([]);
  const emailRef = useRef(null);
  const socialRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const lines = linesRef.current;
      const socials = socialRef.current;

      // ✅ Set initial state FIRST (important)
      gsap.set([...lines, emailRef.current, ...socials], {
        opacity: 0,
        y: 50,
      });

      // Heading + subtext
      gsap.to(lines, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Email
      gsap.to(emailRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Socials
      gsap.to(socials, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-bg text-text overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,241,53,0.08),transparent_65%)] pointer-events-none" />

      {/* Label */}
      <p className="text-primary text-[10px] tracking-[0.4em] mb-12 opacity-80">
        // 04 — CONTACT
      </p>

      {/* Heading */}
      <div className="space-y-2 md:space-y-4">
        {["Let’s build", "something", "great."].map((text, i) => (
          <h1
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            className="font-sans font-bold tracking-tight leading-[1.05]
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6.5rem]"
          >
            {text}
          </h1>
        ))}
      </div>

      {/* Subtext */}
      <p
        ref={(el) => (linesRef.current[3] = el)}
        className="text-muted mt-10 max-w-md text-sm md:text-base leading-relaxed"
      >
        I'm currently open to frontend roles, freelance projects, and
        collaborations. Drop me a line!
      </p>

      {/* CTA + Socials */}
      <div className="mt-14 flex flex-col items-center gap-8">
        {/* Email */}
        <a
          ref={emailRef}
          href="mailto:hello@shivansh.dev"
          className="group relative font-bold tracking-tight
          text-3xl sm:text-4xl md:text-5xl text-primary"
        >
          hello@shivansh.dev

          <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

          <span className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition duration-500 bg-primary" />
        </a>

        {/* Socials */}
        <div className="flex gap-4">
          {["GH", "LI", "X", "CP"].map((item, i) => (
            <a
              key={i}
              ref={(el) => (socialRef.current[i] = el)}
              href="#"
              className="w-12 h-12 flex items-center justify-center
              rounded-md border border-white/30
              text-white/80 bg-white/[0.03]
              hover:bg-primary hover:text-black hover:border-primary
              transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;