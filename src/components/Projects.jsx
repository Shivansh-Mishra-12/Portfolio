// import React from 'react'
// import { useRef } from 'react';
// import gsap from 'gsap';
// import { useEffect } from 'react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Projects = () => {
//   const cardsRef = useRef([]);
//   const titleRef = useRef(null);
//   const sectionRef = useRef(null);
  
//   const data = [
//     { title: "ShopEase", desc: "A fully responsive e-commerce frontend with product filtering, cart management, and smooth animations.", tags: ["REACT", "CSS MODULES", "API"], icon: "🛒" },
//     { title: "WeatherNow", desc: "Real-time weather app with 5-day forecast, geolocation, and animated weather conditions.", tags: ["JAVASCRIPT", "OPENWEATHER API"], icon: "⛅" },
//     { title: "TaskFlow", desc: "A Kanban-style task manager with drag-and-drop, priority labels, and persistent storage.", tags: ["REACT", "LOCAL STORAGE"], icon: "✅" },
//     { title: "ChatUI Clone", desc: "A pixel-perfect UI clone of a popular messaging app — built to sharpen CSS and layout skills.", tags: ["HTML/CSS", "VANILLA JS"], icon: "💬" }
//   ];

//   useEffect(() => {
//     const cards = cardsRef.current;

//     // Set initial state for cards
//     gsap.set(cards, {
//       opacity: 0,
//       y: 100,
//     });

//     // Create scroll trigger animation for cards
//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: 'top 80%',
//       onEnter: () => {
//         gsap.to(cards, {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: 'power3.inout',
//         });
//       },
//     });

//     // Optional: Animate title on enter
//     gsap.set(titleRef.current, {
//       opacity: 0,
//       y: 50,
//     });

//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: 'top 85%',
//       onEnter: () => {
//         gsap.to(titleRef.current, {
//           opacity: 1,
//           y: 0,
//           duration: 0.6,
//           ease: 'power3.out',
//         });
//       },
//     });

//     // Cleanup
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="bg-[var(--color-bg)] text-[var(--color-text)] px-6 md:px-12 lg:px-20 py-24 min-h-screen">
//       <div className="mb-20">
//         <p className="text-[var(--color-primary)] text-xs tracking-[0.3em] mb-6">
//          // 02 — PROJECTS
//         </p>
//         <h1 ref={titleRef} className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
//           Things I've built.
//         </h1>
//       </div>

//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//         {data.map((item, i) => (
//           <div
//             key={i}
//             ref={(el) => {
//               if (el) {
//                 cardsRef.current[i] = el;
//               }
//             }}
//             className="group relative border border-[var(--color-border)] bg-[var(--color-card)] p-6 md:p-8 min-h-[340px] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
//           >
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(200,241,53,0.08),transparent_60%)]" />
//             <div className="text-4xl mb-10 opacity-90">{item.icon}</div>
//             <div>
//               <div className="flex flex-wrap gap-2 mb-5">
//                 {item.tags.map((tag, idx) => (
//                   <span key={idx} className="text-[10px] tracking-widest text-[var(--color-muted)] border border-[var(--color-border)] px-2 py-1">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <h3 className="font-sans text-lg font-semibold mb-3">{item.title}</h3>
//               <p className="text-sm text-[var(--color-muted)] mb-6">{item.desc}</p>
//             </div>
//             <div className="flex gap-6 text-[var(--color-primary)] text-xs tracking-widest">
//               <a href="#" className="hover:opacity-70 transition">LIVE DEMO →</a>
//               <a href="#" className="hover:opacity-70 transition">GITHUB →</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Projects


import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  const data = [
    { title: "ShopEase", desc: "A fully responsive e-commerce frontend...", tags: ["REACT", "CSS MODULES", "API"], icon: "🛒" },
    { title: "WeatherNow", desc: "Real-time weather app...", tags: ["JAVASCRIPT", "OPENWEATHER API"], icon: "⛅" },
    { title: "TaskFlow", desc: "Kanban-style task manager...", tags: ["REACT", "LOCAL STORAGE"], icon: "✅" },
    { title: "ChatUI Clone", desc: "UI clone project...", tags: ["HTML/CSS", "VANILLA JS"], icon: "💬" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Initial states
      gsap.set(titleRef.current, { opacity: 0, y: 50 });
      gsap.set(cardsRef.current, { opacity: 0, y: 100 });

      // Timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 30%",
          scrub: 1.2, // 🔥 smooth scroll syncing
          // markers: true, // enable for debugging
        }
      });

      // Animate title first
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 1,
      });

      // Then cards (staggered)
      tl.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power3.out",
        duration: 1,
      }, "-=0.5"); // overlap for smoothness

    }, sectionRef);

    return () => ctx.revert(); // clean GSAP properly
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--color-bg)] text-[var(--color-text)] px-6 md:px-12 lg:px-20 py-24 min-h-screen"
    >
      <div className="mb-20">
        <p className="text-[var(--color-primary)] text-xs tracking-[0.3em] mb-6">
          // 02 — PROJECTS
        </p>
        <h1
          ref={titleRef}
          className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          Things I've built.
        </h1>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="group relative border border-[var(--color-border)] bg-[var(--color-card)] p-6 md:p-8 min-h-[340px] flex flex-col justify-between overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(200,241,53,0.08),transparent_60%)]" />
            <div className="text-4xl mb-10 opacity-90">{item.icon}</div>

            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] tracking-widest text-[var(--color-muted)] border border-[var(--color-border)] px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-sans text-lg font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-6">
                {item.desc}
              </p>
            </div>

            <div className="flex gap-6 text-primary text-xs tracking-widest">
              <a href="#" className="hover:opacity-70 transition">
                LIVE DEMO →
              </a>
              <a href="#" className="hover:opacity-70 transition">
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