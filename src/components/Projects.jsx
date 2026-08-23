// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Projects = () => {

//   const data = [
//     {
//       id: 1,
//       title: "Solar 3D",
//       mp4: '../dog.mp4',
//     },
//     {
//       id: 2,
//       title: "3D Car Configurator",
//       mp4: '../solar3d.mp4',
//     },
//     {
//       id: 3,
//       title: "Dogstudio Clone",
//       mp4: '../solar3d.mp4',
//     },
//   ]

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.set(titleRef.current, { opacity: 0, y: 50 });
//       gsap.set(cardsRef.current, { opacity: 0, y: 100 });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//           end: "top 30%",
//           scrub: 1.2,
//         },
//       });

//       tl.to(titleRef.current, {
//         opacity: 1,
//         y: 0,
//         ease: "power3.out",
//         duration: 1,
//       });

//       tl.to(
//         cardsRef.current,
//         {
//           opacity: 1,
//           y: 0,
//           stagger: 0.2,
//           ease: "power3.out",
//           duration: 1,
//         },
//         "-=0.5"
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);


//   const cardsRef = useRef([])
//   const pauseRef = useRef([])
//   const playRef = useRef([])
//   const width = window.innerWidth
//   const sectionRef = useRef()
//   const titleRef = useRef()
//   const playingdId=useRef(null)
//   const vid_controls = (el, id) => {
//     let index = id - 1
//     if(playingdId.current===id){
//       pauseVideoById(id)
//     }
//     else{
//       playVideoById(id)
//     }
//   }
//   return (
//     <section
//       ref={sectionRef}
//       id="projects"
//       className="bg-bg text-text px-6 md:px-12 lg:px-20 py-24 min-h-screen mb-20"
//     >
//       {/* Header */}
//       <div className="mb-20">
//         <p className="text-primary text-xs tracking-[0.3em] mb-6">
//           // 02 — PROJECTS
//         </p>
//         <h1
//           ref={titleRef}
//           className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
//         >
//           Things I've built.
//         </h1>
//       </div>

//       {/* Cards */}
//       <div className="card-con w-screen -mx-6 pt-2">

//         {/* Card prototype */}
//         <div className="w-screen! pt-11 sm:pt16 flex flex-col sm:flex-row flex-wrap justify-between h-[70vh]">

//           {
//             (window.innerWidth < 999) ? (
//               data.map((item, i) => {
//                 return (
//                   <div
//                     key={item.id}
//                     className="w-screen h-max relative"
//                     ref={(el) => (cardsRef.current[i] = el)}
//                     onClick={(e) => (vid_controls(e, item.id))}
//                   >
//                     <div className="absolute top-1/2 left-1/2 -translate-1/2 w-[80%]">
//                       <video src={item.mp4} playinline muted loop></video>
//                     </div>


//                     <div className="absolute top-1/2 left-1/2 -translate-1/2 pointer-events-none">
//                       <div className="w-12 hidden">
//                         <svg className="w-full"
//                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 9H11V15H9V9ZM13 9H15V15H13V9Z"></path></svg>
//                       </div>

//                       <div className="w-12">
//                         <svg className="w-full"
//                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>
//                       </div>
//                     </div>


//                   </div>
//                 )
//               })
//             ) : null
//           }
//         </div>

//       </div>
//     </section >
//   );
// };

// export default Projects;

import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ICON_HIDE_DELAY = 2500; // ms of inactivity before the PAUSE icon fades out

const Projects = () => {
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  const data = [
    { id: 1, title: "Solar 3D", desc: "A 3D Solar System simulation helping students understand things better.", mp4: "../solar3d.mp4", },

    { id: 2, title: "3D Car Configurator", desc: "An interactive product configurator allowing users to explore and customize a 3D vehicle directly in the browser.", mp4: "../car.mp4" },

    { id: 3, title: "Dogstudio Clone", desc: "A frontend recreation exploring immersive WebGL visuals, scroll interactions, animation and creative UI..",  mp4: "../dog.mp4" },

    { id: 4, title: "Custom Rocket Builder", desc: "An interactive 3D experience for exploring and selecting different rocket models in real time.", mp4: "../rocket.mp4" },

  ];

  // Which video (by id) is currently playing — only one at a time.
  const [playingId, setPlayingId] = useState(null);

  // Refs keyed by item id, so each card manages its own DOM nodes.
  const videoRefs = useRef({});
  const wrapperRefs = useRef({}); // element that scales up/down
  const iconGroupRefs = useRef({}); // icon container (positioning only, always visible)
  const playIconRefs = useRef({});
  const pauseIconRefs = useRef({});
  const projectTitleRefs = useRef({})
  // Per-id timers — only ever used for the pause icon's auto-hide.
  const hideIconTimers = useRef({});

  // Real hover support (desktop/mouse) vs touch — decides which
  // interaction model (hover vs tap) drives play/pause.
  const isDesktopRef = useRef(true);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      isDesktopRef.current = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
      ).matches;
    }
  }, []);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.set(titleRef.current, { opacity: 0, y: 50 });
  //     gsap.set(cardsRef.current, { opacity: 0, y: 100 });

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 75%",
  //         end: "top 30%",
  //         scrub: 1.2,
  //       },
  //     });

  //     tl.to(titleRef.current, {
  //       opacity: 1,
  //       y: 0,
  //       ease: "power3.out",
  //       duration: 1,
  //     });

  //     tl.to(
  //       cardsRef.current,
  //       {
  //         opacity: 1,
  //         y: 0,
  //         stagger: 0.2,
  //         ease: "power3.out",
  //         duration: 1,
  //       },
  //       "-=0.5"
  //     );
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);


  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
          markers: true,
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
          toggleActions: "play none none reverse",
          markers: true,
        },
      }
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);
  const clearTimer = (timerMap, id) => {
    if (timerMap.current[id]) {
      clearTimeout(timerMap.current[id]);
      delete timerMap.current[id];
    }
  };

  // Only the PAUSE icon auto-hides on inactivity. The play icon is a
  // permanent "this is a video" affordance and is never faded by this timer.
  // This only does anything while the card is actively playing.
  const showIcons = (id) => {
    clearTimer(hideIconTimers, id);

    if (playingId !== id) return;

    const pauseEl = pauseIconRefs.current[id];
    if (pauseEl) {
      gsap.to(pauseEl, { opacity: 1, duration: 0.25, ease: "power2.out" });
    }
    hideIconTimers.current[id] = setTimeout(() => {
      const target = pauseIconRefs.current[id];
      if (target) {
        gsap.to(target, { opacity: 0, duration: 0.4, ease: "power2.out" });
      }
    }, ICON_HIDE_DELAY);
  };

  const growVideo = (id) => {
    const el = wrapperRefs.current[id];
    if (el) gsap.to(el, { scale: 1.15, duration: 0.6, ease: "power3.out" });
    const title = projectTitleRefs.current[id - 1]
    if (title) {
      gsap.to(title, { scale: 1.15, duration: 0.6, ease: "power3.out" })
      title.style.textDecoration = 'underline'
      title.style.color = '#fff'
    }
  };

  const shrinkVideo = (id) => {
    const el = wrapperRefs.current[id];
    if (el) gsap.to(el, { scale: 1, duration: 0.6, ease: "power3.out" });
    const title = projectTitleRefs.current[id - 1]
    if (title) {
      gsap.to(title, { scale: 1, duration: 0.6, ease: "power3.out" })
      title.style.textDecoration = 'none'
    }
  };

  const toggleIconVisibility = (id, playing) => {
    const playIcon = playIconRefs.current[id];
    const pauseIcon = pauseIconRefs.current[id];
    if (playIcon && pauseIcon) {
      playIcon.classList.toggle("hidden", playing);
      pauseIcon.classList.toggle("hidden", !playing);

      if (playing) {
        // Pause icon starts fully visible; showIcons() schedules its fade.
        gsap.set(pauseIcon, { opacity: 1 });
      } else {
        // Not playing: cancel any pending fade timer and make sure the
        // play icon is fully, permanently visible.
        clearTimer(hideIconTimers, id);
        gsap.set(playIcon, { opacity: 1 });
      }
    }
  };

  // Play a given video. Whatever was playing before gets paused and
  // shrunk immediately — no need to wait for its shrink timer.
  const playVideoById = (id) => {
    if (playingId === id) return;

    if (playingId !== null && playingId !== id) {
      const prevVideo = videoRefs.current[playingId];
      if (prevVideo) prevVideo.pause();
      shrinkVideo(playingId);
      toggleIconVisibility(playingId, false);
    }

    const video = videoRefs.current[id];
    if (video) video.play().catch(() => { });
    growVideo(id);
    toggleIconVisibility(id, true);
    setPlayingId(id);
  };

  // Pause a given video and shrink it back immediately.
  const pauseVideoById = (id) => {
    const video = videoRefs.current[id];
    if (video) video.pause();
    toggleIconVisibility(id, false);
    setPlayingId((current) => (current === id ? null : current));
    shrinkVideo(id);
  };

  // Tap-to-toggle — used on touch devices (no real hover).
  const vid_controls = (e, id) => {
    if (isDesktopRef.current) return; // desktop uses hover instead
    if (playingId === id) {
      pauseVideoById(id);
    } else {
      playVideoById(id);
    }
  };

  // Hover handlers — used on desktop only.
  const handleMouseEnter = (id) => {
    if (!isDesktopRef.current) return;
    playVideoById(id);
    // Kick off the pause icon's auto-hide timer right away.
    showIcons(id);
  };

  const handleMouseLeave = (id) => {
    if (!isDesktopRef.current) return;
    pauseVideoById(id);
  };

  // Any pointer activity over a card resets its pause-icon auto-hide timer
  // (no-op if the card isn't currently playing).
  const handleActivity = (id) => {
    showIcons(id);
  };

  useEffect(() => {
    return () => {
      Object.values(hideIconTimers.current).forEach(clearTimeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-bg text-text px-6 md:px-12 lg:px-20 py-24 min-h-screen "
    >
      {/* Header */}
      <div className="mb-20">
        <p className="text-primary text-xs tracking-[0.3em] mb-6">
          // 02 — PROJECTS
        </p>
        <h1
          ref={titleRef}
          className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight -mb-9 sm:mb-0"
        >
          Things I've built.
        </h1>
      </div>

      {/* Cards */}
      <div className="card-con w-screen -mx-6 pt-2">
        <div className="w-full h-auto flex flex-col flex-wrap sm:flex-row gap-7 sm:gap-3 px-5 sm:mx-0">
          {data.map((item, i) => (


            <div

              key={item.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="w-[95%] mx-auto sm:w-5/12 sm:mx-auto md:w-[45%] md:-ml-2 xl:w-[38%] xl:ml-0 lg:-ml-7  sm:px-0  h-max mb-16 md:mb-24 lg:mb-26 xl:mb-28  relative flex justify-center"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
              onMouseMove={() => handleActivity(item.id)}
              onClick={(e) => vid_controls(e, item.id)}
            >
              <div className="w-full h-auto absolute top-0 left-0 ">
                <h1 ref={(el) => (projectTitleRefs.current[i] = el)} className="mx-auto w-fit text-lg font-bold tracking-widest leading-loose text-gray-300 sm:text-xl md:text-2xl lg:text-[1.7rem] lg:leading-normal lg:tracking-normal xl:text-3xl">{item.title}</h1>
              </div>
              <div
                ref={(el) => (wrapperRefs.current[item.id] = el)}
                className="w-[95%] relative pt-11 md:pt-14 lg:pt16 xl:pt-20 "
                style={{ transformOrigin: "center center" }}
              >
                <video
                  ref={(el) => (videoRefs.current[item.id] = el)}
                  src={item.mp4}
                  muted
                  loop
                  playsInline
                  className="w-full block rounded-lg border border-gray-600"
                />

                {/* Icon container: positioning only, always visible.
                    Individual icon visibility/opacity is controlled per-icon. */}
                <div
                  ref={(el) => (iconGroupRefs.current[item.id] = el)}
                  className="bg-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 pointer-events-none"
                >
                  <svg
                    ref={(el) => (playIconRefs.current[item.id] = el)}
                    className="w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16.3944 12.0001L10 7.7371V16.263L16.3944 12.0001ZM19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path>
                  </svg>
                  <svg
                    ref={(el) => (pauseIconRefs.current[item.id] = el)}
                    className="w-full hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z"></path>
                  </svg>
                </div>


                <div className="relative top-3 left-0">

                  <p className="desc mx-auto w-[95%] text-sm sm:text-base md:leading-loose lg:text-lg lg:leading-relaxed lg:tracking-tighter 2xl:text-xl text-center pt-2 tracking-wide text-gray-400">{item.desc}</p>
                </div>
                <div className="border sm:hidden border-gray-700 mt-11 w-screen absolute left-0 -ml-9 ">

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
