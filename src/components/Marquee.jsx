import { useEffect, useRef } from "react";
import gsap from "gsap";

const skills = [
  "React",
  "Tailwind CSS",
  "Git & GitHub",
  "Figma",
  "Responsive Design",
  "HTML5",
  "CSS3",
  "JavaScript",
];

const Marquee=()=>{
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;

    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={marqueeRef}
      className="w-full overflow-hidden bg-black py-4"
    >
      <div className="marquee-track flex w-max">
        {[...skills, ...skills].map((item, i) => (
          <div
            key={i}
            className="flex items-center whitespace-nowrap px-6 text-gray-400 text-sm md:text-base"
          >
            <span className="mr-4 text-lime-400">•</span>
            {item.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Marquee;