import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  const data = [
    {
      title: "Solar 3D",
      desc: "A fully Solar System Planetary Simulation",
      tags: ["REACT-THREE-FIBER", "TAILWINDCSS", "GSAP"],
      icon: "🪐",
      link: "https://solar3d-five.vercel.app/",
      github: "https://github.com/Shivansh-Mishra-12/solar3d.git",
    },
    {
      title: "Dentad 3D",
      desc: "A Dental Website with 3D elements enhancing looks...",
      tags: ["REACT-THREE-FIBER", "THREEJS", "GSAP", "TAILWINDCSS"],
      icon: "🦷",
      link: "https://dental-3d.netlify.app/",
      github: "https://github.com/Shivansh-Mishra-12/Dental-Web.git",
    },
    {
      title: "DogStudio CLONE",
      desc: "A CLONE of the Website DogStudio.co",
      tags: ["REACT-THREE-FIBER", "GSAP", "TAILWINDCSS", "THREEJS SHADERS"],
      icon: "🔥",
      link: "https://dogstudioclone.netlify.app/",
      github: "https://github.com/Shivansh-Mishra-12/DogStudioClone.git",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { opacity: 0, y: 50 });
      gsap.set(cardsRef.current, { opacity: 0, y: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 30%",
          scrub: 1.2,
        },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 1,
      });

      tl.to(
        cardsRef.current,
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          ease: "power3.out",
          duration: 1,
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-bg text-text px-6 md:px-12 lg:px-20 py-24 min-h-screen"
    >
      {/* Header */}
      <div className="mb-20">
        <p className="text-primary text-xs tracking-[0.3em] mb-6">
          // 02 — PROJECTS
        </p>
        <h1
          ref={titleRef}
          className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          Things I've built.
        </h1>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {data.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            onClick={() => window.open(item.link, "_blank")}
            className="group relative border border-border bg-card p-6 md:p-8 min-h-80 flex flex-col justify-between overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            {/* Glow overlay (fixed) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(200,241,53,0.08),transparent_60%)] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              <div className="text-4xl mb-10 opacity-90 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] tracking-widest text-muted border border-border px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-sans text-lg font-semibold mb-3 group-hover:text-white transition">
                {item.title}
              </h3>

              <p className="text-sm text-muted mb-6">
                {item.desc}
              </p>
            </div>

            {/* Buttons */}
            <div className="relative z-10 flex gap-6 text-primary text-xs tracking-widest">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="transition hover:text-white hover:underline"
              >
                LIVE DEMO →
              </a>

              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="transition hover:text-white hover:underline"
              >
                GITHUB →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;